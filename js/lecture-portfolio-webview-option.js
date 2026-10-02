(()=>{
const host=document.querySelector('#step-3-chapter-4')?.closest('.lecture-step3-final');
if(!host||document.querySelector('.portfolio-webview-option'))return;
const section=document.createElement('section');
section.className='portfolio-webview-option';
section.innerHTML=`<details class="option-toggle"><summary><span class="option-badge">OPTION</span><strong>[옵션] 웹뷰로 포트폴리오 작업하기</strong><small>Google Slides 완성 후 선택 진행</small></summary><div class="option-toggle-body">
<aside class="option-goal"><div class="goal-title"><span>🎯</span><strong>학습 목표</strong></div><p>실습 7 스토리보드를 그대로 활용해, 모션과 인터랙션이 들어간 웹뷰(Web View) 포트폴리오를 AI 도구로 만들고 링크로 공유할 수 있다.</p></aside>
<p class="option-note">※ 선택 과정으로, Google Slides 포트폴리오(실습 9)를 완성한 뒤 진행함. 내용은 새로 쓰지 않고 실습 7 스토리보드(표 1·표 2)를 그대로 입력값으로 사용함</p>
<h3>웹뷰 포트폴리오란</h3><p>슬라이드 6장을 한 페이지짜리 웹페이지(HTML) 6개 섹션으로 바꾼 것으로, 스크롤하면 내용이 순서대로 나타나고 흐름도·수치를 클릭하거나 마우스를 올려 볼 수 있는 인터랙티브(Interactive) 포트폴리오</p>
<div class="table-wrap"><table class="lesson-table"><thead><tr><th>구분</th><th>Google Slides 포트폴리오</th><th>웹뷰 포트폴리오</th></tr></thead><tbody><tr><td>형태</td><td>6장 슬라이드 → PDF·링크</td><td>6개 섹션 웹페이지 → 링크·HTML 파일</td></tr><tr><td>강점</td><td>제출 형식으로 안정적이고 직접 편집이 쉬움</td><td>모션·클릭으로 문제 해결 과정과 성과를 체감하게 보여 줌</td></tr><tr><td>어울리는 상황</td><td>서류 제출, 인쇄, 면접 지참</td><td>이메일·LinkedIn·이력서에 링크 첨부, 면접 화면 공유</td></tr><tr><td>주의할 점</td><td>AI가 자동으로 넣은 이미지 점검</td><td>링크 공개 범위, 과한 모션, 링크 유지 여부</td></tr></tbody></table></div>
<section class="option-quote"><h4>🧠 웹뷰는 Slides를 대체하지 않고 보완함 🧠</h4><p>대부분의 채용 절차는 PDF 제출을 기준으로 하므로 Slides(PDF)를 기본 제출본으로 두고, 웹뷰는 링크로 덧붙이는 '보조 포트폴리오'로 활용함</p></section>
<h3>사용할 수 있는 도구</h3><p>같은 프롬프트로 여러 AI 도구에서 만들 수 있으며, 오늘 실습 계정인 <strong>Google Gemini</strong>를 기준으로 하되 사용 중인 도구로 진행해도 됨</p>
<div class="table-wrap"><table class="lesson-table option-tools-table"><thead><tr><th>도구</th><th>계정</th><th>특징</th><th>공유·저장</th></tr></thead><tbody><tr><td><strong>Gemini Canvas</strong></td><td>무료 Google 계정</td><td>오늘 실습 흐름 그대로 사용, 오른쪽 화면에서 바로 미리보기</td><td>공유 버튼으로 링크 생성, 코드 복사</td></tr><tr><td><strong>Claude 아티팩트(Artifacts)</strong></td><td>무료 계정 가능 (사용량 제한)</td><td>모션·인터랙션 코드 구현이 안정적이고 대화로 부분 수정이 쉬움</td><td>공개(Publish) 링크, 파일 다운로드</td></tr><tr><td><strong>Claude Design</strong></td><td>유료 (Pro·Max·Team·Enterprise)</td><td>Anthropic Labs의 디자인 전용 도구로, 시안에 댓글·직접 수정·조정 컨트롤로 디자인을 다듬음</td><td>HTML·PDF·PPTX 내보내기, Canva로 보내기</td></tr><tr><td><strong>ChatGPT</strong></td><td>무료 계정 가능 (사용량 제한)</td><td>HTML 코드를 만들고 캔버스에서 미리보기</td><td>코드 복사 후 HTML 파일로 저장</td></tr></tbody></table></div>
<p class="lesson-note">※ 메뉴 이름·무료 제공 범위는 계정 종류와 업데이트 시점에 따라 달라질 수 있음. 오늘은 유료 계정을 제공하지 않으므로 Claude Design은 개인 유료 계정이 있는 경우에만 활용함</p>
<h3>웹뷰 포트폴리오 만드는 순서</h3><ol><li><strong>도구 열기</strong> — Gemini는 입력창의 도구에서 Canvas를 선택하고, 다른 도구는 아래 '도구별 첫 줄'을 참고함</li><li><strong>프롬프트 실행</strong> — 아래 옵션 실습 프롬프트의 [입력]에 실습 7의 표 1·표 2를 붙여넣고 실행함</li><li><strong>미리보기 확인</strong> — 섹션 6개가 스토리보드 순서대로 나오는지, 모션이 내용을 가리지 않는지 확인함</li><li><strong>한 번에 하나씩 수정</strong> — 같은 대화창에서 고칠 섹션과 요소를 지정해 요청함</li><li><strong>모바일 확인</strong> — 휴대폰으로 링크를 열어 글자 넘침·겹침이 없는지 확인함</li><li><strong>공유·백업</strong> — 공유 링크를 만들고, 코드를 복사해 portfolio.html 파일로 함께 저장, 또는 깃허브 배포</li></ol>
<h4 class="practice-title"><span>✍️</span> [옵션 실습] 인터랙티브 웹뷰 포트폴리오 만들기</h4><p><strong>웹뷰 포트폴리오 요청 프롬프트</strong></p>
<div class="prompt-block option-prompt"><button type="button" class="copy-prompt">복사</button><pre>[도구별 첫 줄]
Gemini Canvas: 아래 내용을 한 페이지짜리 인터랙티브 웹페이지(HTML)로 만들어 줘.
Claude 아티팩트: 아래 내용을 미리보기 가능한 인터랙티브 웹 아티팩트로 만들어 줘.
ChatGPT: 아래 내용을 캔버스에서 미리보기 가능한 하나의 HTML 파일로 만들어 줘.

[역할]
너는 과학기술 경력 포트폴리오를 웹뷰로 구현하는 웹 디자이너야.

[입력]
실습 7 스토리보드 결과 표 1·표 2: {여기에 붙여넣기}

[요청]
- 스토리보드의 6페이지를 한 페이지짜리 웹페이지의 6개 섹션으로 만들어 줘
- 스크롤하면 각 섹션이 한 번만 부드럽게 나타나게 해 줘
- 2장 경력 타임라인은 순서대로 보이게 하고, 모바일에서는 세로로 배치해 줘
- 3장 흐름도는 각 단계를 클릭하면 판단 근거가 펼쳐지고 다시 누르면 접히게 해 줘
- 4장 전후 비교 수치는 섹션이 보일 때 한 번만 숫자 애니메이션으로 보여 줘
- 휴대폰에서도 글자·표·흐름도가 넘치거나 겹치지 않게 해 줘
- 인쇄하거나 PDF로 저장할 때는 섹션마다 한 페이지씩 나오게 해 줘

[디자인]
- 흰 배경, 메인 컬러 네이비, 강조 컬러 민트, 글꼴 1종으로 통일
- 한 섹션에 핵심 메시지는 하나만 두고, 본문은 3개 이내의 짧은 블릿으로 표현
- 모션은 흐름도·전후 비교처럼 내용을 이해시키는 곳에만 사용하고 반복 애니메이션은 넣지 마

[제약]
- 스토리보드에 없는 경력·수치·성과는 추가하지 마 (시각자료·애니메이션 안 글자·수치 포함)
- 사진·현미경 이미지·Western blot 밴드·실험 그래프처럼 실험 결과로 보이는 이미지는 넣지 마
- 외부 이미지 링크나 스톡 사진은 쓰지 말고, 도형·아이콘은 코드로 직접 그려 줘
- 수치가 있는 섹션에는 비교 기준(기간·자료)을 작은 글씨로 표시해 줘
- 이름·연락처는 '직접 입력' 자리로 비워 둘</pre></div>
<p><strong>이어서 보낼 수정 요청 예시</strong></p><div class="table-wrap"><table class="lesson-table"><thead><tr><th>고칠 점</th><th>이어서 보낼 요청 예시</th></tr></thead><tbody><tr><td>모션이 과함</td><td>"전체 모션을 지금의 절반 속도로 줄이고, 반복되는 애니메이션은 모두 빼 줘"</td></tr><tr><td>흐름도 클릭이 안 됨</td><td>"3장 흐름도 단계를 눌러도 판단 근거가 안 펼쳐져. 클릭하면 펼쳐지고 다시 누르면 접히게 고쳐 줘"</td></tr><tr><td>수치가 스토리보드와 다름</td><td>"4장 숫자 애니메이션의 최종값이 스토리보드와 달라. 스토리보드 수치 그대로 바꿔 줘"</td></tr><tr><td>모바일에서 깨짐</td><td>"휴대폰에서 2장 타임라인이 화면 밖으로 넘쳐. 모바일에서는 세로 타임라인으로 바꿔 줘"</td></tr><tr><td>인쇄가 어색함</td><td>"PDF로 저장하면 섹션이 잘려. 인쇄할 때 섹션마다 한 페이지씩 나오게 해 줘"</td></tr></tbody></table></div><p class="lesson-note">※ 한 번에 하나씩 요청하고, 고칠 섹션과 요소를 지정해야 다른 섹션이 함께 바꾰지 않음</p>
<aside class="lesson-warning option-warning"><div class="warning-title">🚨 <strong>웹뷰 포트폴리오 공개 전 확인</strong></div><ul><li>공유 링크는 주소를 아는 누구나 볼 수 있으므로, 기관명·개인정보·미공개 연구내용·과제번호가 치환된 상태인지 다시 확인함</li><li>모션은 흐름도·전후 비교처럼 내용을 이해시키는 곳에만 쓰고, 읽는 속도를 방해하면 줄임</li><li>숫자 애니메이션의 최종값이 원본 기록·스토리보드 수치와 같은지 확인함</li><li>AI가 코드로 그린 도형·차트에도 실험 결과로 오해될 만한 표현이 없는지 확인함</li><li>지원 기관이 요구하는 제출 형식(PDF 등)을 먼저 따르고, 웹뷰 링크는 추가 자료로 덧붙임</li></ul></aside>
<h4 class="practice-title"><span>✍️</span> [옵션 실습] 웹뷰 포트폴리오 점검하기</h4><ul class="practice-checklist option-checklist"><li><label><input type="checkbox"> 섹션 6개가 스토리보드 순서·문장과 같음</label></li><li><label><input type="checkbox"> 3장 흐름도 클릭, 4장 숫자 애니메이션이 정상 작동하고 최종값이 스토리보드와 같음</label></li><li><label><input type="checkbox"> 모션이 한 번만 실행되고 내용을 가리지 않음</label></li><li><label><input type="checkbox"> 휴대폰에서 글자 넘침·겹침이 없음</label></li><li><label><input type="checkbox"> 실험 결과처럼 보이는 이미지·도형이 없음</label></li><li><label><input type="checkbox"> 이름·연락처를 직접 입력함</label></li><li><label><input type="checkbox"> 공유 링크를 만들고 <code>portfolio.html</code> 파일을 따로 보관함</label></li></ul>
</div></details>`;
host.append(section);
section.querySelector('.copy-prompt')?.addEventListener('click',async event=>{const button=event.currentTarget;const value=button.nextElementSibling?.innerText||'';try{await navigator.clipboard.writeText(value)}catch(error){const area=document.createElement('textarea');area.value=value;area.style.position='fixed';area.style.opacity='0';document.body.appendChild(area);area.select();document.execCommand('copy');area.remove()}button.textContent='복사됨';setTimeout(()=>button.textContent='복사',1200)});
})();
