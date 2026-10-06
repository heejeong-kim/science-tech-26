(()=>{
const step1=document.querySelector('#step-1')?.closest('.lesson-view');
if(!step1||step1.querySelector('.persona-toggle'))return;
const persona=document.createElement('details');
persona.className='lesson-toggle persona-toggle';
persona.innerHTML=`<summary><strong>☑️ [실습 참고🧍🏽‍♀️] 수업용 페르소나 김서연</strong><button type="button" class="persona-copy" aria-label="페르소나 김서연 내용 복사">복사</button></summary><div class="toggle-body persona-body">
<p class="persona-notice">※ 아래 인물·회사·프로젝트는 수업을 위해 구성한 가상 사례로 실제 지원서에서는 본인의 실제 경험과 확인 가능한 결과만 사용</p>
<p class="persona-lead"><strong>🧍🏽‍♀️김서연 : 바이오·의료 R&amp;D 8년, 경력 공백 없이 연구원에서 선임연구원으로 성장한 사례</strong></p>
<ul class="persona-profile">
<li>서울 소재 대학 생명공학 관련 학과 졸업(2012.03~2016.02), 동 대학원 생명공학 석사(2016.03~2018.08)</li>
<li>대학 재학 중 학과 과대표 및 전공 학술동아리 활동</li>
<li>졸업 후 바이오 R&amp;D 분야에서 총 8년 근무(2018.09~현재), 2회 이직</li>
<li>1차: 신약개발 바이오 벤처 연구원 2년 (2018.09~2020.08)</li>
<li>2차: 바이오·헬스케어 기업 연구원→선임연구원 3년 (2020.09~2023.08, 2022.03 선임 승진)</li>
<li>3차: 바이오 기업 선임연구원 약 3년 (2023.09~현재)</li>
<li><strong>주요 전문성:</strong> 세포 기반 효능평가, 분자생물학 분석, 바이오마커 분석, 실험 프로토콜 개선, 연구 데이터 해석</li>
<li><strong>주요 기술:</strong> Cell culture, qPCR, Western blot, ELISA, Flow cytometry, GraphPad Prism</li>
<li><strong>사이드 프로젝트:</strong> 공개 바이오 데이터를 활용한 질환 관련 유전자 발현·바이오마커 탐색 및 결과 시각화 (2025.06~2025.12)</li>
<li><strong>연구 성과:</strong> 국내 학술지 공동저자 논문 1편(2018.06), 국내 특허 출원 공동 발명자 1건(2020.05, 공개), 국내 학회 포스터 발표 1건(2022.10), 사내 우수 연구 개선상(2025.01)</li>
<li><strong>다음 목표:</strong> 바이오·의료 기업 R&amp;D 선임/책임급 연구직</li>
</ul>
<h4>Career Timeline</h4>
<div class="persona-timeline">
<article><strong>대학·대학원 · 2012.03~2018.08</strong><p>생명공학 전공 → 과대표 → 전공 학술동아리에서 논문 스터디·전공 프로젝트 경험 → 석사 과정에서 세포 기반 실험 연구</p></article>
<span aria-hidden="true">↓</span>
<article><strong>1차 회사 | 바이오 벤처 · 연구원 · 2018.09~2020.08 (2년)</strong><p>실험 수행 → 후보물질 효능평가 → 반복 실험의 재현성 문제 분석</p></article>
<span aria-hidden="true">↓</span>
<article><strong>2차 회사 | 바이오·헬스케어 기업 · 연구원/선임 · 2020.09~2023.08 (3년, 2022.03 선임 승진)</strong><p>실험 설계 → 바이오마커 분석 → 프로젝트 단위 연구 → 외부 시험기관 협업</p></article>
<span aria-hidden="true">↓</span>
<article><strong>3차 회사 | 바이오 기업 · 선임연구원 · 2023.09~현재 (약 3년)</strong><p>연구 설계 → 데이터 기반 의사결정 → 프로토콜 표준화 → 후배 연구원 지원 → 프로젝트 리딩</p></article>
<span aria-hidden="true">↓</span>
<article><strong>사이드 프로젝트 · 2025.06~2025.12</strong><p>공개 바이오 데이터 분석 → 질환 관련 유전자 발현 탐색 → 바이오마커 후보 분석 → 시각화 리포트 제작</p></article>
</div>
<p class="persona-closing">각 STEP의 수업용 가상 사례인 김서연을 따라가면서 하나의 경력이 어떻게 경력 기술서와 포트폴리오로 발전하는지 확인</p>
</div>`;
step1.querySelector('.lesson-goal').after(persona);
// 페르소나 내용을 일반 텍스트로 복사 (토글이 닫혀 있어도 동작)
const personaText=()=>{
  const body=persona.querySelector('.persona-body');const lines=[];
  body.childNodes.forEach(node=>{
    if(node.nodeType!==1)return;
    if(node.matches('ul'))node.querySelectorAll('li').forEach(li=>lines.push('- '+li.textContent.trim()));
    else if(node.matches('.persona-timeline'))node.querySelectorAll('article').forEach((item,index)=>{if(index)lines.push('↓');lines.push(item.querySelector('strong').textContent.trim());lines.push(item.querySelector('p').textContent.trim())});
    else if(node.matches('h4'))lines.push('','['+node.textContent.trim()+']');
    else lines.push(node.textContent.trim());
  });
  return lines.join('\n');
};
persona.querySelector('.persona-copy').addEventListener('click',async event=>{
  // 버튼 클릭 시 토글이 열리고 닫히지 않게 막음
  event.preventDefault();event.stopPropagation();
  const button=event.currentTarget;const value=personaText();
  try{await navigator.clipboard.writeText(value)}catch(error){const area=document.createElement('textarea');area.value=value;area.style.position='fixed';area.style.opacity='0';document.body.appendChild(area);area.select();document.execCommand('copy');area.remove()}
  button.textContent='복사됨';button.classList.add('copied');setTimeout(()=>{button.textContent='복사';button.classList.remove('copied')},1400);
});

const jdSample=[...step1.querySelectorAll('.sample-toggle')].find(toggle=>toggle.querySelector('summary')?.textContent.includes('김서연의 JD 분해 시트'));
const jdRows=jdSample?.querySelectorAll('.lesson-table tr');
if(jdRows?.length>=5){
  jdRows[1].children[3].innerHTML='1차 후보물질 효능평가, 2차 바이오마커 분석(발현 데이터로 작용기전 가설 검토 참여), 3차 연구 프로젝트 운영·팀 실험 기준 확정·SOP 표준 확산<br><strong>Gap:</strong> MOA 연구의 의사결정과 연구 과제를 Project Leader로 직접 리딩한 경험은 부족함';
  jdRows[2].children[1].textContent='in vitro, Western blot, TR-FRET, MOA, TPD, PROTAC, Cell-based assay, MGD';
  jdRows[2].children[3].innerHTML='Cell culture, qPCR, Western blot, ELISA, Flow cytometry<br><strong>Gap:</strong> TR-FRET, TPD, PROTAC, MGD의 직접 수행 근거는 없음';
  jdRows[3].children[3].innerHTML='3차 프로토콜 표준화로 효능·기전 판단에 쓰이는 팀 실험 데이터의 일관성 확보(1차 재현성 개선 경험 기반), 2차 발현 데이터로 작용기전 가설 검토 참여<br><strong>Gap:</strong> 기전 연구의 의사결정과 과제 전체를 직접 주도한 경험은 부족하며, 현재 근거는 운영·기준 확정·표준 확산 경험임';
}
})();
