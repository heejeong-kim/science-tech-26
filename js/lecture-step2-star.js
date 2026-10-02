(()=>{
const article=document.querySelector('.step2-view');
if(!article)return;
const section=document.createElement('div');
section.className='step2-star-section';
section.innerHTML=`
<h2 id="step-2-chapter-3">3. 대표 프로젝트 STAR 구조화</h2>
<aside class="lesson-goal"><div class="goal-title"><span>🎯</span><strong>학습 목표</strong></div><div class="goal-body">지원 직무에 맞는 대표 프로젝트를 골라, 판단 근거와 증거가 드러나는 STAR로 구조화할 수 있다.</div></aside>

<h3>3.1 대표 프로젝트 고르기</h3>
<p>같은 경험이라도 지원 직무에 따라 강조할 부분이 달라지므로 “나는 무엇을 잘하는가?”가 아니라 “지원 직무에서 나의 어떤 경험이 가치 있는가?”를 기준으로 실습 1의 JD 요구에 직접 대응하는 경험 1건을 고르고, 아래 표에서 강조할 점을 정함</p>
<p class="lesson-note">※ 아래 표는 같은 ‘실험 편차 개선’ 경험을 지원 직무에 따라 다르게 강조한 예시임</p>
<div class="table-wrap"><table class="lesson-table role-emphasis-table"><thead><tr><th>지원 직무</th><th>강조할 내용</th><th>문장 방향</th></tr></thead><tbody>
<tr><td><strong>연구직(선임·책임)</strong></td><td>원인 분석 방법과 실험 설계 판단</td><td>단계별 변수를 순차 통제해 편차 원인을 규명함</td></tr>
<tr><td><strong>데이터 분석직</strong></td><td>데이터 정리·비교 방법과 인사이트</td><td>조건별 실험 데이터를 구조화해 편차가 큰 구간을 찾아냄</td></tr>
<tr><td><strong>품질·공정기술직</strong></td><td>표준화와 재발 방지 과정</td><td>SOP를 만들어 같은 문제가 반복되지 않게 함</td></tr>
<tr><td><strong>R&amp;D PM</strong></td><td>문제 정의, 협업, 일정·의사결정</td><td>편차를 과제 리스크로 정의하고 팀 합의로 표준을 적용함</td></tr>
<tr><td><strong>연구기획·QA·인허가(전환 직무)</strong></td><td>문서화, 기준 수립, 이해관계자 조율</td><td>실험 기준을 SOP로 문서화하고 팀·외부기관과 합의된 표준으로 운영함</td></tr>
</tbody></table></div>

<h3>3.2 STAR 구조화</h3>
<p>STAR는 경험을 상황 → 과제 → 행동 → 결과로 구조화하는 방법</p>
<aside class="star-framework">
<div><strong><span>S</span> | Situation</strong><p>어떤 상황과 문제가 있었나요?</p></div>
<div><strong><span>T</span> | Task</strong><p>그 상황에서 내가 맡은 역할과 해결해야 했던 과제는 무엇인가요?</p></div>
<div><strong><span>A</span> | Action</strong><p>문제를 해결하기 위해 <b>내가 직접 한 행동</b>은 무엇인가요? 어떤 기술·장비·방법을 사용했고, 왜 그렇게 판단했나요?</p></div>
<div><strong><span>R</span> | Result</strong><p>그 결과 어떤 변화가 있었나요? <b>확인 가능한 증거</b>와 팀·후속 연구로의 <b>확산(Impact)</b>까지 적음</p></div>
</aside>
<p>가장 중요한 부분은 Action으로 ‘우리 팀이 했다’보다 내가 무엇을 판단하고 무엇을 수행했는지가 드러나야 함</p>
<aside class="result-evidence"><strong>Result를 증거로 바꾸는 질문</strong><ul><li>전후를 비교할 수 있는 지표가 있는가? (편차·CV, 재실험 횟수, 소요 기간, 샘플 처리량)</li><li>결과가 문서·시스템으로 남았는가? (SOP, 보고서, 특허, 논문, 학회 발표)</li><li>몇 명·몇 개 과제에 적용되었는가?</li><li>내부 수상·포상, 후속 과제·역할 확대로 이어졌는가?</li><li>수치가 기억나지 않으면 지어내지 말고 ‘정성 결과 + 확인 가능한 산출물’로 씀</li></ul></aside>

<h4 class="practice-title"><span>✍️</span> [실습 4] 대표 프로젝트 STAR 작성하기</h4>
<p>3.1 직무별 강조점을 참고해, 실습 3에서 여러 역량의 근거로 반복된 Inventory 행(경험) 안에서 JD 요구에 직접 대응하는 구체적인 프로젝트 1건을 골라 STAR로 구조화</p>
<p>Inventory의 한 행은 회사·역할 단위라 여러 일이 섞여 있을 수 있으므로, 그중 문제·행동·결과가 하나로 이어지는 장면 하나만 골라 한 줄로 적었던 ‘내가 한 일’은 판단 근거가 드러나는 Action으로, ‘결과/성과’는 증거와 확산이 있는 Result로 확장하며, 다른 행에 적은 수상·발표처럼 같은 프로젝트에서 나온 성과는 Result에 함께 씀</p>
<p class="lesson-note">※ 완성 문장이 아니어도 됨. 칸마다 키워드나 한두 줄이면 충분하며, 비어 있는 판단 근거와 증거는 실습 5 AI 인터뷰에서 채움</p>
<ol class="project-selection-list"><li><strong>대표 프로젝트/경험(기간 포함):</strong></li><li><strong>선정 이유(대응하는 JD 요구):</strong></li><li><strong>강조할 점(3.1 직무별 강조점 참고):</strong></li><li><strong>STAR 작성:</strong></li></ol>
<div class="table-wrap"><table class="lesson-table star-template"><thead><tr><th>STAR</th><th>작성 질문</th><th>나의 내용</th></tr></thead><tbody>
<tr><td><strong>Situation</strong></td><td>어떤 상황·문제가 있었는지<br>💡 문제 + 그 문제 때문에 무엇이 막혔는지(영향)까지 씀</td><td></td></tr>
<tr><td><strong>Task</strong></td><td>내 역할과 해결해야 할 과제는 무엇인지<br>💡 내 역할과 달성할 목표만 쓰고, 어떻게 했는지는 쓰지 않음</td><td></td></tr>
<tr><td><strong>Action</strong></td><td>내가 직접 한 행동·기술·판단 근거는 무엇인지<br>💡 ① 무엇을 ② 어떤 기술로 ③ 왜 그렇게 판단했는지, 주어는 ‘나’</td><td></td></tr>
<tr><td><strong>Result</strong></td><td>결과·증거·확산(Impact)은 무엇인지<br>💡 증거(전후 비교) → 확산(적용 범위) → 인정(수상·후속 과제) 순서로 씀</td><td></td></tr>
</tbody></table></div>

<details class="lesson-toggle sample-toggle"><summary>[실습 참고 🧍🏽‍♀️] 김서연의 대표 프로젝트 STAR</summary><div class="toggle-body">
<ol class="sample-project-meta"><li><strong>대표 프로젝트/경험</strong><br>Inventory [6] 3차 회사 연구 프로젝트 운영 중 실험 프로토콜 표준화 (2024.03~2024.12 / 배경: [3] 1차 회사 재현성 개선 경험 2019.09~2020.03)</li><li><strong>선정 이유</strong><br>목표 JD가 ‘경력 5년+, Project Leader’를 요구하므로 주니어 시절의 단일 개선보다 개인의 문제해결이 팀 표준으로 확산된 경험을 대표로 선정함. 이 경험은 Project Leader로 과제 전체를 직접 리딩한 근거가 아니라, 연구 프로젝트 운영·팀 실험 기준 확정·SOP 표준 확산 역량의 근거이며, 효능·기전 판단에 쓰이는 데이터의 신뢰성을 높인 인접 경험으로 JD의 Problem(작용기전 규명)을 지원함<br>[6]은 실습 3에서 ‘표준화’와 ‘협업·운영’ 2개 역량의 근거로 반복된 행이며, 같은 표준화 역량의 근거인 [3] 1차 재현성 개선은 Situation 배경으로, [11] 사내 수상은 Result의 인정으로 연결함</li><li><strong>강조할 점</strong><br>연구직(선임·책임) 기준으로 원인 분석 방법과 실험 설계 판단, 그리고 직접 리딩으로 과장하지 않고 개인의 개선을 팀 표준으로 확산한 과정</li><li><strong>STAR 작성</strong><br>※ STAR는 하나의 상황을 기준으로 쓰는 것이 원칙이므로 3차 회사 경험을 중심에 두고, 1차 경험은 Situation의 배경 한 줄로만 사용</li></ol>
<div class="table-wrap"><table class="lesson-table star-sample"><thead><tr><th>STAR</th><th>작성 질문</th><th>김서연의 내용</th></tr></thead><tbody>
<tr><td><strong>Situation</strong></td><td>어떤 상황·문제가 있었는지<br>💡 문제 + 그 문제 때문에 무엇이 막혔는지(영향)까지 씀</td><td>3차 회사(선임연구원)에서 연구원마다 실험 방식이 달라 반복 실험 결과의 편차가 팀 단위로 반복되고, 후보물질 효능·기전 비교 판단이 지연됨<br>배경: 1차 회사에서 비슷한 편차 문제의 원인을 직접 분석해 본 경험이 있음</td></tr>
<tr><td><strong>Task</strong></td><td>내 역할과 해결해야 할 과제는 무엇인지<br>💡 내 역할과 달성할 목표만 쓰고, 어떻게 했는지는 쓰지 않음</td><td>선임연구원으로서 팀 실험의 편차 원인을 규명하고, 팀 전체가 따르는 표준 프로토콜(SOP)을 만들어 적용해야 함</td></tr>
<tr><td><strong>Action</strong></td><td>내가 직접 한 행동·기술·판단 근거는 무엇인지<br>💡 ① 무엇을 ② 어떤 기술로 ③ 왜 그렇게 판단했는지, 주어는 ‘나’</td><td>① 팀원별 실험 단계 조건(세포 계대수, 처리 시점, 측정 시점)과 결과를 표로 정리하고 qPCR·Western blot 데이터를 GraphPad Prism으로 비교해 편차가 큰 구간을 찾음<br>② 판단: 실험 자원이 제한되어 모든 변수를 동시에 바꾸지 않고, 편차 기여도가 큰 조건부터 하나씩 통제하는 방식을 선택함<br>③ 1차 회사에서 익힌 원인 분석 방식을 적용해 SOP 초안을 작성하고, 데이터 리뷰 회의에서 팀원 피드백을 반영해 표준화함</td></tr>
<tr><td><strong>Result</strong></td><td>결과·증거·확산(Impact)은 무엇인지<br>💡 증거(전후 비교) → 확산(적용 범위) → 인정(수상·후속 과제) 순서로 씀</td><td>증거: 반복 실험 간 편차(CV)가 약 25% → 10% 이내로 감소하고 재실험 요청이 줄어듦<br>확산: 표준 SOP가 팀원 4명·2개 과제에 적용되고 신규 연구원 온보딩 자료로도 사용됨<br>인정: 2025.01 사내 우수 연구 개선상 수상<br>※ 수치는 수업용 가상 예시이며 실제 작성 시 확인 가능한 수치만 사용함</td></tr>
</tbody></table></div>
</div></details>`;
article.appendChild(section);

const table=section.querySelector('.star-template');
const wrap=table?.closest('.table-wrap');
if(table&&wrap){
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
    const html='<table>'+table.innerHTML+'</table>';
    try{
      if(navigator.clipboard&&window.ClipboardItem){
        await navigator.clipboard.write([new ClipboardItem({'text/plain':new Blob([plain],{type:'text/plain'}),'text/html':new Blob([html],{type:'text/html'})})]);
      }else throw new Error('fallback');
    }catch(error){
      const area=document.createElement('textarea');
      area.value=plain;area.style.position='fixed';area.style.opacity='0';document.body.appendChild(area);area.select();document.execCommand('copy');area.remove();
    }
    button.textContent='복사 완료';setTimeout(()=>button.textContent='표 복사',1400);
  });
}
})();
