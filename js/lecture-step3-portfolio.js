(()=>{
const previous=document.querySelector('#step-3-chapter-2')?.closest('.step3-view');
if(!previous)return;
const article=document.createElement('article');
article.className='lecture-step3-portfolio';
article.innerHTML=`
<h2 id="step-3-chapter-3">3. 포트폴리오 구성</h2>
<aside class="lesson-goal"><div class="goal-title"><span>🎯</span><strong>학습 목표</strong></div><div class="goal-body">경력 기술서와 AI로 구체화한 STAR를 6페이지 포트폴리오 스토리보드로 구성하고, Gemini Canvas와 Google Slides로 포트폴리오 초안을 완성할 수 있다.</div></aside>

<h3>3.1 6페이지 스토리보드 작성</h3>
<div class="table-wrap"><table class="lesson-table portfolio-plan-table"><thead><tr><th>페이지</th><th>담을 내용</th><th>시각자료</th><th>김서연 예시</th></tr></thead><tbody>
<tr><td><strong>1. 표지</strong></td><td>이름, 한 줄 정체성, 목표 직무</td><td>키워드 그래픽(선택: AI 배경 이미지)</td><td>효능평가 데이터를 표준화해 팀 연구를 이끄는 바이오 R&amp;D 연구자</td></tr>
<tr><td><strong>2. 자기소개·핵심역량</strong></td><td>경력 요약 3줄, 핵심역량 3~5개, 경력 타임라인</td><td>타임라인, 역량 칩</td><td>8년·3개사 타임라인(2018.09~현재) + 핵심역량 5개</td></tr>
<tr><td><strong>3. 대표 프로젝트 ① 문제와 과정</strong></td><td>문제 정의 한 줄(Situation·Task) + Action과 단계별 판단 근거</td><td>단계별 흐름도</td><td>반복 실험 편차가 효능·기전 판단을 막던 문제를 조건·결과 구조화 → 편차 구간 분석 → 우선 통제 변수 결정 → SOP 작성·확정으로 해결</td></tr>
<tr><td><strong>4. 대표 프로젝트 ② 결과</strong></td><td>Result의 증거·확산·인정</td><td>전후 비교 차트 + 지표 카드</td><td>CV 약 25% → 10% 이내, 팀원 4명·2개 과제·온보딩 확산, 2025.01 사내 수상</td></tr>
<tr><td><strong>5. 주요 프로젝트 요약</strong></td><td>경력 기술서의 보조 프로젝트 2건, 건당 '문제 → 내 역할 → 결과' 한 줄</td><td>2열 프로젝트 카드</td><td>B사 바이오마커 발현 분석(MOA 가설 검토 근거 제공) / A사 효능평가·재현성 개선(특허 출원)</td></tr>
<tr><td><strong>6. 보유 기술·연구성과</strong></td><td>보유 기술, 논문·특허·학회 발표·수상</td><td>기술 매트릭스</td><td>실험기법 매트릭스 + 연구 성과(논문·특허·학회 발표·수상)</td></tr>
</tbody></table></div>

<section class="lesson-insight"><h4 class="insight-title"><span>🧠</span><strong>대표 프로젝트 중심을 지키는 규칙</strong><span>🧠</span></h4><p>문제 → 과정 → 결과의 전체 이야기와 흐름도·차트는 대표 프로젝트(3·4페이지)에만 사용</p><p>5페이지는 대표 프로젝트를 받쳐 주는 요약으로, 대표 프로젝트와 같은 역량을 보여주거나 JD Gap을 보완하는 보조 프로젝트 2건만 카드로 넣고 흐름도·차트는 쓰지 않음</p><p>최소 구성은 표지 · 자기소개·핵심역량 · 대표 프로젝트(3·4페이지를 한 장으로) · 보유 기술·연구성과의 4페이지로, 먼저 완성한 뒤 5페이지를 더함</p></section>

<p><strong>포트폴리오 전환 프롬프트</strong></p>
<div class="prompt-block"><button type="button" class="copy-prompt">복사</button><pre>[역할]
너는 {목표 직무} 채용 담당자가 30초 안에 핵심을 파악할 수 있도록 포트폴리오를 구성하는 커리어 컨설턴트야.

[입력]
1) 최종 경력 기술서([보완 필요] 섹션 제외): {실습 5 최종 경력 기술서}
2) 보완한 STAR: {실습 6 최종 STAR}

[6페이지 구성안]
1. 표지 — 이름, 한 줄 정체성, 목표 직무
2. 자기소개·핵심역량 — 경력 요약 3줄, 핵심역량 3~5개, 경력 타임라인
3. 대표 프로젝트 ① 문제와 과정 — 문제 정의 한 줄(Situation·Task) + Action과 단계별 판단 근거
4. 대표 프로젝트 ② 결과 — Result의 증거·확산·인정
5. 주요 프로젝트 요약 — 경력 기술서의 보조 프로젝트 2건
6. 보유 기술·연구성과 — 보유 기술, 논문·특허·학회 발표·수상

[요청]
위 구성안대로 페이지마다 아래 내용을 작성해 줘.
- 페이지 제목
- 핵심 메시지 1문장 (채용 담당자가 이 페이지에서 기억할 한 가지)
- 본문 불릿 3개 이내
- 시각자료 설계 1개: 종류 / 들어갈 요소(도형별 글자 15자 안팎) / 강조할 곳 1곳
3페이지는 문제 정의(S·T)를 제목과 핵심 메시지에 담고, 본문은 흐름도로 그릴 수 있도록 Action 단계를 순서대로 나눠 단계마다 판단 근거를 한 줄씩 붙여 줘.
5페이지는 경력 기술서의 보조 프로젝트 2건만 쓰고, 건마다 '문제 → 내 역할 → 결과'를 한 줄로 요약해 줘. 흐름도·차트는 쓰지 말고 카드 2개로만 구성해 줘.

[출력 형태]
반드시 마크다운 표로 답해 줘.
표 1. 6페이지 스토리보드 (페이지당 1행, 본문 불릿은 한 칸 안에 ①②③으로 이어서 작성)
| 페이지 | 페이지 제목 | 핵심 메시지 1문장 | 본문 불릿 | 시각자료 설계(종류 / 요소 / 강조) |
표 2. 3페이지 흐름도 단계
| 단계 | 한 일 | 판단 근거 |
표 앞뒤에 다른 설명은 쓰지 마.

[제약]
- 입력한 경력 기술서와 보완한 STAR에 없는 내용은 추가하지 마
- 3~4페이지(대표 프로젝트)는 보완한 STAR를 우선 사용해 줘
- 한 페이지에는 메시지를 하나만 담아 줘
- 연락처 같은 개인정보는 넣지 말고, 직접 입력할 자리만 비워 둬
- 시각자료에 들어갈 글자·수치도 입력에 있는 내용만 써 줘</pre></div>

<h4 class="practice-title"><span>✍️</span> [실습 7] 6페이지 스토리보드 만들기</h4>
<div class="table-wrap"><table class="lesson-table editable-practice-table"><thead><tr><th>페이지</th><th>제목</th><th>핵심 메시지 1문장</th><th>시각자료 설계(종류 / 요소 / 강조)</th></tr></thead><tbody><tr><td>1. 표지</td><td></td><td></td><td></td></tr><tr><td>2. 자기소개·핵심역량</td><td></td><td></td><td></td></tr><tr><td>3. 대표 프로젝트 ① 문제와 과정</td><td></td><td></td><td></td></tr><tr><td>4. 대표 프로젝트 ② 결과</td><td></td><td></td><td></td></tr><tr><td>5. 주요 프로젝트 요약</td><td></td><td></td><td></td></tr><tr><td>6. 보유 기술·연구성과</td><td></td><td></td><td></td></tr></tbody></table></div>

<details class="lesson-toggle sample-toggle"><summary>[실습 참고 🧍🏽‍♀️] 김서연의 6페이지 스토리보드</summary><div class="toggle-body">
<details class="lesson-toggle nested-toggle"><summary>스토리보드 요청 프롬프트</summary><div class="toggle-body"><div class="prompt-block"><button type="button" class="copy-prompt">복사</button><pre id="seoyeon-story-prompt"></pre></div></div></details>
<details class="lesson-toggle nested-toggle"><summary>스토리보드 결과</summary><div class="toggle-body" id="seoyeon-story-result"></div></details>
</div></details>

<h3>3.2 시각자료 원칙</h3>
<p>시각자료는 따로 만들지 않고 단계별로 나눠 넣는 것으로 무엇을 그릴지(종류·요소·강조)는 실습 7 스토리보드의 '시각자료 설계' 열에서 정하고, 어떻게 그릴지(색·스타일·금지 규칙)는 실습 8 Canvas 프롬프트에 넣어 슬라이드를 만들 때 함께 그림. 표지 배경·아이콘처럼 글자가 없는 이미지만 실습 9에서 나노 바나나로 만들어 넣음</p>
<aside class="lesson-warning"><div class="warning-title">🚨 <strong>과학기술 포트폴리오의 AI 이미지 사용 원칙</strong></div><ul><li>AI 이미지는 표지·개념도·아이콘·배경 용도로만 사용</li><li>Western blot 밴드, 현미경 사진, 실험 그래프처럼 실험 결과로 오해될 수 있는 이미지는 생성하지 않음</li><li>수치가 들어가는 차트는 내 기록의 수치로 직접 만들고 비교 기준(기간·자료)을 함께 표시하며, 공개할 수 없는 데이터는 수치 없는 도식으로 표현</li><li>연구 데이터를 AI로 만들거나 보정한 것으로 보이면 연구윤리 문제로 이어질 수 있음</li></ul></aside>
<details class="lesson-toggle"><summary>☑️ [안내] 도구 Imagen → 나노 바나나 2(Nano Banana 2) 안내</summary><div class="toggle-body"><p>교육 안내문의 'Imagen'은 Google의 이전 이미지 생성 모델 이름으로, 현재 Gemini 앱의 이미지 생성은 나노 바나나 2(Nano Banana 2)가 기본 모델임. 오늘 실습은 Gemini 앱의 이미지 생성 기능으로 진행함</p><p class="lesson-note">※ 무료 계정은 하루 이미지 생성 횟수에 제한이 있으므로 표지 배경 1장과 아이콘 세트 1장만 만듦. 메뉴 이름과 제공 범위는 계정·업데이트 시점에 따라 달라질 수 있음</p></div></details>
<section class="lesson-insight"><h4 class="insight-title"><span>🧠</span><strong>이미지 속 글자는 넣지 않기</strong><span>🧠</span></h4><p>이미지 속 글자는 나중에 고치기 어렵고 오타 검수 부담이 있으므로, 이미지에는 글자를 넣지 않고 텍스트는 Slides에서 직접 입력함</p></section>

<h3>3.3 Canvas로 슬라이드 초안 만들기</h3>
<ol><li><strong>Canvas 켜기</strong> — Gemini 앱 입력창의 도구에서 Canvas를 선택함</li><li><strong>프롬프트 실행</strong> — 아래 실습 8 프롬프트의 [입력]에 실습 7의 표 1·표 2를 붙여넣고 실행함</li><li><strong>미리보기 확인</strong> — 6장이 스토리보드 순서대로 만들어졌는지, 장마다 메시지가 하나인지 확인함</li><li><strong>한 번에 하나씩 수정</strong> — 같은 대화창에서 고칠 장과 요소를 지정해 요청함</li><li><strong>Slides로 내보내기</strong> — Canvas 화면의 내보내기 메뉴에서 Google Slides로 내보냄</li></ol>
<aside class="lesson-warning account-warning"><div class="warning-title">⚠️ <strong>계정에 따라 메뉴가 다를 수 있음</strong></div><p>Canvas의 프레젠테이션 생성과 Google Slides 내보내기는 계정 종류·업데이트 시점에 따라 보이지 않을 수 있음. 메뉴가 보이지 않으면 아래 대체 경로로 진행함</p><p>대체 ① 같은 프롬프트의 첫 줄을 "웹 페이지(HTML) 슬라이드로 만들어 줘"로 바꿔 Canvas 웹 페이지로 만들고 링크로 공유함</p><p>대체 ② 실습 7 스토리보드의 문장을 Google Slides 기본 테마에 페이지별로 붙여넣고 실습 9 순서대로 완성함</p></aside>

<h4 class="practice-title"><span>✍️</span> [실습 8] Canvas로 6페이지 슬라이드 초안 만들기</h4>
<p><strong>슬라이드 초안 요청 프롬프트</strong></p>
<div class="prompt-block"><button type="button" class="copy-prompt">복사</button><pre>[역할]
너는 과학기술 경력 포트폴리오를 만드는 프레젠테이션 디자이너야.

[요청]
아래 스토리보드로 6장짜리 프레젠테이션을 만들어 줘.
Google Slides로 내보내서 편집할 거야.

[입력]
스토리보드: {실습 7 결과 표 1·표 2}

[디자인]
- 흰 배경, 메인 컬러 네이비, 강조 컬러 민트, 글꼴은 1종으로 통일
- 장마다 제목 → 핵심 메시지 1문장 → 본문 순서로 쓰고, 한 장에 메시지는 하나만
- 스토리보드의 '시각자료 설계'대로 장마다 시각자료 1개를 넣고, 강조할 곳만 민트로 표시
- 3장 흐름도는 표 2의 단계대로 도형과 화살표로 그리고, 단계 아래에 판단 근거를 작은 글씨로 넣어 줘
- 5장은 보조 프로젝트 2건을 카드 2개로만 구성하고 흐름도·차트는 넣지 마

[제약]
- 스토리보드에 없는 경력·수치·성과는 추가하지 마 (시각자료 안 글자·수치 포함)
- 이미지는 표지 배경과 아이콘에만 쓰고, 사진·현미경 이미지·Western blot 밴드·실험 그래프처럼 실험 결과로 보이는 이미지는 넣지 마
- 수치가 있는 장에는 비교 기준(기간·자료)을 작은 글씨로 표시해 줘
- 이름·연락처는 '직접 입력' 자리로 비워 둬</pre></div>
<p><strong>이어서 보낼 수정 요청 예시</strong></p>
<div class="table-wrap"><table class="lesson-table"><thead><tr><th>고칠 점</th><th>이어서 보낼 요청 예시</th></tr></thead><tbody><tr><td>스토리보드와 다른 문장</td><td>"2장 핵심 메시지가 스토리보드와 달라. 스토리보드 문장 그대로 바꿔 줘"</td></tr><tr><td>흐름도 단계</td><td>"3장 흐름도를 표 2의 4단계로 다시 그리고, 3단계만 민트로 강조해 줘"</td></tr><tr><td>자동으로 들어간 이미지</td><td>"4장에 들어간 실험 사진 이미지는 빼고, 전후 비교 막대만 남겨 줘"</td></tr><tr><td>글자 넘침</td><td>"6장 글자가 넘쳐. 본문은 그대로 두고 글자 크기만 한 단계 줄여 줘"</td></tr></tbody></table></div>
<p class="lesson-note">※ 한 번에 하나씩 요청하고, 고칠 장과 요소를 지정해야 다른 장이 함께 바뀌지 않음</p>
<details class="lesson-toggle sample-toggle"><summary>[실습 참고 🧍🏽‍♀️] 김서연의 슬라이드 초안</summary><div class="toggle-body"><details class="lesson-toggle nested-toggle"><summary>슬라이드 요청 프롬프트</summary><div class="toggle-body"><div class="prompt-block"><button type="button" class="copy-prompt">복사</button><pre id="seoyeon-slide-prompt"></pre></div></div></details><details class="lesson-toggle nested-toggle"><summary>슬라이드 초안 결과</summary><div class="toggle-body"><div class="lesson-file-card"><span>구글 슬라이드</span></div><a class="lesson-file-card" href="data/Bio_RD_Career_Portfolio.pdf" target="_blank" rel="noopener"><strong>Bio_RD_Career_Portfolio.pdf</strong><small>1.1 MiB · 새 창에서 보기</small></a><a class="lesson-file-card" href="data/Bio_RD_Career_Portfolio.pptx" download><strong>Bio_RD_Career_Portfolio.pptx</strong><small>89.1 KiB · 다운로드</small></a></div></details></div></details>

<h3>3.4 Google Slides에서 완성하기</h3>
<p>Canvas 초안은 출발점이며, 사실 확인과 이미지 정리를 거쳐야 제출할 수 있는 포트폴리오가 됨</p>
<div class="table-wrap"><table class="lesson-table"><thead><tr><th>순서</th><th>할 일</th><th>확인 기준</th></tr></thead><tbody><tr><td>1. 사실 확인</td><td>장마다 문장·수치를 스토리보드와 대조함</td><td>스토리보드에 없는 경력·수치·역할 표현이 없음</td></tr><tr><td>2. 이미지 정리</td><td>Canvas가 자동으로 넣은 이미지를 점검함</td><td>실험 결과처럼 보이는 이미지가 없음</td></tr><tr><td>3. 시각자료 정리</td><td>3장 흐름도·4장 차트의 글자와 수치를 맞춤</td><td>흐름도 단계명이 표 2와 같고, 차트 아래에 비교 기준이 있음</td></tr><tr><td>4. 이미지 넣기</td><td>나노 바나나로 만든 표지 배경·아이콘을 넣음</td><td>이미지 안에 글자·숫자가 없음</td></tr><tr><td>5. 직접 입력·공유</td><td>이름·연락처를 입력하고 PDF로 저장하거나 링크로 공유함</td><td>공유 권한을 '링크가 있는 모든 사용자 보기'로 설정함</td></tr></tbody></table></div>
<h4 class="practice-title"><span>✍️</span> [실습 9] Google Slides로 포트폴리오 완성하기</h4>
<ul class="practice-checklist"><li><label><input type="checkbox"> 장마다 스토리보드와 대조해 없는 내용을 지움</label></li><li><label><input type="checkbox"> 실험 결과처럼 보이는 이미지를 지움</label></li><li><label><input type="checkbox"> 3장 흐름도 단계명과 판단 근거를 표 2와 맞춤</label></li><li><label><input type="checkbox"> 4장 수치 아래에 비교 기준(기간·자료)을 표시함</label></li><li><label><input type="checkbox"> 나노 바나나로 표지 배경 1장·아이콘 세트 1장을 만들어 넣음</label></li><li><label><input type="checkbox"> 이름·연락처를 직접 입력함</label></li><li><label><input type="checkbox"> PDF로 저장하거나 공유 링크를 만듦</label></li></ul>`;
previous.append(article);

const googleSlidesCard=[...article.querySelectorAll('.lesson-file-card')].find(card=>card.textContent.trim()==='구글 슬라이드');
if(googleSlidesCard){
  const googleSlidesLink=document.createElement('a');
  googleSlidesLink.className='lesson-file-card';
  googleSlidesLink.href='https://docs.google.com/presentation/d/1gG3EGqXdoT9OSPjGvOwVFbAOu4tq7c6QY3Pf-a-6K0w/edit?slide=id.p1#slide=id.p1';
  googleSlidesLink.target='_blank';
  googleSlidesLink.rel='noopener';
  googleSlidesLink.innerHTML='<strong>구글 슬라이드</strong><small>새 창에서 열기</small>';
  googleSlidesCard.replaceWith(googleSlidesLink);
}

const storyRows=[
['1. 표지','효능평가 데이터를 표준화해 팀 연구를 이끄는 바이오 R&amp;D 연구자','바이오 R&amp;D 8년의 실험·분석 경험을 기반으로 개인의 문제해결을 팀 연구 프로세스로 확장해 온 연구자','① 바이오 R&amp;D 8년 · 2018.09~현재 ② 생명공학 석사 · 2016.03~2018.08 ③ Target Position · 바이오·의료 R&amp;D 선임/책임급 연구직 · Project Leader / 이름·연락처: [직접 입력]','3단계 키워드 그래픽 / Experiment → Analysis → Standardization (화살표 연결) / Standardization 강조'],
['2. 자기소개·핵심역량','실험 수행에서 데이터 해석·연구 운영까지 확장한 8년','in vitro 실험 역량을 기반으로 데이터 해석, 원인 분석, SOP 표준화와 연구 프로젝트 운영까지 역할을 확장함','① in vitro 효능평가·바이오마커 분석 · Cell culture, qPCR, Western blot, ELISA, Flow cytometry 기반 실험 설계·분석 ② 원인 분석·SOP 표준화 · 조건별 데이터 비교 → 원인 후보 도출 → 개선 우선순위 판단 → 팀 공통 SOP 적용 ③ 경력 확장 · A사 연구원: 효능평가·재현성 개선 → B사 연구원→선임: 바이오마커 분석·외부 협업 → C사 선임: 데이터 리뷰·SOP 표준화·연구 프로젝트 운영','가로형 Career Timeline + 역량 칩 / 원 3개(2018.09 A사 · 실험·재현성 / 2020.09 B사 · 분석·협업 / 2023.09 C사 · 표준화·운영) + 핵심역량 칩 5개 / C사 강조'],
['3. 대표 프로젝트 ① 문제와 과정','반복 실험 편차가 효능·기전 판단을 막고 있었고, 데이터로 우선순위를 정해 해결함','연구원별 실험 차이로 생긴 팀 단위 편차를, 모든 변수를 동시에 바꾸지 않고 데이터 비교로 통제 순서를 정하고 비교 실험으로 SOP를 확정해 해결함','① 문제 · 연구원마다 실험 방식이 달라 반복 실험 결과의 편차가 팀 단위로 반복되고 후보물질 효능·기전 비교 판단이 지연됨 ② 판단 · 계대수별 데이터의 편차가 가장 크고 배양 단계에서 바로 바꿀 수 있어 세포 계대수를 먼저 통제함 ③ 합의 · 의견이 갈린 측정 시점은 두 조건으로 1회 비교 실험을 해 데이터를 근거로 SOP를 확정함','4단계 Decision Flow / 상단 문제 정의 한 줄 + 조건·결과 구조화 → 편차 구간 분석 → 우선 통제 변수 결정 → SOP 작성·확정, 단계 아래 판단 근거(표 2) / 3단계 강조'],
['4. 대표 프로젝트 ② 결과','CV 약 25% → 10% 이내, 개인의 개선을 팀 연구 기준으로 확장함','개선 효과를 전·후 데이터로 확인하고 표준 SOP를 팀원 4명·2개 과제와 신규 연구원 온보딩까지 확산함','① Evidence · 표준화 전 3개월과 후 3개월의 실험노트·데이터 리뷰 자료를 비교한 결과 반복 실험 간 CV가 약 25%에서 10% 이내로 감소하고 재실험 요청이 줄어듦 ② Scale · 표준 SOP를 팀원 4명·2개 과제에 적용하고 신규 연구원 온보딩 자료로 활용함 ③ Recognition · 해당 성과로 2025.01 사내 우수 연구 개선상을 수상함','Before → After 성과 대시보드 / CV 약 25% → 10% 이내(전·후 각 3개월 비교) + 지표 카드 4개(팀원 4명 · 2개 과제 · 온보딩 · 2025.01 수상) / CV 수치 강조'],
['5. 주요 프로젝트 요약','같은 데이터 역량을 다른 과제에서도 증명함','발현 데이터 분석으로 작용기전(MOA) 가설 검토 근거를 제공하고, 효능평가 설계·재현성 개선으로 특허 출원까지 연결함','① B사 바이오마커 발현 분석(2021.01~2022.12) · 처리군별 발현 데이터 분석 → 바이오마커 후보·MOA 가설 검토 근거 제공 → 2022.10 국내 학회 포스터 발표 ② A사 효능평가·재현성 개선(2018.09~2020.08) · 세포 기반 효능평가 설계와 편차 원인 분석 → 후속 검증 후보군 논의 근거 제공·프로토콜 개선 → 국내 특허 출원 공동 발명자','2열 프로젝트 카드 / 카드별 \'문제 → 내 역할 → 결과\' 3줄(B사 · A사) / B사 카드의 \'MOA 가설 검토 근거 제공\' 강조'],
['6. 보유 기술·연구성과','실험·분석·연구 운영을 실제 연구 결과물로 연결함','in vitro 실험과 데이터 분석 역량을 특허·학회 발표·SOP·연구 개선 성과로 연결한 경험을 보유함','① Experimental &amp; Analytical · Cell culture, in vitro cell-based assay, qPCR, Western blot, ELISA, Flow cytometry, GraphPad Prism ② Research Operation · 실험계획 검토, 데이터 리뷰, 프로토콜/SOP 표준화, 연구 프로젝트 운영, 외부 시험기관 협업 ③ Research Outputs · 국내 학술지 논문 공동저자 1편(2018), 국내 특허 출원 공동 발명 1건(2020), 국내 학회 포스터 발표 1건(2022), 사내 우수 연구 개선상(2025.01)','3열 연결 맵 / Experiment(실험기법) → Evidence(데이터 분석·리뷰·SOP) → Output(논문·특허·학회 발표·수상) / Output 열 강조']
];
const flowRows=[['STEP 1. 조건·결과 구조화','팀원별 세포 계대수·처리 시점·측정 시점과 qPCR·Western blot 결과를 표로 정리함','연구원마다 달랐던 실험조건과 결과를 동일한 기준에서 비교하기 위함'],['STEP 2. 편차 구간 분석','정리한 데이터를 GraphPad Prism으로 비교하여 편차가 큰 구간을 확인함','변수가 여러 개라, 어느 조건에서 편차가 커지는지 먼저 범위를 좁히기 위함'],['STEP 3. 우선 통제 변수 결정','실험 자원이 제한된 상황에서 세포 계대수를 가장 먼저 통제함','계대수별로 나눈 데이터에서 편차가 가장 컸고, 배양 단계에서 바로 바꿀 수 있는 조건이었기 때문임'],['STEP 4. SOP 작성·확정','A사에서 익힌 원인 분석 방식으로 SOP 초안을 작성하고, 의견이 갈린 측정 시점은 두 조건으로 1회 비교 실험을 해 데이터 리뷰 회의에서 합의한 뒤 확정함','의견만으로 기준을 정하지 않고 실제 비교 데이터를 근거로 팀의 공통 기준을 정하기 위함']];
const storyPrompt=`[역할]
너는 바이오·의료 기업 R&D 선임/책임급 연구직(바이오 연구원 Project Leader) 채용 담당자가 30초 안에 핵심을 파악할 수 있도록 포트폴리오를 구성하는 커리어 컨설턴트야.

[입력]
1) 최종 경력 기술서([보완 필요] 섹션 제외)

■ 기본 정보
- 지원 분야: 바이오·의료 R&D 선임/책임급 연구직 · Project Leader
- 총 경력: 바이오 R&D 8년 (2018.09~현재)
- 학력: 생명공학 석사 (2016.03~2018.08)

■ 경력 요약
- 바이오·의료 R&D 분야에서 8년간 세포 기반 효능평가, 분자생물학 분석, 바이오마커 연구 및 연구 프로젝트 운영을 수행함
- 후보물질의 효능·발현 데이터를 기반으로 작용기전(MOA) 가설 검토에 필요한 근거를 제공하고, 효능·기전 판단에 쓰이는 데이터의 신뢰성을 높임
- 선임연구원으로서 실험 편차의 원인을 분석하고 SOP를 팀 기준으로 확정해 팀원 4명·2개 과제에 확산함

■ 핵심역량
- 세포 기반 효능평가 설계 및 분석
- 분자생물학 데이터 기반 원인 분석
- 실험 프로토콜 최적화·표준화
- 바이오마커 분석 및 데이터 해석 — 작용기전(MOA) 가설 검토 근거 제공
- 연구 프로젝트 협업·운영

■ 경력 사항
[바이오 C사 · 선임연구원 (2023.09~현재)]
- 연구 프로젝트의 실험계획을 검토하고 데이터 리뷰로 팀 실험 기준을 확정함
- 연구원별 실험 방식 차이로 발생한 반복 실험 편차의 원인을 분석함
- 세포 계대수, 처리 시점, 측정 시점 및 qPCR·Western blot 결과를 비교해 핵심 통제 조건을 도출함
- 비교 실험 결과를 기반으로 SOP를 확정하고 연구팀 전체에 적용함
- 표준 SOP를 팀원 4명·2개 과제와 신규 연구원 온보딩에 확산함
- 실험 데이터 리뷰로 후보물질 효능·기전 판단에 쓰이는 데이터의 일관성을 점검함
- 2025.01 실험 프로토콜 표준화 성과로 사내 우수 연구 개선상을 수상함
[바이오·헬스케어 B사 · 연구원 → 선임연구원 (2020.09~2023.08)]
- 2022.03 선임연구원으로 승진함
- 후보물질 처리군별 유전자·단백질 발현 데이터를 분석하고 바이오마커 후보 검토 근거를 제공함
- 처리군별 발현 데이터를 분석해 작용기전(MOA) 가설 검토에 필요한 근거를 제공함
- 외부 시험기관과 시험조건을 협의하고 결과보고서를 검토함
- 바이오마커 분석 결과를 국내 학회 포스터로 발표함
[바이오 벤처 A사 · 연구원 (2018.09~2020.08)]
- 후보물질의 세포 기반 효능평가 실험을 설계하고 후보물질별 반응을 비교·분석함
- Cell culture, ELISA, qPCR을 활용해 효능평가 데이터를 확보함
- 반복 실험의 조건과 결과 편차를 분석해 원인 후보를 도출함
- GraphPad Prism을 활용해 데이터 패턴을 비교하고 실험 프로토콜을 개선함
- 세포 기반 효능평가 관련 국내 특허 출원에 공동 발명자로 참여함

■ 주요 프로젝트
[대표 프로젝트] 후보물질 효능·기전 판단을 위한 연구 프로토콜 표준화 (바이오 C사, 2024.03~2024.12)
- S: 연구원별 실험 방식 차이로 반복 실험 결과의 편차가 발생하고, 후보물질 효능·기전 비교 판단이 지연됨
- T: 선임연구원으로서 편차 원인을 규명하고, 신뢰도 높은 데이터 확보를 위한 팀 표준 프로토콜을 구축해야 함
- A: 실험조건과 qPCR·Western blot 결과를 구조화하고 GraphPad Prism으로 편차 구간을 분석해 세포 계대수를 우선 통제 조건으로 선정함. 비교 실험 결과를 기반으로 SOP와 데이터 리뷰 기준을 확정함
- R: 표준화 전후 반복 실험 CV를 약 25%에서 10% 이내로 낮추고, SOP를 팀원 4명·2개 과제 및 신규 연구원 온보딩에 적용함. 후보물질 효능·기전 판단에 활용되는 데이터의 일관성을 높이고 사내 우수 연구 개선상을 수상함
[보조 프로젝트] 바이오마커 발현 분석 및 MOA 가설 검토 근거 제공 (바이오·헬스케어 B사, 2021.01~2022.12)
- 후보물질 처리군별 유전자·단백질 발현 데이터를 분석해 바이오마커 후보와 작용기전(MOA) 가설 검토 근거를 제공함
- 분석 결과를 정리해 2022.10 국내 학회 포스터로 발표함
[보조 프로젝트] 후보물질 효능평가 및 실험 재현성 개선 (바이오 벤처 A사, 2018.09~2020.08)
- 세포 기반 효능평가를 설계하고 후보물질별 반응을 비교해 후속 검증 후보군 논의 근거를 제공함
- 실험조건과 결과 편차의 원인을 분석하고 프로토콜을 개선해 팀 연구 표준화 역량의 기반을 마련함

■ 연구 성과
- 2018 | 국내 학술지 논문 1편 공동저자 | 기관(치환어)
- 2020 | 세포 기반 효능평가 관련 국내 특허 출원 1건 공동 발명자 | 바이오 벤처 A사
- 2022 | 바이오마커 분석 결과 국내 학회 포스터 발표 1건 | 바이오·헬스케어 B사
- 2025 | 실험 프로토콜 표준화 성과로 사내 우수 연구 개선상 수상 | 바이오 C사

■ 보유 기술 (분류 / 기술 / 수준 / 활용 경험)
- 세포 기반 실험 / Cell culture / 능숙 / 후보물질 효능평가 및 프로토콜 표준화
- 세포 기반 실험 / In vitro cell-based assay / 능숙 / 후보물질 처리조건 설계 및 효능 비교
- 분자생물학 / qPCR / 능숙 / 효능평가, 바이오마커 분석
- 분자생물학 / Western blot / 능숙 / 단백질 발현 및 실험 편차 분석
- 분자생물학 / ELISA / 활용 가능 / 후보물질별 효능 데이터 분석
- 세포 분석 / Flow cytometry / 활용 가능 / 바이오마커 분석
- 데이터 분석 / GraphPad Prism / 활용 가능 / 편차 구간 분석 및 조건별 데이터 비교
- 연구 운영 / SOP·프로토콜 작성 및 표준화 / 능숙 / 팀 연구 기준 확정 및 적용
- 연구 운영 / 실험계획 검토·데이터 리뷰 / 능숙 / C사 연구 프로젝트 운영
- 협업 / 외부 시험기관 및 연구팀 협업 / 능숙 / 시험조건 협의, 결과보고서 검토

2) 보완한 STAR (실습 6 최종본)
- 대표 프로젝트: C사 실험 프로토콜 표준화 (2024.03~2024.12)
- S: C사에서 연구원마다 실험 방식이 달라 반복 실험 결과의 편차가 팀 단위로 반복되었고, 이로 인해 후보물질 효능·기전 비교 판단이 지연됨. 배경: A사에서 비슷한 편차 문제의 원인을 직접 분석해 본 경험이 있음
- T: 선임연구원으로서 팀 실험의 편차 원인을 규명하고, 팀 전체가 따르는 표준 프로토콜(SOP)을 만들어 적용해야 함
- A: ① 팀원별 세포 계대수·처리 시점·측정 시점과 qPCR·Western blot 결과를 표로 정리하고, GraphPad Prism으로 비교해 편차가 큰 구간을 찾음 ② 계대수별로 나눈 데이터에서 편차가 가장 컸고 배양 단계에서 바로 바꿀 수 있는 조건이었기 때문에, 세포 계대수를 가장 먼저 통제함 ③ A사에서 익힌 원인 분석 방식을 적용해 SOP 초안을 작성함 ④ 측정 시점을 두고 팀원 의견이 갈리자, 두 조건으로 1회 비교 실험을 진행하고 그 데이터를 근거로 데이터 리뷰 회의에서 합의해 SOP를 확정함
- R: 증거 – 표준화 전 3개월과 후 3개월의 실험노트·데이터 리뷰 자료를 비교한 결과, 반복 실험 간 CV가 약 25%에서 10% 이내로 감소하고 재실험 요청이 줄어듦 / 확산 – 표준 SOP가 팀원 4명·2개 과제에 적용되고 신규 연구원 온보딩 자료로도 사용됨 / 인정 – 2025.01 사내 우수 연구 개선상 수상

[6페이지 구성안]
1. 표지 — 이름, 한 줄 정체성, 목표 직무
2. 자기소개·핵심역량 — 경력 요약 3줄, 핵심역량 3~5개, 경력 타임라인
3. 대표 프로젝트 ① 문제와 과정 — 문제 정의 한 줄(Situation·Task) + Action과 단계별 판단 근거
4. 대표 프로젝트 ② 결과 — Result의 증거·확산·인정
5. 주요 프로젝트 요약 — 경력 기술서의 보조 프로젝트 2건
6. 보유 기술·연구성과 — 보유 기술, 논문·특허·학회 발표·수상

[요청]
위 구성안대로 페이지마다 아래 내용을 작성해 줘.
- 페이지 제목
- 핵심 메시지 1문장 (채용 담당자가 이 페이지에서 기억할 한 가지)
- 본문 불릿 3개 이내
- 시각자료 설계 1개: 종류 / 들어갈 요소(도형별 글자 15자 안팎) / 강조할 곳 1곳
3페이지는 문제 정의(S·T)를 제목과 핵심 메시지에 담고, 본문은 흐름도로 그릴 수 있도록 Action 단계를 순서대로 나눠 단계마다 판단 근거를 한 줄씩 붙여 줘.
5페이지는 경력 기술서의 보조 프로젝트 2건만 쓰고, 건마다 '문제 → 내 역할 → 결과'를 한 줄로 요약해 줘. 흐름도·차트는 쓰지 말고 카드 2개로만 구성해 줘.

[출력 형태]
반드시 마크다운 표로 답해 줘.
표 1. 6페이지 스토리보드 (페이지당 1행, 본문 불릿은 한 칸 안에 ①②③으로 이어서 작성)
| 페이지 | 페이지 제목 | 핵심 메시지 1문장 | 본문 불릿 | 시각자료 설계(종류 / 요소 / 강조) |
표 2. 3페이지 흐름도 단계
| 단계 | 한 일 | 판단 근거 |
표 앞뒤에 다른 설명은 쓰지 마.

[제약]
- 입력한 경력 기술서와 보완한 STAR에 없는 내용은 추가하지 마
- 3~4페이지(대표 프로젝트)는 보완한 STAR를 우선 사용해 줘
- 한 페이지에는 메시지를 하나만 담아 줘
- 연락처 같은 개인정보는 넣지 말고, 직접 입력할 자리만 비워 둬
- 시각자료에 들어갈 글자·수치도 입력에 있는 내용만 써 줘`;
document.querySelector('#seoyeon-story-prompt').textContent=storyPrompt;
const storyTableText=['페이지\t페이지 제목\t핵심 메시지 1문장\t본문 불릿\t시각자료 설계(종류 / 요소 / 강조)',...storyRows.map(row=>row.join('\t')),'단계\t한 일\t판단 근거',...flowRows.map(row=>row.join('\t'))].join('\n');
document.querySelector('#seoyeon-slide-prompt').textContent=`[역할]
너는 과학기술 경력 포트폴리오를 만드는 프레젠테이션 디자이너야.
[요청]
아래 스토리보드로 6장짜리 프레젠테이션을 만들어 줘.
Google Slides로 내보내서 편집할 거야.
[입력]
스토리보드 결과
${storyTableText}
[디자인]
흰 배경, 메인 컬러 네이비, 강조 컬러 민트, 글꼴은 1종으로 통일
장마다 제목 → 핵심 메시지 1문장 → 본문 순서로 쓰고, 한 장에 메시지는 하나만
스토리보드의 '시각자료 설계'대로 장마다 시각자료 1개를 넣고, 강조할 곳만 민트로 표시
3장 흐름도는 표 2의 단계대로 도형과 화살표로 그리고, 단계 아래에 판단 근거를 작은 글씨로 넣어 줘
5장은 보조 프로젝트 2건을 카드 2개로만 구성하고 흐름도·차트는 넣지 마
[제약]
스토리보드에 없는 경력·수치·성과는 추가하지 마 (시각자료 안 글자·수치 포함)
이미지는 표지 배경과 아이콘에만 쓰고, 사진·현미경 이미지·Western blot 밴드·실험 그래프처럼 실험 결과로 보이는 이미지는 넣지 마
수치가 있는 장에는 비교 기준(기간·자료)을 작은 글씨로 표시해 줘
이름·연락처는 '직접 입력' 자리로 비워 둬`;
document.querySelector('#seoyeon-story-result').innerHTML=`<div class="table-wrap"><table class="lesson-table"><thead><tr><th>페이지</th><th>페이지 제목</th><th>핵심 메시지 1문장</th><th>본문 불릿</th><th>시각자료 설계(종류 / 요소 / 강조)</th></tr></thead><tbody>${storyRows.map(row=>`<tr>${row.map(cell=>`<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody></table></div><div class="table-wrap"><table class="lesson-table"><thead><tr><th>단계</th><th>한 일</th><th>판단 근거</th></tr></thead><tbody>${flowRows.map(row=>`<tr>${row.map(cell=>`<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;

article.querySelectorAll('.copy-prompt').forEach(button=>button.addEventListener('click',async()=>{const code=button.nextElementSibling?.innerText||'';try{await navigator.clipboard.writeText(code)}catch(error){const area=document.createElement('textarea');area.value=code;area.style.position='fixed';area.style.opacity='0';document.body.appendChild(area);area.select();document.execCommand('copy');area.remove()}button.textContent='복사됨';setTimeout(()=>button.textContent='복사',1200)}));
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
