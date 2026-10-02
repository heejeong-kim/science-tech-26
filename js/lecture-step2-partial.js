(()=>{
const shell=document.querySelector('.lecture-step-shell');
if(!shell)return;
const nav=shell.querySelector('.lecture-step-nav');
if(nav){
  const steps=nav.children;
  if(steps[1])steps[1].outerHTML='<a href="#step-2"><span>STEP 2</span><strong>STAR로 내 경력 구조화하기</strong></a>';
}
const article=document.createElement('article');
article.className='lesson-view step2-view';
article.innerHTML=`
<h1 id="step-2">STEP 2. STAR로 내 경력 구조화하기</h1>

<h2 id="step-2-chapter-1">1. 경력 기술서와 포트폴리오</h2>
<aside class="lesson-goal"><div class="goal-title"><span>🎯</span><strong>학습 목표</strong></div><div class="goal-body">경력 기술서와 포트폴리오의 역할 차이를 설명하고, 과학기술인 포트폴리오 샘플을 리뷰해 좋은 포트폴리오의 기준을 파악할 수 있다.</div></aside>

<h3>1.1 경력 기술서</h3>
<p>경력 기술서는 내가 지금까지 어떤 일을 했고, 어떤 역할을 맡았으며, 어떤 기술을 사용해 어떤 결과를 만들었는지 구체적으로 설명하는 문서로 좋은 경력 기술서는 단순한 업무 목록이 아니라,</p>
<blockquote><strong>무엇을 했다 → 왜 했는가 → 나는 무엇을 했는가 → 어떤 결과가 있었는가</strong>가 드러나야 함</blockquote>

<h3>1.2 포트폴리오</h3>
<p>포트폴리오는 경력 기술서의 핵심 내용을 프로젝트와 시각자료 중심으로 재구성한 문서이며 채용 담당자가 포트폴리오를 통해 알고 싶은 것은 단순히 “무엇을 만들었는가?”가 아니라,</p>
<blockquote><strong>어떤 문제를 만났고, 그 문제를 해결하기 위해 어떤 판단과 행동을 했는가?</strong></blockquote>
<p class="lesson-note">※ 모든 직무에 포트폴리오가 필수는 아니며 지원 공고와 직무에 따라 경력 기술서, 연구실적 목록, 논문·특허 목록, 프로젝트 포트폴리오의 우선순위가 달라지며, 포트폴리오는 직무에 따라 활용하는 보조 자료로 활용될 수 있음</p>

<h3>1.3 경력 기술서와 포트폴리오 비교</h3>
<div class="table-wrap"><table class="lesson-table comparison-table"><thead><tr><th>구분</th><th>경력 기술서</th><th>포트폴리오</th></tr></thead><tbody>
<tr><td><strong>보여주는 범위</strong></td><td>모든 경력을 <strong>넓게</strong> 기술함</td><td>대표 프로젝트 1~2건을 <strong>깊게</strong> 보여줌</td></tr>
<tr><td><strong>표현 방식</strong></td><td>문장으로 설명함</td><td>도식·흐름도로 보여줌</td></tr>
<tr><td><strong>성과 제시</strong></td><td>수치를 나열함</td><td>전후 비교 차트로 보여줌</td></tr>
<tr><td><strong>읽는 방식</strong></td><td>꼼꼼히 읽는 문서</td><td>30초 안에 훑어보는 문서</td></tr>
<tr><td><strong>채용 담당자의 질문</strong></td><td>“어떤 경력을 쌓아 왔는가?”</td><td>“문제를 어떻게 판단하고 해결하는가?”</td></tr>
<tr><td><strong>오늘의 실습</strong></td><td>실습 5 (Gemini로 초안 작성)</td><td>실습 7·8 (스토리보드 → 포트폴리오)</td></tr>
</tbody></table></div>

<section class="lesson-insight"><h4 class="insight-title"><span aria-hidden="true">🧠</span><strong>경력 기술서는 넓게, 포트폴리오는 깊게</strong><span aria-hidden="true">🧠</span></h4><p>포트폴리오에 모든 경력을 담지 않아도 되며 전체 경력은 경력 기술서가 보여주고, 포트폴리오는 지원 직무와 가장 가까운 대표 프로젝트로 “이 사람은 이렇게 일한다”를 증명하는 것.</p><p>그래서 오늘은 대표 프로젝트 1건을 STAR로 깊게 구조화하고, 나머지 경력은 자기소개·역량 페이지에서 요약해 보여줌</p></section>

<details class="lesson-toggle"><summary>🪪 과학기술인 포트폴리오 샘플 리뷰 🪪</summary><div class="toggle-body">
<blockquote><strong>관찰 기준 : 해결한 문제 · 담당 역할 · 주요 성과 · 시각화 방식</strong></blockquote>
<p class="lesson-note">※ 샘플은 구조를 참고하는 자료로 구조는 따라 하되 내용은 반드시 내 경험으로 채움</p>
<div class="table-wrap"><table class="lesson-table"><thead><tr><th>관찰 기준</th><th>무엇을 볼까</th><th>좋은 포트폴리오의 신호</th></tr></thead><tbody>
<tr><td><strong>해결한 문제</strong></td><td>문제가 첫 화면에서 바로 드러나는가</td><td>기술 이름보다 문제 상황이 먼저 나옴</td></tr>
<tr><td><strong>담당 역할</strong></td><td>‘우리’와 ‘나’가 구분되는가</td><td>내가 판단한 지점이 명시됨</td></tr>
<tr><td><strong>주요 성과</strong></td><td>성과가 증거로 제시되는가</td><td>전후 비교, 산출물(SOP·보고서·특허), 적용 범위가 보임</td></tr>
<tr><td><strong>시각화 방식</strong></td><td>분야에 맞는 시각자료를 썼는가</td><td>한 페이지에 한 메시지, 도식·차트가 문장을 대신함</td></tr>
</tbody></table></div>
<p><strong>분야별로 자주 쓰는 시각화 방식</strong></p>
<div class="table-wrap"><table class="lesson-table"><thead><tr><th>분야</th><th>자주 쓰는 시각화</th></tr></thead><tbody>
<tr><td><strong>바이오·의료</strong></td><td>실험 흐름도, 조건별·전후 비교 차트, 단계별 프로토콜 도식</td></tr>
<tr><td><strong>AI·데이터</strong></td><td>모델 성능 비교 차트, 데이터 처리 흐름도, 오류 유형 분석 표</td></tr>
<tr><td><strong>첨단소재·반도체</strong></td><td>공정 흐름도, SPC 관리도, 조건별 물성 비교 그래프</td></tr>
</tbody></table></div>
<p class="lesson-placeholder">{ 샘플 추후 삽입 예정 }</p>
</div></details>

<h2 id="step-2-chapter-2">2. 경력 Inventory와 핵심역량</h2>
<aside class="lesson-goal"><div class="goal-title"><span>🎯</span><strong>학습 목표</strong></div><div class="goal-body">내 경력을 Inventory로 정리하고, Inventory의 경험을 직접 묶어 근거가 있는 핵심역량 3~5개를 도출할 수 있다.</div></aside>

<h3>2.1 경력 Inventory</h3>
<p>경력 Inventory는 내가 해온 일을 한 표에 펼쳐 정리하는 단계로, 이후 핵심역량(실습 3)·대표 프로젝트 STAR(실습 4)·경력 기술서(실습 5)에 그대로 쓰이는 원재료임. 대표 프로젝트는 3장에서 JD를 기준으로 내가 직접 고르므로 지금은 평가 없이 작은 경험까지 모두 적음</p>
<ul><li>반복적으로 수행해 온 연구·업무는 무엇인가?</li><li>다른 사람보다 익숙하게 다루는 기술·장비·방법론은 무엇인가?</li><li>문제가 발생했을 때 직접 원인을 찾거나 개선한 경험이 있는가?</li><li>논문·보고서·발표·교육자료를 만든 경험이 있는가?</li><li>다른 부서·연구자·고객과 협업한 경험이 있는가?</li><li>일정관리, 프로젝트 운영, 후배교육 경험이 있는가?</li><li>이전 방식보다 더 효율적으로 바꾼 경험이 있는가?</li></ul>

<h4 class="practice-title practice-2-title"><span>✍️</span> [실습 2] 내 경력 Inventory 작성하기</h4>
<p>이력서·기존 경력 기술서를 옆에 두고 위 질문을 참고해 학교·회사·공백 기간·사이드 프로젝트의 경험을 평가 없이 모두 정리하며, 지금은 경험당 한 줄이면 충분함. 행마다 번호([1], [2] …)를 붙여 두면 2.2에서 핵심역량의 근거로 바로 연결할 수 있음</p>
<aside class="security-callout"><div class="security-title"><span>🔐</span><strong>[주의] 처음부터 치환어로 작성하기 (AI 입력 전 비식별화)</strong></div><p>워크시트는 이후 Gemini 입력자료로 쓰이므로 회사명은 ‘A사’, 후보물질은 ‘후보물질 X’처럼 처음부터 치환어로 작성하여 원문이 화면·공유 문서에 남지 않게 처리하며, 이 치환어 버전만 이후 모든 Gemini 실습에 사용</p><ul><li>원본 파일은 업로드하지 않고, 치환어로 바꾼 문장만 입력</li><li>전 직장에서 익힌 지식은 활용하되, 전 직장의 자료·데이터·문서는 반출·재사용하지 않음</li><li>소속기관 보안·AI 이용 정책상 금지된 정보는 가명 처리해도 입력하지 않음</li></ul></aside>

<details class="lesson-toggle"><summary>☑️ [참고] 비식별화 대상 5가지와 점검 체크리스트</summary><div class="toggle-body">
<div class="table-wrap"><table class="lesson-table"><thead><tr><th>유형</th><th>예시</th><th>처리 방법</th></tr></thead><tbody>
<tr><td><strong>개인정보</strong></td><td>본인·동료 이름, 연락처, 사번</td><td>삭제 또는 ‘팀원 A’, ‘책임연구원 B’로 대체</td></tr>
<tr><td><strong>기관·고객 정보</strong></td><td>회사명, 고객사, 협력 CRO·병원명</td><td>‘바이오 벤처 A사’, ‘외부 시험기관’으로 대체</td></tr>
<tr><td><strong>미공개 연구내용</strong></td><td>후보물질 코드, 타깃·서열·구조, 미발표 결과</td><td>‘후보물질 X’, ‘염증 관련 타깃’처럼 일반화</td></tr>
<tr><td><strong>내부 수치·일정</strong></td><td>과제비, 매출, 실험 원자료, 출시 일정</td><td>비율·범위로 일반화하거나 연습용 가상 수치로 전환(실제 문서에는 사용하지 않음)</td></tr>
<tr><td><strong>과제·권리 정보</strong></td><td>국책과제명·과제번호, 특허 출원 전 기술</td><td>‘정부 R&amp;D 과제’로 대체, 출원 전 기술은 언급하지 않음</td></tr>
</tbody></table></div>
<p class="lesson-note">※ 이름을 바꿔도 연구 내용·일정·수치의 조합으로 기관이 추정될 수 있으므로 조합까지 점검<br>※ 같은 대상은 끝까지 같은 치환어로 쓰고, 치환표(원문 ↔ 치환어)는 내 PC에만 보관하며, 연습용 가상 수치는 실제 문서에 쓰지 않음</p>
<p><strong>Gemini 입력 전 점검</strong></p>
<label class="lesson-check"><input type="checkbox">이름·연락처를 삭제함</label><label class="lesson-check"><input type="checkbox">기관·고객명을 치환함</label><label class="lesson-check"><input type="checkbox">미공개 연구내용을 일반화함</label><label class="lesson-check"><input type="checkbox">내부 수치를 일반화하거나 연습용 가상 수치로 전환함</label><label class="lesson-check"><input type="checkbox">과제번호·출원 전 기술을 삭제함</label><label class="lesson-check"><input type="checkbox">소속기관 보안·AI 이용 정책상 입력이 금지된 정보가 없는지 확인함</label><label class="lesson-check"><input type="checkbox">Gemini 앱의 활동 기록 저장 설정을 확인하고, 필요하면 임시 채팅으로 실습함</label>
<p><strong>🧍🏽‍♀️ 김서연의 원문 → 치환어</strong></p>
<div class="table-wrap"><table class="lesson-table"><thead><tr><th>원문(가상)</th><th>유형</th><th>치환 표현</th></tr></thead><tbody><tr><td>○○바이오의 후보물질 KSY-217 효능평가</td><td>기관·미공개 연구</td><td>바이오 벤처 A사의 후보물질 X 효능평가</td></tr><tr><td>CRO △△랩과 ELISA 시험조건 협의</td><td>기관·고객 정보</td><td>외부 시험기관과 ELISA 시험조건 협의</td></tr><tr><td>○○부 과제(과제번호 포함) 참여</td><td>과제·권리 정보</td><td>정부 R&amp;D 과제 참여</td></tr><tr><td>내부 데이터 기준 CV 수치</td><td>내부 수치</td><td>편차가 절반 이하로 감소</td></tr></tbody></table></div>
</div></details>

<div class="table-wrap"><table class="lesson-table inventory-template"><thead><tr><th>[번호] 경험/프로젝트</th><th>기간</th><th>내가 한 일</th><th>기술·방법</th><th>해결한 문제</th><th>결과/성과</th></tr></thead><tbody>${'<tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>'.repeat(7)}</tbody></table></div>
<p class="lesson-note">※ 기간은 ‘연도.월~연도.월’(예: 2021.03~2024.02) 형식으로 적고, 정확히 기억나지 않으면 비워 두었다가 기록을 확인해 채움</p>

<details class="lesson-toggle sample-toggle"><summary>[실습 참고 🧍🏽‍♀️] 김서연의 경력 Inventory</summary><div class="toggle-body">
<div class="table-wrap"><table class="lesson-table inventory-sample"><thead><tr><th>[번호] 경험/프로젝트</th><th>기간</th><th>내가 한 일</th><th>기술·방법</th><th>해결한 문제</th><th>결과/성과</th></tr></thead><tbody>
<tr><td>[1] 대학 전공 학술동아리</td><td>2012.03~2016.02</td><td>논문 스터디, 전공 프로젝트 참여</td><td>논문검색, 발표, 기초 실험</td><td>전공지식의 실제 연구 적용</td><td>연구 관심 분야 구체화</td></tr>
<tr><td>[2] 1차 회사: 후보물질 효능평가</td><td>2018.09~2020.08</td><td>세포 배양, 처리조건 설계, 효능 데이터 분석</td><td>Cell culture, ELISA, qPCR</td><td>후보물질별 효능 비교</td><td>후속 검증 후보군 논의 근거 제공</td></tr>
<tr><td>[3] 1차 회사: 실험 재현성 개선</td><td>2019.09~2020.03</td><td>단계별 실험조건과 결과 편차 비교</td><td>qPCR, Western blot, GraphPad Prism</td><td>반복 실험 결과 편차</td><td>원인 후보 도출 및 프로토콜 개선</td></tr>
<tr><td>[4] 2차 회사: 바이오마커 분석</td><td>2021.01~2022.12</td><td>유전자·단백질 발현 데이터 분석</td><td>qPCR, Western blot, Flow cytometry</td><td>처리군별 반응 차이 해석</td><td>바이오마커 후보·작용기전(MOA) 가설 검토 근거 제공</td></tr>
<tr><td>[5] 2차 회사: 외부 시험기관 협업</td><td>2021.06~2023.06</td><td>시험조건 협의, 결과보고서 검토</td><td>시험계획서, 결과보고서</td><td>내·외부 시험조건 차이</td><td>후속 시험 설계 기준 정리</td></tr>
<tr><td>[6] 3차 회사: 연구 프로젝트 운영</td><td>2023.09~현재 (표준화 2024.03~2024.12)</td><td>실험계획 검토, 데이터 리뷰, 프로토콜 표준화</td><td>연구계획, 데이터 리뷰, SOP</td><td>연구 수행 일관성 확보</td><td>연구 프로세스 개선 및 팀 협업 지원</td></tr>
<tr><td>[7] 사이드 프로젝트</td><td>2025.06~2025.12</td><td>공개 바이오 데이터에서 질환 관련 발현 패턴 탐색</td><td>공개 데이터, 데이터 분석·시각화</td><td>업무 밖 분석역량 확장</td><td>분석 리포트 및 시각화 결과물 제작</td></tr>
<tr><td>[8] 연구 성과: 석사 논문</td><td>2018.06</td><td>석사 학위 연구 결과를 정리해 국내 학술지 논문에 공동저자로 참여</td><td>세포 기반 실험, 데이터 분석</td><td>학위 연구의 공개 성과화</td><td>국내 학술지 논문 1편(공동저자)</td></tr>
<tr><td>[9] 연구 성과: 1차 회사 특허</td><td>2020.05</td><td>효능평가 실험 설계와 데이터 정리를 담당해 특허 출원에 공동 발명자로 참여</td><td>세포 기반 효능평가</td><td>효능평가 방법의 권리화</td><td>국내 특허 출원 1건(공동 발명자, 공개)</td></tr>
<tr><td>[10] 연구 성과: 2차 회사 학회 발표</td><td>2022.10</td><td>회사의 공개 승인을 받은 바이오마커 분석 결과를 포스터로 발표</td><td>qPCR·Flow cytometry 데이터 시각화</td><td>분석 결과의 외부 공유</td><td>국내 학회 포스터 발표 1건</td></tr>
<tr><td>[11] 연구 성과: 3차 회사 사내 수상</td><td>2025.01</td><td>프로토콜 표준화 성과로 사내 포상을 받음</td><td>SOP 표준화</td><td>팀 연구 일관성 개선 성과 인정</td><td>사내 우수 연구 개선상</td></tr>
</tbody></table></div>
<blockquote><strong>✅ POINT</strong><br><br>과대표·동아리 활동은 핵심 경력으로 크게 강조하기보다 전공 관심과 초기 성장 배경으로 짧게 사용하며 최근 경력의 연구 문제해결 경험에 더 많은 비중을 둠</blockquote>
</div></details>

<h3>2.2 핵심역량 연결</h3>
<p>‘Python을 사용할 수 있다’, ‘PCR을 할 수 있다’, ‘SEM을 사용할 수 있다’는 기술이며 핵심역량은 그 기술을 이용해 어떤 문제를 해결할 수 있는가까지 포함</p>
<ul><li>Python은 기술이며, Python으로 제조 데이터를 분석해 이상을 탐지하는 것은 역량</li><li>PCR은 기술이며 분자생물학 실험 설계 및 결과 분석은 역량</li><li>SEM은 장비 활용이며 SEM 기반 소재 미세구조 분석 및 결함 원인 규명은 역량</li></ul>
<blockquote><strong>경험 → 반복적으로 한 행동 → 사용 기술 → 해결한 문제 → 핵심역량</strong></blockquote>

<h4 class="practice-title"><span>✍️</span> [실습 3] Inventory에서 핵심역량 연결하기</h4>
<p>실습 2 Inventory와 실습 1 JD 분해 시트를 Gemini에 넣어 핵심역량 후보를 받고, 그중 3~5개를 내가 골라 내 표현으로 다듬어 아래 표에 정리함. AI는 후보를 제안하고, 어떤 역량을 내 것으로 쓸지는 내가 결정함</p>
<p><strong>핵심역량 연결 프롬프트</strong></p>
<div class="prompt-block"><button type="button" class="copy-prompt">복사</button><pre>[역할]
너는 과학기술인의 경력에서 핵심역량을 찾아 주는 커리어 컨설턴트야.

[입력]
1) 경력 Inventory(치환어 버전, 행 번호 포함): {실습 2}
2) 목표 JD 분해 시트: {실습 1}

[핵심역량 기준]
- 기술 이름이 아니라 "그 기술로 어떤 문제를 해결하는가"까지 담은 문장이야.
  예) PCR(기술) → 분자생물학 실험 설계 및 결과 분석(역량)
- 6가지 공통역량: D 도메인 전문성 / T 기술역량 / A 데이터 분석·해석 / P 문제해결 / C 협업 / E 연구·프로젝트 수행

[요청]
1. Inventory에서 반복된 행동이나 해결한 문제가 비슷한 행끼리 묶어서 핵심역량 후보 5~7개를 뽑아 줘.
2. 후보마다 근거가 된 Inventory 행 번호를 적어 줘.
3. 후보마다 JD 분해 시트의 어떤 요구(Action·Skill·Problem)와 연결되는지 적어 줘.
4. 표 아래에 JD 요구 중 연결되는 역량이 없는 요구가 있으면 한 줄로 알려 줘.

[출력 형태]
반드시 마크다운 표로 답해 줘.
| 핵심역량 후보 | 근거 경험(Inventory 번호) | 기술/방법 | 해결한 문제 | 공통역량 연결 | 연결되는 JD 요구 |

[제약]
- Inventory에 없는 경험·기술·성과는 추가하지 마
- 근거 행이 없는 역량은 후보에 넣지 마
- '데이터 기반 문제해결'처럼 누구에게나 맞는 표현은 피하고, 내 분야의 대상·방법이 드러나게 써 줘
- 치환어는 내가 쓴 그대로 써 줘</pre></div>
<p class="lesson-note">※ Gemini에는 실습 2에서 치환어로 작성한 Inventory만 입력함(빠른 수업 진행을 위해 AI 활용)</p>
<p class="lesson-note">※ 후보를 고를 때는 근거 번호가 2개 이상인 역량(여러 경험에서 반복해 증명된 강한 역량)과 JD 요구에 연결되는 역량을 우선하고, 내가 설명할 수 없는 역량은 빼고 쓰지 않음</p>
<div class="table-wrap"><table class="lesson-table competency-template"><thead><tr><th>핵심역량</th><th>근거 경험(Inventory 번호)</th><th>기술/방법</th><th>해결한 문제</th><th>공통역량 연결(D·T·A·P·C·E)</th></tr></thead><tbody>${'<tr><td></td><td></td><td></td><td></td><td></td></tr>'.repeat(5)}</tbody></table></div>

<section class="lesson-insight"><h4 class="insight-title"><span aria-hidden="true">🧠</span><strong>POINT</strong><span aria-hidden="true">🧠</span></h4><p>공통역량 연결 열은 STEP 1의 6가지 공통역량(D : Domain · T : Technical · A : Data Analysis · P : Problem Solving · C : Collaboration · E : Execution) 약자로 표시하여 분야 번호(①~⑧)와 헷갈리지 않도록 영문 약자를 사용</p><p>선임·책임급 지원인데 E가 비어 있다면 Inventory에서 리딩·운영 경험을 다시 찾아서 정리</p></section>

<details class="lesson-toggle sample-toggle"><summary>[실습 참고 🧍🏽‍♀️] 김서연의 핵심 역량 도출</summary><div class="toggle-body">
<p class="lesson-note">※ 핵심역량 연결 프롬프트로 받은 후보 중 근거 번호와 JD 연결이 분명한 5개를 골라 내 표현으로 다듬은 결과</p>
<div class="table-wrap"><table class="lesson-table competency-sample"><thead><tr><th>핵심역량</th><th>근거 경험(Inventory 번호)</th><th>기술/방법</th><th>해결한 문제</th><th>공통역량 연결</th></tr></thead><tbody>
<tr><td>세포 기반 효능평가 설계 및 분석</td><td>[2] 1차 회사: 후보물질 효능평가<br>[9] 연구 성과: 1차 회사 특허</td><td>Cell culture, ELISA, qPCR</td><td>후보물질의 생물학적 반응 비교</td><td>D · T · A</td></tr>
<tr><td>분자생물학 데이터 기반 원인 분석</td><td>[3] 1차 회사: 실험 재현성 개선</td><td>qPCR, Western blot, GraphPad Prism</td><td>반복 실험 결과 편차의 원인 후보 탐색</td><td>A · P</td></tr>
<tr><td>실험 프로토콜 최적화·표준화</td><td>[3] 1차 회사: 실험 재현성 개선<br>[6] 3차 회사: 연구 프로젝트 운영<br>[11] 연구 성과: 3차 회사 사내 수상</td><td>조건 비교, 프로토콜 개선, SOP</td><td>개인 단위 개선 → 팀 단위 연구 일관성 확보</td><td>P · E</td></tr>
<tr><td>바이오마커 분석 및 데이터 해석</td><td>[4] 2차 회사: 바이오마커 분석<br>[10] 연구 성과: 2차 회사 학회 발표</td><td>qPCR, Western blot, Flow cytometry</td><td>처리군별 반응 차이 해석 → 작용기전(MOA) 가설 검토 근거 제공</td><td>D · T · A</td></tr>
<tr><td>연구 프로젝트 협업·운영</td><td>[5] 2차 회사: 외부 시험기관 협업<br>[6] 3차 회사: 연구 프로젝트 운영</td><td>시험조건 협의, 결과보고서 검토, 데이터 리뷰</td><td>내·외부 연구조건과 결과의 일관성 확보</td><td>C · E</td></tr>
</tbody></table></div>
</div></details>`;
shell.appendChild(article);

document.querySelectorAll('.lesson-view h4').forEach(title=>{
  if(title.textContent.includes('[실습'))title.classList.add('practice-title');
});

article.querySelectorAll('.copy-prompt').forEach(button=>button.addEventListener('click',async()=>{
  const code=button.nextElementSibling?.innerText||'';
  await navigator.clipboard.writeText(code);
  button.textContent='복사됨';
  setTimeout(()=>button.textContent='복사',1200);
}));

document.querySelectorAll('.lesson-view .lesson-table').forEach(table=>{
  if(table.closest('.sample-toggle'))return;
  const cells=[...table.querySelectorAll('tbody td')];
  if(!cells.length||!cells.some(cell=>!cell.textContent.trim()))return;
  const wrap=table.closest('.table-wrap');
  if(!wrap||wrap.querySelector(':scope > .table-copy-toolbar'))return;
  const toolbar=document.createElement('div');
  toolbar.className='table-copy-toolbar';
  const button=document.createElement('button');
  button.type='button';
  button.className='copy-table-button';
  button.textContent='표 복사';
  toolbar.appendChild(button);
  wrap.prepend(toolbar);
  button.addEventListener('click',async()=>{
    const rows=[...table.rows].map(row=>[...row.cells].map(cell=>cell.innerText.trim()));
    const plain=rows.map(row=>row.join('\t')).join('\n');
    const copy=document.createElement('table');
    copy.innerHTML=table.innerHTML;
    const html=copy.outerHTML;
    try{
      if(navigator.clipboard&&window.ClipboardItem){
        await navigator.clipboard.write([new ClipboardItem({
          'text/plain':new Blob([plain],{type:'text/plain'}),
          'text/html':new Blob([html],{type:'text/html'})
        })]);
      }else{
        const area=document.createElement('textarea');
        area.value=plain;
        area.style.position='fixed';
        area.style.opacity='0';
        document.body.appendChild(area);
        area.select();
        document.execCommand('copy');
        area.remove();
      }
      button.textContent='복사 완료';
    }catch(error){
      const area=document.createElement('textarea');
      area.value=plain;
      area.style.position='fixed';
      area.style.opacity='0';
      document.body.appendChild(area);
      area.select();
      document.execCommand('copy');
      area.remove();
      button.textContent='복사 완료';
    }
    setTimeout(()=>button.textContent='표 복사',1400);
  });
});
})();
