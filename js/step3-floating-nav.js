(()=>{
if(document.querySelector('.step3-floating-nav'))return;
const steps=[
  {number:'STEP 1',selector:'#step-1',label:'2026 과학기술 채용 JD 읽기',chapters:[]},
  {number:'STEP 2',selector:'#step-2',label:'STAR로 내 경력 구조화하기',chapters:[['1','#step-2-chapter-1','경력 기술서와 포트폴리오'],['2','#step-2-chapter-2','경력 Inventory와 핵심역량'],['3','#step-2-chapter-3','대표 프로젝트 STAR 구조화']]},
  {number:'STEP 3',selector:'#step-3',label:'AI로 나만의 포트폴리오 만들기',chapters:[['1','#step-3-chapter-1','Gemini로 경력 기술서 초안 작성'],['2','#step-3-chapter-2','Gemini로 STAR 구체화'],['3','#step-3-chapter-3','포트폴리오 구성'],['4','#step-3-chapter-4','최종 점검']]}
];
if(steps.some(step=>!document.querySelector(step.selector)))return;

const nav=document.createElement('nav');
nav.className='step3-floating-nav lecture-floating-nav';
nav.setAttribute('aria-label','강의교안 STEP 바로가기');
nav.innerHTML=`<span class="floating-nav-label">LECTURE</span>${steps.map(step=>`<div class="floating-step-group" data-step="${step.selector.slice(1)}"><a class="floating-chapter-link floating-step-link" href="${step.selector}" aria-label="${step.number}. ${step.label}" title="${step.number}. ${step.label}"><span>${step.number}</span><em>${step.label}</em></a>${step.chapters.length?`<div class="floating-subnav" aria-label="${step.number} 세부 목차">${step.chapters.map(([number,selector,label])=>`<a class="floating-sub-link" href="${selector}" aria-label="${number}. ${label}" title="${number}. ${label}">${number}<em>${label}</em></a>`).join('')}</div>`:''}</div>`).join('')}<a class="floating-option-link" href="#portfolio-webview-option" aria-label="[옵션] 웹뷰로 포트폴리오 작업하기"><span aria-hidden="true">✦</span><em>[옵션] 웹뷰로 포트폴리오 작업하기</em></a><a class="floating-top-link" href="#top" aria-label="맨 위로 이동" title="맨 위로 이동"><span>↑</span><small>TOP</small></a>`;
document.body.append(nav);

nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',event=>{
  const target=document.querySelector(link.getAttribute('href'));
  if(!target)return;
  event.preventDefault();
  target.scrollIntoView({behavior:'smooth',block:'start'});
  history.replaceState(null,'',link.getAttribute('href'));
}));

const groups=[...nav.querySelectorAll('.floating-step-group')];
const stepLinks=[...nav.querySelectorAll('.floating-step-link')];
const subLinks=[...nav.querySelectorAll('.floating-sub-link')];
const setActiveStep=id=>{
  groups.forEach(group=>group.classList.toggle('is-expanded',group.dataset.step===id));
  stepLinks.forEach(link=>link.classList.toggle('is-active',link.getAttribute('href')===`#${id}`));
};
stepLinks.forEach(link=>link.addEventListener('click',()=>setActiveStep(link.getAttribute('href').slice(1))));
const stepObserver=new IntersectionObserver(entries=>{
  const visible=entries.filter(entry=>entry.isIntersecting).sort((a,b)=>a.boundingClientRect.top-b.boundingClientRect.top);
  if(visible[0])setActiveStep(visible[0].target.id);
},{rootMargin:'-18% 0px -72% 0px',threshold:0});
steps.forEach(step=>stepObserver.observe(document.querySelector(step.selector)));

const chapterObserver=new IntersectionObserver(entries=>{
  const visible=entries.filter(entry=>entry.isIntersecting).sort((a,b)=>a.boundingClientRect.top-b.boundingClientRect.top);
  if(!visible[0])return;
  subLinks.forEach(link=>link.classList.toggle('is-active',link.getAttribute('href')===`#${visible[0].target.id}`));
},{rootMargin:'-18% 0px -72% 0px',threshold:0});
steps.flatMap(step=>step.chapters).forEach(([,selector])=>{
  const chapter=document.querySelector(selector);
  if(chapter)chapterObserver.observe(chapter);
});
setActiveStep('step-1');

const updateVisibility=()=>{
  nav.classList.toggle('is-visible',scrollY>160);
  const current=[...steps].reverse().find(step=>document.querySelector(step.selector).getBoundingClientRect().top<=190);
  if(current)setActiveStep(current.selector.slice(1));
};
updateVisibility();
addEventListener('scroll',updateVisibility,{passive:true});
})();
