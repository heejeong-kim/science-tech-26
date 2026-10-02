(()=>{
const shell=document.querySelector('.lecture-step-shell');
if(!shell)return;
const nav=shell.querySelector('.lecture-step-nav');
if(nav){const steps=nav.children;if(steps[2])steps[2].outerHTML='<a href="#step-3"><span>STEP 3</span><strong>AI로 나만의 포트폴리오 만들기</strong></a>';}
const article=document.createElement('article');
article.className='lesson-view step3-view';
article.innerHTML=`
<h1 id="step-3">STEP 3. AI로 나만의 포트폴리오 만들기</h1>
<blockquote class="step3-flow"><strong>STAR로 구조화한 대표 프로젝트를 AI 인터뷰로 구체화 → 보완한 STAR와 경력사항으로 Gemini 경력 기술서 초안 작성 → 스토리보드를 Canvas·Slides로 시각화해 포트폴리오 구성</strong></blockquote>

<h2 id="step-3-chapter-1">1. Gemini로 STAR 구체화</h2>
<aside class="lesson-goal"><div class="goal-title"><span>🎯</span><strong>학습 목표</strong></div><div class="goal-body">AI의 질문에 답하며 STAR의 판단 근거와 증거를 보완하고, 경력 기술서와 포트폴리오 3~4페이지에 쓸 재료를 완성할 수 있다.</div></aside>
<p class="lesson-lead-title"><strong>왜 경력 기술서 전에 STAR를 다시 쓰는가?</strong></p>
<p>실습 4에서 혼자 쓴 STAR에는 본인에게 너무 당연해서 빠뜨린 판단 근거와 증거가 있을 수 있으므로 AI가 면접관처럼 질문하고 내가 답하며 그 빈칸을 채움</p><p>보완한 STAR는 2장 경력 기술서의 대표 프로젝트와 포트폴리오 3·4페이지(문제와 과정 · 결과)에 그대로 쓰이므로, 경력 기술서보다 먼저 완성함</p>
<div class="table-wrap"><table class="lesson-table star-detail-table"><thead><tr><th>STAR</th><th>혼자 쓸 때 자주 빠지는 것</th><th>구체화하면 포트폴리오에서</th><th>반영 페이지</th></tr></thead><tbody><tr><td><strong>S·T</strong></td><td>그 문제가 왜 중요했는지(연구·과제에 미친 영향)</td><td>문제 상황 도식과 한 줄 문제 정의</td><td>3. 대표 프로젝트 ① 문제와 과정</td></tr><tr><td><strong>Action</strong></td><td>왜 그 방법을 골랐는지(판단 근거), 실제 진행 순서</td><td>단계별 흐름도 + 단계마다 판단 근거 한 줄</td><td>3. 대표 프로젝트 ① 문제와 과정</td></tr><tr><td><strong>Result</strong></td><td>전후 비교 기준(기간·대상), 확인 가능한 산출물, 확산 범위</td><td>전후 비교 차트 + 적용 범위·인정 내용</td><td>4. 대표 프로젝트 ② 결과</td></tr></tbody></table></div>
<p class="lesson-note">※ 이 단계에서 보완한 STAR(실습 5)는 2장 경력 기술서 프롬프트와 3장 포트폴리오 전환 프롬프트에 그대로 입력되고, AI가 한 질문 3개는 면접 예상 질문으로도 활용</p>

<h3>1.1 AI 인터뷰 3단계</h3>
<ol class="ai-interview-steps"><li><strong>역질문 받기</strong><span>AI가 내 STAR의 빈 곳을 찾아 질문함</span></li><li><strong>내가 답하기</strong><span>기억과 기록에 근거해 직접 답하며, 기억나지 않는 수치는 지어내지 말고 ‘기록 확인 필요’라고 답함</span></li><li><strong>재작성 + 사실 확인</strong><span>내 답변만으로 STAR를 다시 쓰고, 문장마다 근거를 확인함</span></li></ol>
<p><strong>AI 인터뷰 요청 프롬프트</strong></p>
<div class="prompt-block"><button type="button" class="copy-prompt">복사</button><pre>[역할]
너는 {목표 직무} 면접관이야.

[입력]
아래는 치환어로 쓴 내 대표 프로젝트 STAR 초안이야.
{실습 4 STAR, 치환어 버전}

[요청]
1. 아래 세 가지 중 부족한 부분을 찾아 줘.
   - S·T: 그 문제가 연구·과제에 어떤 영향을 줬는지
   - Action: 왜 그 방법을 골랐는지(내 판단 근거)
   - Result: 전후 비교 기준(기간·자료), 확산 범위
2. 이걸 보완할 질문 3개를 만들고, 한 번에 하나씩 물어봐 줘.
3. 내 답이 모호하면 그 질문에 한 번만 더 물어봐 줘.
4. 내가 3개에 모두 답하면 초안 내용과 내 답변만 써서 STAR를 다시 작성해 줘.

[출력 형태]
- 1번은 표로: | 구분 | 부족한 부분 | 이유 |
- 4번은 표로: | STAR | 다시 쓴 내용 | 근거 |
- 근거 칸에는 초안에 있던 내용은 [초안], 내 답변에서 나온 내용은 [Q1]처럼 표시해 줘

[제약]
- 내가 답하지 않은 수치·성과는 쓰지 마
- 내가 '기록 확인 필요'라고 답한 부분은 [기록 확인]으로 비워 둬
- '혁신적', '획기적', '주도적으로' 같은 평가어 대신 구체적인 행동으로 써 줘</pre></div>

<h4 class="practice-title"><span>✍️</span> [실습 5] AI 인터뷰로 STAR 구체화하기</h4>
<div class="table-wrap"><table class="lesson-table star-revision-template"><thead><tr><th>STAR</th><th>보완한 내용</th></tr></thead><tbody><tr><td><strong>Situation</strong></td><td></td></tr><tr><td><strong>Task</strong></td><td></td></tr><tr><td><strong>Action</strong></td><td></td></tr><tr><td><strong>Result</strong></td><td></td></tr></tbody></table></div>

<details class="lesson-toggle sample-toggle"><summary>[실습 참고 🧍🏽‍♀️] 김서연의 AI 인터뷰 질문과 코멘트</summary><div class="toggle-body">
<details class="lesson-toggle nested-toggle"><summary>AI 인터뷰 프롬프트</summary><div class="toggle-body"><div class="prompt-block"><button type="button" class="copy-prompt">복사</button><pre>[역할]
너는 바이오·의료 기업 R&amp;D 선임/책임급 연구직(바이오 연구원 Project Leader) 면접관이야.

[입력]
아래는 치환어로 쓴 내 대표 프로젝트 STAR 초안이야.
- 대표 프로젝트: Inventory [6] C사 연구 프로젝트 운영 중 실험 프로토콜 표준화 (2024.03~2024.12 / 배경: [3] A사 재현성 개선 경험 2019.09~2020.03)
- S: C사(선임연구원)에서 연구원마다 실험 방식이 달라 반복 실험 결과의 편차가 팀 단위로 반복되고, 후보물질 효능·기전 비교 판단이 지연됨. 배경: A사에서 비슷한 편차 문제의 원인을 직접 분석해 본 경험이 있음
- T: 선임연구원으로서 팀 실험의 편차 원인을 규명하고, 팀 전체가 따르는 표준 프로토콜(SOP)을 만들어 적용해야 함
- A: ① 팀원별 실험 단계 조건(세포 계대수, 처리 시점, 측정 시점)과 결과를 표로 정리하고 qPCR·Western blot 데이터를 GraphPad Prism으로 비교해 편차가 큰 구간을 찾음 ② 실험 자원이 제한되어 모든 변수를 동시에 바꾸지 않고, 편차 기여도가 큰 조건부터 하나씩 통제하는 방식을 선택함 ③ A사에서 익힌 원인 분석 방식을 적용해 SOP 초안을 작성하고, 데이터 리뷰 회의에서 팀원 피드백을 반영해 표준화함
- R: 증거 — 반복 실험 간 편차(CV)가 약 25% → 10% 이내로 감소하고 재실험 요청이 줄어듦 / 확산 — 표준 SOP가 팀원 4명·2개 과제에 적용되고 신규 연구원 온보딩 자료로도 사용됨 / 인정 — 2025.01 사내 우수 연구 개선상 수상

[요청]
1. 아래 세 가지 중 부족한 부분을 찾아 줘.
   - S·T: 그 문제가 연구·과제에 어떤 영향을 줬는지
   - Action: 왜 그 방법을 골랐는지(내 판단 근거)
   - Result: 전후 비교 기준(기간·자료), 확산 범위
2. 이걸 보완할 질문 3개를 만들고, 한 번에 하나씩 물어봐 줘.
3. 내 답이 모호하면 그 질문에 한 번만 더 물어봐 줘.
4. 내가 3개에 모두 답하면 초안 내용과 내 답변만 써서 STAR를 다시 작성해 줘.

[출력 형태]
- 1번은 표로: | 구분 | 부족한 부분 | 이유 |
- 4번은 표로: | STAR | 다시 쓴 내용 | 근거 |
- 근거 칸에는 초안에 있던 내용은 [초안], 내 답변에서 나온 내용은 [Q1]처럼 표시해 줘

[제약]
- 내가 답하지 않은 수치·성과는 쓰지 마
- 내가 '기록 확인 필요'라고 답한 부분은 [기록 확인]으로 비워 둬
- '혁신적', '획기적', '주도적으로' 같은 평가어 대신 구체적인 행동으로 써 줘</pre></div></div></details>
<details class="lesson-toggle nested-toggle"><summary>AI 인터뷰 결과</summary><div class="toggle-body"><div class="table-wrap"><table class="lesson-table"><thead><tr><th>구분</th><th>부족한 부분</th><th>이유</th></tr></thead><tbody><tr><td>Action — 판단 근거</td><td>어떤 조건을 먼저 통제했는지와 그 근거가 없음</td><td>“편차 기여도가 큰 조건부터”라고만 되어 있어 세포 계대수·처리 시점·측정 시점 중 무엇을 왜 먼저 골랐는지 알 수 없음</td></tr><tr><td>Action — 판단 근거</td><td>SOP를 팀 기준으로 확정한 방식이 구체적이지 않음</td><td>‘팀원 피드백을 반영’만 있어 의견이 다를 때 무엇을 근거로 기준을 정했는지 알 수 없음</td></tr><tr><td>Result — 증거</td><td>CV 감소의 비교 기준이 없음</td><td>표준화 전후 언제·어떤 자료를 비교했는지 확인이 필요함</td></tr><tr><td>Result — 증거</td><td>‘재실험 요청이 줄어듦’의 근거가 없음</td><td>어떤 기록에서 확인했는지 확인이 필요함</td></tr><tr><td>Result — 확산</td><td>SOP 적용 방식이 구체적이지 않음</td><td>팀원 4명·2개 과제 적용과 온보딩 자료 활용 방식 확인이 필요함</td></tr></tbody></table></div><p><strong>🤖 Q1.</strong> 세포 계대수·처리 시점·측정 시점 중 어떤 조건을 가장 먼저 통제했고, 그렇게 정한 데이터나 관찰 근거는 무엇이었나요?</p><p><strong>🧍🏽‍♀️ 김서연</strong> 편차 기여도가 가장 큰 조건부터 통제했어.</p><p><strong>🤖 Q1 재질문.</strong> 답변이 아직 모호합니다. 세 조건 중 실제로 먼저 통제한 조건 하나와, 그 조건을 고른 데이터를 구체적으로 알려 주세요.</p><p><strong>🧍🏽‍♀️ 김서연</strong> 세포 계대수야. 계대수별로 데이터를 나눠 보니 편차가 가장 컸고, 배양 단계에서 바로 바꿀 수 있는 조건이라 먼저 통제했어.</p><p class="lesson-note">💬 첫 답처럼 모호하면 프롬프트 규칙대로 AI가 한 번 더 물음. 이때 나온 ‘계대수 + 바로 바꿀 수 있는 조건’이 포트폴리오 3페이지 흐름도의 판단 근거가 됨</p><p><strong>🤖 Q2.</strong> CV가 약 25%에서 10% 이내로 줄었다는 것은 어떤 기간의 어떤 자료를 비교해 확인했나요? 재실험 요청 감소는 어디서 확인했나요?</p><p><strong>🧍🏽‍♀️ 김서연</strong> 표준화 전 3개월과 후 3개월의 실험노트·데이터 리뷰 자료를 비교했어. 재실험 요청이 줄어든 건 데이터 리뷰 회의 기록에서 확인했고, 정확한 건수는 기록 확인 필요야.</p><p class="lesson-note">💬 ‘기록 확인 필요’라고 답한 건수는 STAR에 숫자로 넣지 않고, 기록으로 확인되면 추가함</p><p><strong>🤖 Q3.</strong> SOP를 팀 기준으로 확정할 때 팀원 의견이 다르면 무엇을 근거로 정했고, 확정한 SOP는 어디까지 적용됐나요?</p><p><strong>🧍🏽‍♀️ 김서연</strong> 측정 시점은 팀원 의견이 갈려서 두 조건으로 1회 비교 실험을 했고, 그 데이터를 데이터 리뷰 회의에 올려 합의한 뒤 SOP를 확정했어. 이후 팀원 4명이 2개 과제에 적용했고, 신규 연구원 온보딩 자료에도 넣었어.</p><p class="lesson-note">💬 의견이 아니라 비교 데이터로 팀 기준을 정한 과정은 목표 JD의 Project Leader 요구에 대응하는 근거가 됨</p></div></details>
<details class="lesson-toggle nested-toggle"><summary>AI 인터뷰로 재 수정한 STAR (※ 수치는 수업용 가상 예시)</summary><div class="toggle-body"><div class="table-wrap"><table class="lesson-table"><thead><tr><th>STAR</th><th>다시 쓴 내용</th><th>근거</th></tr></thead><tbody><tr><td>Situation</td><td>C사에서 연구원마다 실험 방식이 달라 반복 실험 결과의 편차가 팀 단위로 반복되었고, 이로 인해 후보물질 효능·기전 비교 판단이 지연됨. 배경: A사에서 비슷한 편차 문제의 원인을 직접 분석해 본 경험이 있음</td><td>[초안]</td></tr><tr><td>Task</td><td>선임연구원으로서 팀 실험의 편차 원인을 규명하고, 팀 전체가 따르는 표준 프로토콜(SOP)을 만들어 적용해야 함</td><td>[초안]</td></tr><tr><td>Action ①</td><td>팀원별 세포 계대수·처리 시점·측정 시점과 qPCR·Western blot 결과를 표로 정리하고, GraphPad Prism으로 비교해 편차가 큰 구간을 찾음</td><td>[초안]</td></tr><tr><td>Action ②</td><td>계대수별로 나눈 데이터에서 편차가 가장 컸고 배양 단계에서 바로 바꿀 수 있는 조건이었기 때문에, 세포 계대수를 가장 먼저 통제함</td><td>[Q1]</td></tr><tr><td>Action ③</td><td>A사에서 익힌 원인 분석 방식을 적용해 SOP 초안을 작성함</td><td>[초안]</td></tr><tr><td>Action ④</td><td>측정 시점을 두고 팀원 의견이 갈리자, 두 조건으로 1회 비교 실험을 진행하고 그 데이터를 근거로 데이터 리뷰 회의에서 합의해 SOP를 확정함</td><td>[Q3]</td></tr><tr><td>Result 증거</td><td>표준화 전 3개월과 후 3개월의 실험노트·데이터 리뷰 자료를 비교한 결과, 반복 실험 간 CV가 약 25%에서 10% 이내로 감소하고 재실험 요청이 줄어듦</td><td>[초안] [Q2]</td></tr><tr><td>Result 확산</td><td>표준 SOP가 팀원 4명·2개 과제에 적용되고 신규 연구원 온보딩 자료로도 사용됨</td><td>[초안] [Q3]</td></tr><tr><td>Result 인정</td><td>2025.01 사내 우수 연구 개선상 수상</td><td>[초안]</td></tr></tbody></table></div></div></details>
<details class="lesson-toggle nested-toggle"><summary>📁 AI로 구체화된 STAR</summary><div class="toggle-body"><p class="lesson-note">※ 이 최종본이 2장 경력 기술서와 3장 스토리보드 프롬프트에 그대로 입력됨</p><div class="table-wrap"><table class="lesson-table final-star-table"><thead><tr><th>STAR</th><th>보완한 내용</th></tr></thead><tbody><tr><td>Situation</td><td>C사에서 연구원마다 실험 방식이 달라 반복 실험 결과의 편차가 팀 단위로 반복되었고, 이로 인해 후보물질 효능·기전 비교 판단이 지연됨. 배경: A사에서 비슷한 편차 문제의 원인을 직접 분석해 본 경험이 있음</td></tr><tr><td>Task</td><td>선임연구원으로서 팀 실험의 편차 원인을 규명하고, 팀 전체가 따르는 표준 프로토콜(SOP)을 만들어 적용해야 함</td></tr><tr><td>Action</td><td>① 팀원별 세포 계대수·처리 시점·측정 시점과 qPCR·Western blot 결과를 표로 정리하고, GraphPad Prism으로 비교해 편차가 큰 구간을 찾음 ② 계대수별로 나눈 데이터에서 편차가 가장 컸고 배양 단계에서 바로 바꿀 수 있는 조건이었기 때문에, 세포 계대수를 가장 먼저 통제함 ③ A사에서 익힌 원인 분석 방식을 적용해 SOP 초안을 작성함 ④ 측정 시점을 두고 팀원 의견이 갈리자, 두 조건으로 1회 비교 실험을 진행하고 그 데이터를 근거로 데이터 리뷰 회의에서 합의해 SOP를 확정함</td></tr><tr><td>Result</td><td>증거 – 표준화 전 3개월과 후 3개월의 실험노트·데이터 리뷰 자료를 비교한 결과, 반복 실험 간 CV가 약 25%에서 10% 이내로 감소하고 재실험 요청이 줄어듦 / 확산 – 표준 SOP가 팀원 4명·2개 과제에 적용되고 신규 연구원 온보딩 자료로도 사용됨 / 인정 – 2025.01 사내 우수 연구 개선상 수상</td></tr></tbody></table></div></div></details>
</div></details>

<h2 id="step-3-chapter-2">2. Gemini로 경력 기술서 초안 작성</h2>
<aside class="lesson-goal"><div class="goal-title"><span>🎯</span><strong>학습 목표</strong></div><div class="goal-body">STEP 2의 경력 Inventory·핵심역량과 1장에서 보완한 STAR를 바탕으로 Gemini를 활용해 목표 직무에 맞춘 경력 기술서 초안을 작성할 수 있다.</div></aside>
<p class="lesson-lead-title"><strong>왜 포트폴리오 전에 경력 기술서를 만드는가?</strong></p>
<ul><li>과학기술 직무 채용에서는 경력 기술서가 기본 서류이며, 대부분의 경력직 공고가 서류 단계에서 경력 기술서를 요구</li><li>경력 기술서는 내 경력 전체를 사실 기준으로 정리한 원본 문서로, 이후 포트폴리오와 면접 답변이 모두 이 문서를 기준으로 만들어짐</li><li>오늘의 흐름: STAR 구체화로 대표 프로젝트를 깊게 보완 → 경력 기술서로 전체 경력을 넓게 정리 → 포트폴리오로 시각화</li><li>이번 실습의 경력 요약 3줄·핵심역량은 포트폴리오 2페이지에, 연구 성과·보유 기술은 6페이지에 그대로 쓰임</li></ul>
<p><strong>경력 기술서 기본 구성</strong></p>
<div class="table-wrap"><table class="lesson-table career-structure-table"><thead><tr><th>구성</th><th>내용</th><th>작성 팁</th></tr></thead><tbody>
<tr><td><strong>경력 요약</strong></td><td>3줄 요약</td><td>분야·연차 / 핵심역량 / 목표 직무에서의 기여</td></tr><tr><td><strong>핵심역량</strong></td><td>3~5개</td><td>실습 3에서 도출한 역량 문장을 그대로 사용</td></tr><tr><td><strong>경력 사항</strong></td><td>회사·기간·직급·담당 업무</td><td>최근 경력부터 역순으로 작성</td></tr><tr><td><strong>주요 프로젝트</strong></td><td>프로젝트별 STAR 요약</td><td>대표 프로젝트를 가장 먼저, 가장 자세히</td></tr><tr><td><strong>연구 성과</strong></td><td>논문·특허·학회 발표·수상</td><td>공개된 성과만, 서지 형식 통일(없는 항목은 생략)</td></tr><tr><td><strong>보유 기술</strong></td><td>실험기법·장비·분석도구</td><td>‘능숙 / 활용 가능’처럼 수준을 구분</td></tr>
</tbody></table></div>

<h4 class="practice-title"><span>✍️</span> [실습 6] Gemini로 경력 기술서 초안 작성하기</h4>
<p><strong>경력 기술서 초안 요청 프롬프트</strong></p>
<div class="prompt-block"><button type="button" class="copy-prompt">복사</button><pre>[역할]
너는 {목표 직무} 채용 담당자가 서류 검토에서 통과시킬 수 있도록 경력 기술서를 작성하는 과학기술 커리어 컨설턴트야.

[맥락]
나는 {분야} {연차}년 차 경력자이고, {목표 직무}에 지원하려고 해.
(경력 공백이 있으면) {공백 기간}과 그 동안의 {학습·활동}: {내용}

[입력]
1) 목표 JD 분해 시트: {실습 1}
2) 경력 Inventory: {실습 2, 치환어 버전}
3) 핵심역량: {실습 3}
4) 보완한 대표 프로젝트 STAR(선정 이유·강조할 점 포함): {실습 5 최종 STAR}

[요청]
아래 구성으로 경력 기술서 초안을 작성해 줘.
1) 경력 요약 3줄 — 분야·연차 / 핵심역량 / 목표 직무에서의 기여
2) 핵심역량 3~5개 — 실습 3 역량 문장을 그대로 사용
3) 경력 사항 — 최근순, 회사별 기간·직급·담당 업무
4) 주요 프로젝트 — 대표 프로젝트 1건 + JD와 가까운 보조 프로젝트 2건
5) 연구 성과 — 입력에 있는 공개 성과만, 없는 항목은 생략
6) 보유 기술 — 실험기법·장비·분석도구
경력 요약과 주요 프로젝트는 대표 프로젝트의 '강조할 점'에 맞춰 강조점을 정해 줘.
마지막에 JD 분해 시트의 요구 중 경력 기술서에서 근거가 약한 요구가 있으면 [보완 필요]로 따로 알려 줘.

[출력 형태]
- 섹션 제목은 ■로 시작
- 문장은 '~함'으로 끝나는 개조식
- 대표 프로젝트는 S·T·A·R 4줄, 보조 프로젝트는 2줄
- 연구 성과는 '연도 | 성과 | 기관(치환어)' 형식으로 통일
- 보유 기술은 표로: | 분류 | 기술 | 수준(능숙 / 활용 가능) | 활용 경험 |

[제약]
- JD 핵심 키워드는 자연스럽게 반영하되, 입력에 없는 경험·수치·성과는 만들지 마
- 추정한 내용은 [추정]으로 표시해 줘
- 입력에 없는 기간은 [기간 확인], 논문 제목·학술지명·특허번호 같은 서지 정보는 [서지 확인]으로 비워 둬
- 경력 공백은 숨기거나 꾸미지 말고 기간과 활동을 사실대로 한 줄로 써 줘
- 주어가 '우리'가 아니라 내가 직접 한 행동이 드러나게 써 줘</pre></div>

<section class="lesson-insight multiturn-guide"><h4 class="insight-title"><span aria-hidden="true">🧠</span><strong>초안이 나온 뒤 멀티턴으로 다듬기</strong><span aria-hidden="true">🧠</span></h4><p>첫 초안은 완성본이 아니라 출발점이므로, 같은 대화창에서 이어서 요청하며 한 문장씩 정교하게 고쳐야 합니다. 새 대화를 열면 앞에서 넣은 입력 자료를 다시 붙여넣어야 하므로 한 대화창에서 이어 가는 것이 효율적이니 참고하세요.</p><ul><li><strong>사실 확인</strong> : 입력에 없는 경험·수치·성과가 들어갔는지, [추정] 표시 문장이 사실인지 확인하고 근거가 없으면 삭제</li><li><strong>빈칸 채우기</strong> : [기간 확인]·[서지 확인]으로 비워 둔 곳을 내 기록(경력증명서·논문·특허 자료)을 보고 채움</li><li><strong>중복 줄이기</strong> : 주요 프로젝트가 경력 사항과 같은 문장을 반복하면 대표 1건 + 보조 2건 정도로 줄임</li><li><strong>형식 맞추기</strong> : 보유 기술의 ‘능숙 / 활용 가능’ 구분, 연구 성과의 서지 형식처럼 위 표의 작성 팁이 빠진 곳을 보완</li><li><strong>AI 티 지우기</strong> : 문장마다 반복되는 표현(‘직접’, ‘체계적으로’ 등)과 평가어를 내 말투의 구체적인 행동으로 바꿈</li><li><strong>[추천] 숨은 역량 정리</strong> : 근거가 있는 것은 핵심역량·경력 요약에 반영하고, 기존 역량과 겹치면 흡수한 뒤 [추천] 섹션은 최종본에서 삭제</li><li><strong>JD 연결 확인</strong> : 실습 1 JD의 핵심 키워드가 경력 요약·핵심역량에 자연스럽게 들어갔는지 확인</li></ul>
<div class="table-wrap"><table class="lesson-table revision-table"><thead><tr><th>고칠 점</th><th>이어서 보낼 요청 예시</th></tr></thead><tbody><tr><td><strong>입력에 없는 내용</strong></td><td>“프로젝트 03의 ‘재현성 개선을 지원함’은 입력에 없는 결과야. 삭제하고 ‘프로토콜을 개선함’까지만 써 줘”</td></tr><tr><td><strong>표현·강조점</strong></td><td>“경력 요약 2번째 줄은 데이터 분석보다 ‘원인 분석 후 실험 설계 판단’이 드러나게 바꿔 줘”</td></tr><tr><td><strong>분량·중복</strong></td><td>“주요 프로젝트가 경력 사항과 겹쳐. 대표 1건 + 보조 2건만 남기고 나머지는 빼 줘”</td></tr><tr><td><strong>빈칸 채우기</strong></td><td>“[서지 확인]으로 비운 논문은 ‘○○학회지, 2018, 공동저자’로 채워 줘”</td></tr><tr><td><strong>다른 직무용 버전</strong></td><td>“같은 내용으로 R&amp;D PM 직무용 버전도 만들어 줘. 강조점은 문제 정의·협업·일정 관리로 바꿔 줘”</td></tr><tr><td><strong>최종본 받기</strong></td><td>“지금까지 수정한 내용을 모두 반영해서 경력 기술서 전체를 다시 보여 줘”</td></tr></tbody></table></div>
<p class="lesson-note">※ 한 번에 하나씩 요청하고, 고칠 문장을 그대로 인용해 지정, 여러 개를 한꺼번에 요청하면 고친 곳과 안 고친 곳을 확인하기 어려움<br>※ 수정할수록 AI가 앞에서 지운 내용을 다시 넣는 경우가 있으므로, 최종본은 삭제나 수정한 문장이 되살아나지 않았는지 마지막에 한 번 더 확인 필요</p></section>

<details class="lesson-toggle sample-toggle"><summary>[실습 참고 🧍🏽‍♀️] 김서연의 경력 기술서 초안과 코멘트</summary><div class="toggle-body">
<details class="lesson-toggle nested-toggle"><summary>경력 기술서 프롬프트</summary><div class="toggle-body"><div class="prompt-block"><button type="button" class="copy-prompt">복사</button><pre>[역할]
너는 바이오·의료 기업 R&amp;D 선임/책임급 연구직 채용 담당자가 서류 검토에서 통과시킬 수 있도록 경력 기술서를 작성하는 과학기술 커리어 컨설턴트야.

[맥락]
나는 바이오 R&amp;D 8년 차(2018.09~현재) 경력자이고, 바이오·의료 기업 R&amp;D 선임/책임급 연구직(바이오 연구원 Project Leader)에 지원하려고 해.
경력 공백은 없어.

[입력]
1) 목표 JD 분해 시트
- Action: MOA 연구, in vitro 효능평가, Project Leader / 해석: 후보물질의 작용기전을 규명하고 연구 과제를 이끄는 역할 / 근거: A사 후보물질 효능평가, B사 바이오마커 분석(발현 데이터로 작용기전 가설 검토 참여), C사 연구 프로젝트 운영·팀 실험 기준 확정·SOP 표준 확산 / Gap: MOA 연구의 의사결정과 연구 과제를 Project Leader로 직접 리딩한 경험은 부족함
- Skill: in vitro, Western blot, TR-FRET, MOA, TPD, PROTAC, Cell-based assay, MGD / 해석: 세포 기반 실험 설계·분석 및 표적단백질분해 관련 기술 역량 / 근거: Cell culture, qPCR, Western blot, ELISA, Flow cytometry / Gap: TR-FRET, TPD, PROTAC, MGD의 직접 수행 근거는 없음
- Problem: 후보물질의 작용기전(MOA) 규명, 연구 과제 리딩 / 해석: 작용기전 근거를 신뢰할 수 있는 데이터로 확보해 과제 의사결정을 지원해야 함 / 근거: C사 프로토콜 표준화로 효능·기전 판단에 쓰이는 팀 실험 데이터의 일관성 확보, B사 발현 데이터로 작용기전 가설 검토 참여 / Gap: 기전 연구의 의사결정을 직접 주도한 경험은 보완 필요
- Qualification: 석사 이상, 경력 5년 이상 / 근거: 생명공학 석사(2016.03~2018.08), 바이오 R&amp;D 8년(2018.09~현재)

2) 경력 Inventory (치환어 버전)
- [1] 대학 전공 학술동아리 (2012.03~2016.02): 논문 스터디, 전공 프로젝트 참여 / 논문검색, 발표, 기초 실험 / 연구 관심 분야 구체화
- 바이오 벤처 A사 · 연구원 (2018.09~2020.08)
  - [2] 후보물질 효능평가 (2018.09~2020.08): 세포 배양, 처리조건 설계, 효능 데이터 분석 / Cell culture, ELISA, qPCR / 후보물질별 효능 비교 / 후속 검증 후보군 논의 근거 제공
  - [3] 실험 재현성 개선 (2019.09~2020.03): 단계별 실험조건과 결과 편차 비교 / qPCR, Western blot, GraphPad Prism / 반복 실험 결과 편차 / 원인 후보 도출 및 프로토콜 개선
- 바이오·헬스케어 B사 · 연구원 → 선임연구원(2022.03 승진) (2020.09~2023.08)
  - [4] 바이오마커 분석 (2021.01~2022.12): 유전자·단백질 발현 데이터 분석 / qPCR, Western blot, Flow cytometry / 처리군별 반응 차이 해석 / 바이오마커 후보·작용기전(MOA) 가설 검토 근거 제공
  - [5] 외부 시험기관 협업 (2021.06~2023.06): 시험조건 협의, 결과보고서 검토 / 시험계획서, 결과보고서 / 내·외부 시험조건 차이 / 후속 시험 설계 기준 정리
- 바이오 C사 · 선임연구원 (2023.09~현재)
  - [6] 연구 프로젝트 운영 (2023.09~현재, 표준화 2024.03~2024.12): 실험계획 검토, 데이터 리뷰, 프로토콜 표준화 / 연구계획, 데이터 리뷰, SOP / 연구 수행 일관성 확보 / 연구 프로세스 개선 및 팀 협업 지원
- [7] 사이드 프로젝트 (2025.06~2025.12): 공개 바이오 데이터에서 질환 관련 발현 패턴 탐색 / 공개 데이터, 데이터 분석·시각화 / 업무 밖 분석역량 확장 / 분석 리포트 및 시각화 결과물 제작
- 연구 성과
  - [8] 논문: 석사 학위 연구 기반 국내 학술지 논문 1편, 공동저자 (2018.06)
  - [9] 특허: 세포 기반 효능평가 관련 국내 특허 출원 1건, 공동 발명자 (2020.05, 공개) / A사에서 효능평가 실험 설계와 데이터 정리 담당
  - [10] 학회 발표: 바이오마커 분석 결과 국내 학회 포스터 발표 1건 (2022.10, 회사 공개 승인) / B사
  - [11] 수상: 사내 우수 연구 개선상 (2025.01, 실험 프로토콜 표준화 성과) / C사

3) 핵심역량 (근거는 Inventory 번호)
- 세포 기반 효능평가 설계 및 분석 (근거: [2] [9]) / 공통역량 D·T·A
- 분자생물학 데이터 기반 원인 분석 (근거: [3]) / 공통역량 A·P
- 실험 프로토콜 최적화·표준화 (근거: [3] [6] [11]) / 공통역량 P·E
- 바이오마커 분석 및 데이터 해석 — 작용기전(MOA) 가설 검토 근거 제공 (근거: [4] [10]) / 공통역량 D·T·A
- 연구 프로젝트 협업·운영 (근거: [5] [6]) / 공통역량 C·E

4) 보완한 대표 프로젝트 STAR (AI 인터뷰 최종본, 치환어 버전)
- 대표 프로젝트: Inventory [6] C사 연구 프로젝트 운영 중 실험 프로토콜 표준화 (2024.03~2024.12 / 배경: [3] A사 재현성 개선 경험 2019.09~2020.03)
- 선정 이유: 목표 JD가 '경력 5년+, Project Leader'를 요구하므로 개인의 문제해결이 팀 표준으로 확산된 경험을 대표로 선정함. 이 경험은 과제 전체를 직접 리딩한 근거가 아니라 연구 프로젝트 운영·팀 실험 기준 확정·SOP 표준 확산 역량의 근거이며, 효능·기전 판단용 데이터의 신뢰성을 높인 인접 경험으로 JD의 Problem(작용기전 규명)을 지원함
- 강조할 점: 연구직(선임·책임) 기준으로 원인 분석 방법과 실험 설계 판단, 개인의 개선을 팀 표준으로 확산한 과정
- S: C사에서 연구원마다 실험 방식이 달라 반복 실험 결과의 편차가 팀 단위로 반복되었고, 이로 인해 후보물질 효능·기전 비교 판단이 지연됨. 배경: A사에서 비슷한 편차 문제의 원인을 직접 분석해 본 경험이 있음
- T: 선임연구원으로서 팀 실험의 편차 원인을 규명하고, 팀 전체가 따르는 표준 프로토콜(SOP)을 만들어 적용해야 함
- A: ① 팀원별 세포 계대수·처리 시점·측정 시점과 qPCR·Western blot 결과를 표로 정리하고, GraphPad Prism으로 비교해 편차가 큰 구간을 찾음 ② 계대수별로 나눈 데이터에서 편차가 가장 컸고 배양 단계에서 바로 바꿀 수 있는 조건이었기 때문에, 세포 계대수를 가장 먼저 통제함 ③ A사에서 익힌 원인 분석 방식을 적용해 SOP 초안을 작성함 ④ 측정 시점을 두고 팀원 의견이 갈리자, 두 조건으로 1회 비교 실험을 진행하고 그 데이터를 근거로 데이터 리뷰 회의에서 합의해 SOP를 확정함
- R: 증거 — 표준화 전 3개월과 후 3개월의 실험노트·데이터 리뷰 자료를 비교한 결과, 반복 실험 간 CV가 약 25%에서 10% 이내로 감소하고 재실험 요청이 줄어듦 / 확산 — 표준 SOP가 팀원 4명·2개 과제에 적용되고 신규 연구원 온보딩 자료로도 사용됨 / 인정 — 2025.01 사내 우수 연구 개선상 수상

[요청]
아래 구성으로 경력 기술서 초안을 작성해 줘.
1) 경력 요약 3줄 — 분야·연차 / 핵심역량 / 목표 직무에서의 기여
2) 핵심역량 3~5개 — 입력 3)의 역량 문장을 그대로 사용
3) 경력 사항 — 최근순, 회사별 기간·직급·담당 업무
4) 주요 프로젝트 — 대표 프로젝트 1건 + JD와 가까운 보조 프로젝트 2건
5) 연구 성과 — 입력에 있는 공개 성과만, 없는 항목은 생략
6) 보유 기술 — 실험기법·장비·분석도구
경력 요약과 주요 프로젝트는 대표 프로젝트의 '강조할 점'에 맞춰 강조점을 정해 줘.
마지막에 JD 분해 시트의 요구 중 경력 기술서에서 근거가 약한 요구가 있으면 [보완 필요]로 따로 알려 줘.

[출력 형태]
- 섹션 제목은 ■로 시작
- 문장은 '~함'으로 끝나는 개조식
- 대표 프로젝트는 S·T·A·R 4줄, 보조 프로젝트는 2줄
- 연구 성과는 '연도 | 성과 | 기관(치환어)' 형식으로 통일
- 보유 기술은 표로: | 분류 | 기술 | 수준(능숙 / 활용 가능) | 활용 경험 |

[제약]
- JD 핵심 키워드는 자연스럽게 반영하되, 입력에 없는 경험·수치·성과는 만들지 마
- 추정한 내용은 [추정]으로 표시해 줘
- 입력에 없는 기간은 [기간 확인], 논문 제목·학술지명·특허번호 같은 서지 정보는 [서지 확인]으로 비워 둬
- 경력 공백은 숨기거나 꾸미지 말고 기간과 활동을 사실대로 한 줄로 써 줘
- 주어가 '우리'가 아니라 내가 직접 한 행동이 드러나게 써 줘</pre></div></div></details>
<details class="lesson-toggle nested-toggle"><summary>경력 기술서 초안</summary><div class="toggle-body career-document"><h4>■ 경력 요약</h4><ul><li>바이오·의료 R&amp;D 분야에서 8년간 세포 기반 효능평가, 분자생물학 분석, 바이오마커 분석 및 연구 프로토콜 개선 업무를 수행함</li><li>세포 기반 효능평가 설계·분석, 분자생물학 데이터 기반 원인 분석, 실험 프로토콜 최적화·표준화 역량을 보유함</li><li>선임연구원으로서 실험 편차 원인 분석과 SOP 표준화를 통해 팀 연구 데이터의 일관성을 높이고, 바이오 연구 프로젝트 운영을 지원함</li></ul><h4>■ 핵심역량</h4><ul><li>세포 기반 효능평가 설계 및 분석</li><li>분자생물학 데이터 기반 원인 분석</li><li>실험 프로토콜 최적화·표준화</li><li>바이오마커 분석 및 데이터 해석 — 작용기전(MOA) 가설 검토 근거 제공</li><li>연구 프로젝트 협업·운영</li></ul>
<h4>■ 경력 사항</h4><h5>바이오 C사 | 선임연구원 | 2023.09~현재</h5><ul><li>연구 프로젝트 운영, 실험계획 검토, 데이터 리뷰, 연구 프로세스 개선을 수행함</li><li>2024.03~2024.12 실험 프로토콜 표준화를 주도하고 SOP를 팀 연구에 적용함</li><li>연구 수행의 일관성을 높이고 팀 협업과 신규 연구원 온보딩을 지원함</li><li>2025.01 실험 프로토콜 표준화 성과로 사내 우수 연구 개선상을 수상함</li></ul><h5>바이오·헬스케어 B사 | 연구원 → 선임연구원 | 2020.09~2023.08</h5><ul><li>2022.03 선임연구원으로 승진함</li><li>유전자·단백질 발현 데이터와 처리군별 반응 차이를 분석함</li><li>qPCR, Western blot, Flow cytometry를 활용해 바이오마커 후보와 작용기전(MOA) 가설 검토 근거를 제공함</li><li>외부 시험기관과 시험조건을 협의하고 결과보고서를 검토함</li><li>내·외부 시험조건 차이를 정리하고 후속 시험 설계 기준을 마련함</li></ul><h5>바이오 벤처 A사 | 연구원 | 2018.09~2020.08</h5><ul><li>세포 배양과 처리조건을 설계하고 후보물질별 효능 데이터를 비교·분석함</li><li>Cell culture, ELISA, qPCR을 활용해 후속 검증 후보군 논의 근거를 제공함</li><li>단계별 실험조건과 결과 편차를 비교해 반복 실험의 원인 후보를 도출함</li><li>qPCR, Western blot, GraphPad Prism을 활용해 실험 프로토콜을 개선함</li></ul><h5>생명공학 석사 과정 및 전공 학술동아리 | 2012.03~2018.08</h5><ul><li>2012.03~2016.02 논문 스터디, 전공 프로젝트, 기초 실험 및 발표 활동을 수행함</li><li>2016.03~2018.08 생명공학 석사 과정에서 연구를 수행함</li><li>경력 공백 없이 2018.09부터 바이오 R&amp;D 업무를 시작함</li></ul>
<h4>■ 주요 프로젝트</h4><h5>대표 프로젝트 | C사 연구 프로젝트 실험 프로토콜 표준화 | 2024.03~2024.12</h5><ul><li>S: 연구원마다 실험 방식이 달라 반복 실험 결과의 편차가 팀 단위로 반복되고, 후보물질 효능·기전 비교 판단이 지연됨</li><li>T: 선임연구원으로서 팀 실험의 편차 원인을 규명하고, 팀 전체가 따르는 표준 프로토콜(SOP)을 구축해야 함</li><li>A: 팀원별 세포 계대수·처리 시점·측정 시점과 qPCR·Western blot 결과를 비교하고, GraphPad Prism으로 편차가 큰 구간을 분석함</li><li>R: 세포 계대수를 우선 통제한 SOP를 확정하고, 표준화 전후 CV를 약 25%에서 10% 이내로 낮추며 팀원 4명·2개 과제와 신규 연구원 온보딩에 확산함</li></ul><h5>보조 프로젝트 | B사 바이오마커 분석 | 2021.01~2022.12</h5><ul><li>유전자·단백질 발현 데이터를 분석하고 처리군별 반응 차이를 해석해 바이오마커 후보와 작용기전(MOA) 가설 검토 근거를 제공함</li><li>분석 결과를 기반으로 국내 학회 포스터 발표 1건을 수행함</li></ul><h5>보조 프로젝트 | A사 후보물질 효능평가 및 재현성 개선 | 2018.09~2020.08</h5><ul><li>세포 배양과 처리조건을 설계하고 후보물질별 효능을 비교해 후속 검증 후보군 논의 근거를 제공함</li><li>반복 실험의 조건·결과 편차를 분석하고 프로토콜을 개선해 대표 프로젝트의 원인 분석 방식으로 확장함</li></ul>
<h4>■ 연구 성과</h4><ul><li>2018 | 국내 학술지 논문 1편 공동저자 | 기관(치환어) / 논문 제목·학술지명 [서지 확인]</li><li>2020 | 세포 기반 효능평가 관련 국내 특허 출원 1건 공동 발명자 | 바이오 벤처 A사 / 특허번호 [서지 확인]</li><li>2022 | 바이오마커 분석 결과 국내 학회 포스터 발표 1건 | 바이오·헬스케어 B사</li><li>2025 | 실험 프로토콜 표준화 성과로 사내 우수 연구 개선상 수상 | 바이오 C사</li></ul>
<h4>■ 보유 기술</h4><div class="table-wrap"><table class="lesson-table"><thead><tr><th>분류</th><th>기술</th><th>수준(능숙 / 활용 가능)</th><th>활용 경험</th></tr></thead><tbody><tr><td>세포 기반 실험</td><td>Cell culture</td><td>능숙</td><td>A사 후보물질 효능평가, C사 프로토콜 표준화</td></tr><tr><td>세포 기반 실험</td><td>In vitro cell-based assay</td><td>활용 가능</td><td>후보물질 효능평가 및 처리조건 설계</td></tr><tr><td>분자생물학</td><td>qPCR</td><td>능숙</td><td>효능평가, 발현 데이터 분석, 재현성 개선</td></tr><tr><td>분자생물학</td><td>Western blot</td><td>능숙</td><td>실험 편차 분석, 바이오마커 분석</td></tr><tr><td>분자생물학</td><td>ELISA</td><td>활용 가능</td><td>후보물질별 효능 데이터 분석</td></tr><tr><td>세포 분석</td><td>Flow cytometry</td><td>활용 가능</td><td>바이오마커 분석</td></tr><tr><td>데이터 분석</td><td>GraphPad Prism</td><td>활용 가능</td><td>반복 실험 편차 분석 및 데이터 비교</td></tr><tr><td>연구 운영</td><td>SOP·프로토콜 작성 및 표준화</td><td>능숙</td><td>C사 팀 연구 프로토콜 표준화</td></tr><tr><td>연구 운영</td><td>데이터 리뷰 및 실험계획 검토</td><td>능숙</td><td>C사 연구 프로젝트 운영</td></tr><tr><td>협업</td><td>외부 시험기관 협업</td><td>활용 가능</td><td>시험조건 협의 및 결과보고서 검토</td></tr></tbody></table></div>
<h4>■ [보완 필요]</h4><ul><li>Project Leader로 연구 과제 전체를 직접 리딩한 경험은 근거가 부족함</li><li>현재 확인되는 경험은 연구 프로젝트 운영, 팀 실험 기준 확정, SOP 표준 확산이며 직접 리딩과 구분해 표현해야 함</li><li>MOA 연구의 의사결정을 직접 주도한 경험은 보완이 필요함</li><li>현재 MOA 관련 근거는 바이오마커 분석을 통한 가설 검토 참여와 효능·기전 판단용 데이터 표준화에 집중되어 있음</li><li>TR-FRET, TPD, PROTAC, MGD의 직접 수행 근거는 없으므로 JD 대비 기술 Gap으로 유지함</li><li>지원 시 운영·기준 확정·표준 확산 경험을 리딩에 인접한 역량으로 설명하되 Project Leader 경험으로 과장하지 않음</li><li>실제 CV 개선 수치와 적용 범위는 원본 실험노트 및 데이터 리뷰 자료로 검증 필요함</li></ul></div></details>
<details class="lesson-toggle nested-toggle"><summary>📁 경력 기술서 수정본 (서지 정보 추가, 숨은 역량 검토 후 적용 여부 판단)</summary><div class="toggle-body career-document"><p class="lesson-note">※ [보완 필요]의 Project Leader·MOA 항목은 기록으로 확인된 새 사실이 없으므로, 역할을 바꾸지 않고 리딩에 가까운 사실(기준 확정·확산)과 MOA 근거 제공 역할을 앞세우는 표현으로 보완함. 면접에서는 ‘리딩 경험은 없지만 근거 데이터를 만드는 역할을 했다’로 답하도록 준비함</p><h4>■ 경력 요약</h4><ul><li>바이오·의료 R&amp;D 분야에서 8년간 세포 기반 효능평가, 분자생물학 분석, 바이오마커 연구 및 연구 프로젝트 운영을 수행함</li><li>후보물질의 효능·발현 데이터를 기반으로 작용기전(MOA) 가설 검토에 필요한 근거를 제공하고, 효능·기전 판단에 쓰이는 데이터의 신뢰성을 높임</li><li>선임연구원으로서 실험 편차의 원인을 분석하고 SOP를 팀 기준으로 확정해 팀원 4명·2개 과제에 확산함</li></ul><h4>■ 핵심역량</h4><ul><li>세포 기반 효능평가 설계 및 분석</li><li>분자생물학 데이터 기반 원인 분석</li><li>실험 프로토콜 최적화·표준화</li><li>바이오마커 분석 및 데이터 해석 — 작용기전(MOA) 가설 검토 근거 제공</li><li>연구 프로젝트 협업·운영</li></ul>
<h4>■ 경력 사항</h4><h5>바이오 C사 | 선임연구원 | 2023.09~현재</h5><ul><li>연구 프로젝트의 실험계획을 검토하고 데이터 리뷰로 팀 실험 기준을 확정함</li><li>연구원별 실험 방식 차이로 발생한 반복 실험 편차의 원인을 분석함</li><li>세포 계대수, 처리 시점, 측정 시점 및 qPCR·Western blot 결과를 비교해 핵심 통제 조건을 도출함</li><li>비교 실험 결과를 기반으로 SOP를 확정하고 연구팀 전체에 적용함</li><li>표준 SOP를 팀원 4명·2개 과제와 신규 연구원 온보딩에 확산함</li><li>실험 데이터 리뷰로 후보물질 효능·기전 판단에 쓰이는 데이터의 일관성을 점검함</li><li>2025.01 실험 프로토콜 표준화 성과로 사내 우수 연구 개선상을 수상함</li></ul><h5>바이오·헬스케어 B사 | 연구원 → 선임연구원 | 2020.09~2023.08</h5><ul><li>2022.03 선임연구원으로 승진함</li><li>후보물질 처리군별 유전자·단백질 발현 데이터를 분석하고 바이오마커 후보 검토 근거를 제공함</li><li>처리군별 발현 데이터를 분석해 작용기전(MOA) 가설 검토에 필요한 근거를 제공함</li><li>외부 시험기관과 시험조건을 협의하고 결과보고서를 검토함</li><li>바이오마커 분석 결과를 국내 학회 포스터로 발표함</li></ul><h5>바이오 벤처 A사 | 연구원 | 2018.09~2020.08</h5><ul><li>후보물질의 세포 기반 효능평가 실험을 설계하고 후보물질별 반응을 비교·분석함</li><li>Cell culture, ELISA, qPCR을 활용해 효능평가 데이터를 확보함</li><li>반복 실험의 조건과 결과 편차를 분석해 원인 후보를 도출함</li><li>GraphPad Prism을 활용해 데이터 패턴을 비교하고 실험 프로토콜을 개선함</li><li>세포 기반 효능평가 관련 국내 특허 출원에 공동 발명자로 참여함</li></ul>
<h4>■ 주요 프로젝트</h4><h5>대표 프로젝트 | 후보물질 효능·기전 판단을 위한 연구 프로토콜 표준화 | 바이오 C사 | 2024.03~2024.12</h5><ul><li>S: 연구원별 실험 방식 차이로 반복 실험 결과의 편차가 발생하고, 후보물질 효능·기전 비교 판단이 지연됨</li><li>T: 선임연구원으로서 편차 원인을 규명하고, 신뢰도 높은 데이터 확보를 위한 팀 표준 프로토콜을 구축해야 함</li><li>A: 실험조건과 qPCR·Western blot 결과를 구조화하고 GraphPad Prism으로 편차 구간을 분석해 세포 계대수를 우선 통제 조건으로 선정함. 비교 실험 결과를 기반으로 SOP와 데이터 리뷰 기준을 확정함</li><li>R: 표준화 전후 반복 실험 CV를 약 25%에서 10% 이내로 낮추고, SOP를 팀원 4명·2개 과제 및 신규 연구원 온보딩에 적용함. 후보물질 효능·기전 판단에 활용되는 데이터의 일관성을 높이고 사내 우수 연구 개선상을 수상함</li></ul><h5>보조 프로젝트 | 바이오마커 발현 분석 및 MOA 가설 검토 근거 제공 | 바이오·헬스케어 B사 | 2021.01~2022.12</h5><ul><li>후보물질 처리군별 유전자·단백질 발현 데이터를 분석해 바이오마커 후보와 작용기전(MOA) 가설 검토 근거를 제공함</li><li>분석 결과를 정리해 2022.10 국내 학회 포스터로 발표함</li></ul><h5>보조 프로젝트 | 후보물질 효능평가 및 실험 재현성 개선 | 바이오 벤처 A사 | 2018.09~2020.08</h5><ul><li>세포 기반 효능평가를 설계하고 후보물질별 반응을 비교해 후속 검증 후보군 논의 근거를 제공함</li><li>실험조건과 결과 편차의 원인을 분석하고 프로토콜을 개선해 팀 연구 표준화 역량의 기반을 마련함</li></ul>
<h4>■ 연구 성과</h4><ul><li>2018 | 국내 학술지 논문 1편 공동저자 | 기관(치환어)</li><li>2020 | 세포 기반 효능평가 관련 국내 특허 출원 1건 공동 발명자 | 바이오 벤처 A사</li><li>2022 | 바이오마커 분석 결과 국내 학회 포스터 발표 1건 | 바이오·헬스케어 B사</li><li>2025 | 실험 프로토콜 표준화 성과로 사내 우수 연구 개선상 수상 | 바이오 C사</li></ul>
<h4>■ 보유 기술</h4><div class="table-wrap"><table class="lesson-table"><thead><tr><th>분류</th><th>기술</th><th>수준(능숙 / 활용 가능)</th><th>활용 경험</th></tr></thead><tbody><tr><td>세포 기반 실험</td><td>Cell culture</td><td>능숙</td><td>후보물질 효능평가 및 프로토콜 표준화</td></tr><tr><td>세포 기반 실험</td><td>In vitro cell-based assay</td><td>능숙</td><td>후보물질 처리조건 설계 및 효능 비교</td></tr><tr><td>분자생물학</td><td>qPCR</td><td>능숙</td><td>효능평가, 바이오마커 및 MOA 분석</td></tr><tr><td>분자생물학</td><td>Western blot</td><td>능숙</td><td>단백질 발현 및 실험 편차 분석</td></tr><tr><td>분자생물학</td><td>ELISA</td><td>활용 가능</td><td>후보물질별 효능 데이터 분석</td></tr><tr><td>세포 분석</td><td>Flow cytometry</td><td>활용 가능</td><td>바이오마커 분석</td></tr><tr><td>데이터 분석</td><td>GraphPad Prism</td><td>활용 가능</td><td>편차 구간 분석 및 조건별 데이터 비교</td></tr><tr><td>연구 운영</td><td>SOP·프로토콜 작성 및 표준화</td><td>능숙</td><td>팀 연구 기준 확정 및 적용</td></tr><tr><td>연구 운영</td><td>실험계획 검토·데이터 리뷰</td><td>능숙</td><td>C사 연구 프로젝트 운영</td></tr><tr><td>협업</td><td>외부 시험기관 및 연구팀 협업</td><td>능숙</td><td>시험조건 협의, 결과보고서 검토</td></tr></tbody></table></div></div></details>
</div></details>
`;
shell.appendChild(article);

article.querySelectorAll('.copy-prompt').forEach(button=>button.addEventListener('click',async()=>{
  const code=button.nextElementSibling?.innerText||'';
  try{await navigator.clipboard.writeText(code)}catch(error){const area=document.createElement('textarea');area.value=code;area.style.position='fixed';area.style.opacity='0';document.body.appendChild(area);area.select();document.execCommand('copy');area.remove()}
  button.textContent='복사됨';setTimeout(()=>button.textContent='복사',1200);
}));

article.querySelectorAll('.lesson-table').forEach(table=>{
  if(table.closest('.sample-toggle'))return;
  const cells=[...table.querySelectorAll('tbody td')];
  if(!cells.some(cell=>!cell.textContent.trim()))return;
  const wrap=table.closest('.table-wrap');if(!wrap)return;
  const toolbar=document.createElement('div');toolbar.className='table-copy-toolbar';
  const button=document.createElement('button');button.type='button';button.className='copy-table-button';button.textContent='표 복사';toolbar.appendChild(button);wrap.prepend(toolbar);
  button.addEventListener('click',async()=>{const rows=[...table.rows].map(row=>[...row.cells].map(cell=>cell.innerText.trim()));const plain=rows.map(row=>row.join('\t')).join('\n');try{await navigator.clipboard.writeText(plain)}catch(error){const area=document.createElement('textarea');area.value=plain;area.style.position='fixed';area.style.opacity='0';document.body.appendChild(area);area.select();document.execCommand('copy');area.remove()}button.textContent='복사 완료';setTimeout(()=>button.textContent='표 복사',1400)});
});
})();
