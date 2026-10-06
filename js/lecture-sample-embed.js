// STEP 2-1 포트폴리오 샘플 임베드 (잠금 해제 후 '{ 샘플 추후 삽입 예정 }' 자리를 샘플 화면으로 바꿈)
// 암호화 묶음을 다시 만들지 않아도 바로 반영되도록 별도 공개 스크립트로 둠
(()=>{
// 샘플 목록 — 추가할 때는 이 배열에 항목만 늘리면 됨
const SAMPLES=[
  {
    name:'김과학 비임상 포트폴리오',
    desc:'바이오·의료 R&amp;D 웹뷰 포트폴리오 샘플',
    url:'data/portfolio-kimgwahak/index.html',
    zip:'data/portfolio-kimgwahak.zip'
  },
  {
    name:'홍반도 반도체 패키징 포트폴리오',
    desc:'반도체 패키징 공정 R&amp;D 웹뷰 포트폴리오 샘플',
    url:'data/portfolio-hongbando/index.html',
    zip:'data/portfolio-hongbando.zip'
  },
  {
    name:'최데이 AI·데이터 포트폴리오',
    desc:'AI·데이터 기반 프로젝트 매니저 웹뷰 포트폴리오 샘플',
    url:'data/portfolio-choiday/index.html',
    zip:'data/portfolio-choiday.zip'
  }
];

// 샘플 1건의 카드 HTML 생성 (번호 + 제목 + 버튼 + 미리보기 iframe)
const card=(s,i)=>`<div class="sample-embed">
<div class="sample-embed-bar">
<div class="sample-embed-title"><strong><span class="sample-embed-no">${i+1}</span>${s.name}</strong><small>${s.desc}</small></div>
<div class="sample-embed-actions">
<a class="sample-embed-btn" href="${s.url}" target="_blank" rel="noopener">↗ 새 창으로 보기</a>
<a class="sample-embed-btn is-primary" href="${s.zip}" download>↓ 파일 다운로드</a>
</div>
</div>
<iframe class="sample-embed-frame" src="${s.url}" title="${s.name} 샘플" loading="lazy"></iframe>
</div>`;

const SAMPLE_HTML=`<div class="sample-embed-list">${SAMPLES.map(card).join('')}</div>`;

// 안내 문구가 있는 자리만 찾아 교체함 (이미 바뀌었으면 아무것도 하지 않음)
const apply=()=>{
  document.querySelectorAll('.lesson-placeholder').forEach(el=>{
    if(el.textContent.includes('샘플 추후 삽입'))el.outerHTML=SAMPLE_HTML;
  });
};

document.addEventListener('lecture:unlocked',apply);
apply();
})();
