// STEP 2-1 포트폴리오 샘플 임베드 (잠금 해제 후 '{ 샘플 추후 삽입 예정 }' 자리를 샘플 화면으로 바꿈)
// 암호화 묶음을 다시 만들지 않아도 바로 반영되도록 별도 공개 스크립트로 둠
(()=>{
const SAMPLE_HTML=`<div class="sample-embed">
<div class="sample-embed-bar">
<div class="sample-embed-title"><strong>김과학 비임상 포트폴리오</strong><small>바이오·의료 R&amp;D 웹뷰 포트폴리오 샘플</small></div>
<div class="sample-embed-actions">
<a class="sample-embed-btn" href="data/portfolio-kimgwahak/index.html" target="_blank" rel="noopener">↗ 새 창으로 보기</a>
<a class="sample-embed-btn is-primary" href="data/portfolio-kimgwahak.zip" download>↓ 파일 다운로드</a>
</div>
</div>
<iframe class="sample-embed-frame" src="data/portfolio-kimgwahak/index.html" title="김과학 비임상 포트폴리오 샘플" loading="lazy"></iframe>
</div>`;

// 안내 문구가 있는 자리만 찾아 교체함 (이미 바뀌었으면 아무것도 하지 않음)
const apply=()=>{
  document.querySelectorAll('.lesson-placeholder').forEach(el=>{
    if(el.textContent.includes('샘플 추후 삽입'))el.outerHTML=SAMPLE_HTML;
  });
};

document.addEventListener('lecture:unlocked',apply);
apply();
})();
