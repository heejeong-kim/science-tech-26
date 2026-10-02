(()=>{
const previous=document.querySelector('#step-3-chapter-3')?.closest('.lecture-step3-portfolio');
if(!previous||document.querySelector('#step-3-chapter-4'))return;
const article=document.createElement('article');
article.className='lecture-step3-final';
article.innerHTML=`
<h2 id="step-3-chapter-4">4. 최종 점검</h2>
<aside class="lesson-goal"><div class="goal-title"><span>🎯</span><strong>학습 목표</strong></div><div class="goal-body">체크리스트와 피어리뷰로 포트폴리오를 점검하고, 교육 이후의 수정·보완 계획을 세울 수 있다.</div></aside>
<h3>4.1 최종 점검 체크리스트</h3>
<div class="final-check-box"><section class="final-check-group"><h4>내용</h4><ul class="practice-checklist">
<li><label><input type="checkbox"> 대표 프로젝트가 목표 JD 요구(실습 1)와 직접 연결됨</label></li><li><label><input type="checkbox"> Action의 주어가 '우리'가 아니라 '나'이고, 판단 근거가 있음</label></li><li><label><input type="checkbox"> Result에 확인 가능한 증거(전후 비교 기준 포함)와 확산이 있음</label></li><li><label><input type="checkbox"> 모든 수치·성과가 원본 기록과 일치함</label></li><li><label><input type="checkbox"> '검토·참여·주도' 같은 역할 표현이 실제로 한 역할과 같음</label></li>
</ul></section>
<section class="final-check-group"><h4>구성</h4><ul class="practice-checklist"><li><label><input type="checkbox"> 문제 → 과정 → 결과의 전체 이야기는 대표 프로젝트(3·4페이지)에만 있음</label></li><li><label><input type="checkbox"> 5페이지 보조 프로젝트는 요약 카드로만 보여 주고, 대표 프로젝트와 같은 역량이거나 JD Gap을 보완함</label></li></ul></section>
<section class="final-check-group"><h4>보안·윤리</h4><ul class="practice-checklist"><li><label><input type="checkbox"> 기관명·개인정보·미공개 연구내용·과제번호가 남아 있지 않음</label></li><li><label><input type="checkbox"> Canvas가 자동으로 넣은 이미지까지 포함해 실험 결과로 오해될 수 있는 AI 이미지가 없음</label></li><li><label><input type="checkbox"> 차트 수치가 Sheets·원본 기록과 같고, 비교 기준(기간·자료)이 표시됨</label></li></ul></section>
<section class="final-check-group"><h4>표현·디자인</h4><ul class="practice-checklist"><li><label><input type="checkbox"> '혁신적', '획기적' 같은 AI 상투어를 구체적인 행동으로 바꿈</label></li><li><label><input type="checkbox"> 페이지마다 핵심 메시지가 1개임</label></li><li><label><input type="checkbox"> 30초 테스트: 처음 보는 사람이 30초 안에 '누구이고 무엇을 잘하는지' 말할 수 있음</label></li></ul></section></div>
<h3>4.2 짝 피어리뷰</h3><p>옆 사람과 포트폴리오를 바꿔 보고 3가지 질문에 답해 줌</p>
<ol class="peer-review-questions"><li>이 사람의 핵심역량을 한 문장으로 말하면?</li><li>대표 프로젝트에서 이 사람이 <strong>직접 판단한 것</strong>은?</li><li>더 알고 싶거나 믿기 어려운 부분은?</li></ol>
<p class="lesson-note">※ 3번에서 나온 질문은 면접에서 실제로 받을 가능성이 높은 질문이므로, 답변을 준비하거나 포트폴리오에 근거를 보강함</p>
<h3>4.3 교육 이후 수정·보완 방법</h3>
<ul class="after-class-list"><li><strong>원본 대조</strong> — 연습용 가상 수치는 실제 성과로 쓰지 않으며, 공개 가능한 실제 기록으로 확인된 내용만 최종 문서에 반영함</li><li><strong>[보완 필요] 대응</strong> — 경력 기술서에서 근거가 약하다고 나온 JD 요구는, 기록으로 확인되면 Inventory부터 고치고, 확인되지 않으면 역할을 바꾸지 않고 면접 답변으로 준비함</li><li><strong>JD별 버전 관리</strong> — 지원 공고가 바뀌면 실습 1(JD 분해)과 실습 6(경력 기술서) 프롬프트를 다시 실행해 강조점을 조정함</li><li><strong>두 번째 프로젝트 확장</strong> — 5페이지의 보조 프로젝트 중 JD와 가장 가까운 것을 실습 4·5와 같은 방식으로 STAR 구조화해 대표 프로젝트로 키움</li><li><strong>면접 준비로 연결</strong> — 대표 STAR는 그대로 면접 답변이 됨. STEP 3의 1장 AI 인터뷰 프롬프트를 면접관 모드로 활용해 예상 질문에 답해 봄</li><li><strong>복귀 지원 제도 확인</strong> — 경력 공백 후 복귀를 준비한다면 한국여성과학기술인육성재단(WISET) 등의 여성과학기술인 경력복귀 지원 프로그램을 함께 확인함. 사업명·지원 내용·모집 시기는 매년 바뀌므로 최신 공고를 확인함</li></ul>
<h3>4.4 오늘의 최종 결과물</h3>
<ul class="practice-checklist final-deliverables"><li><label><input type="checkbox"> 목표 JD 분해 시트</label></li><li><label><input type="checkbox"> 경력 Inventory와 핵심역량 3~5개</label></li><li><label><input type="checkbox"> 대표 프로젝트 STAR 1건 (AI 인터뷰로 보완한 치환어 버전)</label></li><li><label><input type="checkbox"> 직무 맞춤 경력 기술서 초안</label></li><li><label><input type="checkbox"> 6페이지 포트폴리오 시안 (Google Slides, 최소 4페이지)</label></li></ul>
<aside class="lesson-summary"><div class="summary-title"><span>📌</span><strong>오늘의 정리</strong></div><p>지원 JD 분석 → 경력 Inventory 작성(민감정보 치환) → 경험에서 역량 도출 → JD와 경험 연결·대표 경험 선정 → STAR 작성 → AI로 질문·점검 → 경력 기술서 → 스토리보드 → 포트폴리오</p><p>AI는 내 경력을 대신 만드는 도구가 아니라, <strong>내 경험을 발견하고 구조화하고 표현하도록 돕는 도구</strong>임</p></aside>`;
previous.append(article);
})();
