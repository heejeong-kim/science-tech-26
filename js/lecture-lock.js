// STEP 2 이후 교안 잠금 해제 (비밀번호는 소스에 없고, 입력값으로 암호문을 복호화함)
(()=>{
const DATA=window.LECTURE_LOCKED;
const shell=document.querySelector('.lecture-step-shell');
if(!DATA||!shell)return;

const STORE_KEY='lecture-unlock-'+DATA.salt.slice(0,10);
const fromB64=value=>Uint8Array.from(atob(value),char=>char.charCodeAt(0));
const toB64=buffer=>{let text='';new Uint8Array(buffer).forEach(byte=>{text+=String.fromCharCode(byte)});return btoa(text)};

// 잠금 안내 카드
const card=document.createElement('section');
card.className='lecture-lock';
card.id='lecture-lock';
card.innerHTML=`<div class="lock-icon" aria-hidden="true">🔒</div>
<h2>STEP 2부터는 비밀번호가 필요함</h2>
<p>강의 중 안내하는 비밀번호를 입력하면 STEP 2·STEP 3 교안과 옵션 실습이 열림</p>
<form class="lock-form" autocomplete="off">
<label class="sr-only" for="lecturePassword">교안 비밀번호</label>
<input id="lecturePassword" type="password" placeholder="비밀번호 입력" required>
<button type="submit">열기</button>
</form>
<p class="lock-message" aria-live="polite"></p>`;
shell.appendChild(card);

// 상단 단계 메뉴의 STEP 2·3을 잠금 카드로 연결
const nav=shell.querySelector('.lecture-step-nav');
if(nav){
  [[1,'STEP 2'],[2,'STEP 3']].forEach(([index,label])=>{
    if(nav.children[index])nav.children[index].outerHTML=`<a href="#lecture-lock" class="step-locked"><span>${label}</span><strong>🔒 비밀번호 입력 후 열람</strong></a>`;
  });
}

const form=card.querySelector('.lock-form');
const input=card.querySelector('input');
const button=card.querySelector('button');
const message=card.querySelector('.lock-message');

const deriveKey=async password=>{
  const base=await crypto.subtle.importKey('raw',new TextEncoder().encode(password),'PBKDF2',false,['deriveKey']);
  return crypto.subtle.deriveKey({name:'PBKDF2',salt:fromB64(DATA.salt),iterations:DATA.iter,hash:'SHA-256'},base,{name:'AES-GCM',length:256},true,['decrypt']);
};

const openWith=async key=>{
  // 비밀번호가 틀리면 여기서 복호화 오류가 남
  const plain=await crypto.subtle.decrypt({name:'AES-GCM',iv:fromB64(DATA.iv)},key,fromB64(DATA.data));
  const bundle=JSON.parse(new TextDecoder().decode(plain));
  card.remove();
  bundle.files.forEach(file=>{
    const script=document.createElement('script');
    script.textContent=file.code+'\n//# sourceURL='+file.name;
    document.body.appendChild(script);
  });
  document.dispatchEvent(new CustomEvent('lecture:unlocked'));
  // 주소에 #step-2 같은 위치가 있으면 열린 뒤 그 위치로 이동
  if(location.hash&&location.hash!=='#lecture-lock'){const target=document.querySelector(location.hash);if(target)target.scrollIntoView({block:'start'})}
};

form.addEventListener('submit',async event=>{
  event.preventDefault();
  const password=input.value;
  if(!password)return;
  button.disabled=true;message.textContent='확인 중…';message.classList.remove('is-error');
  try{
    const key=await deriveKey(password);
    await openWith(key);
    // 같은 탭에서는 새로고침해도 다시 묻지 않도록 키만 임시 보관 (탭을 닫으면 사라짐)
    try{sessionStorage.setItem(STORE_KEY,toB64(await crypto.subtle.exportKey('raw',key)))}catch(error){}
  }catch(error){
    message.textContent='비밀번호가 맞지 않음. 다시 입력해 주세요';message.classList.add('is-error');
    button.disabled=false;input.select();
  }
});

// 이미 열었던 탭이면 자동으로 열기
(async()=>{
  let saved=null;
  try{saved=sessionStorage.getItem(STORE_KEY)}catch(error){}
  if(!saved)return;
  try{
    const key=await crypto.subtle.importKey('raw',fromB64(saved),{name:'AES-GCM'},false,['decrypt']);
    await openWith(key);
  }catch(error){try{sessionStorage.removeItem(STORE_KEY)}catch(e){}}
})();
})();
