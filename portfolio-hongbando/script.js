(() => {
  document.documentElement.classList.add('js');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('.timeline article').forEach((el,i)=>el.style.setProperty('--delay', `${i * 160}ms`));
  function count(section) {
    section.querySelectorAll('[data-count]').forEach(el => {
      const target = Number(el.dataset.count);
      if (reduced) return;
      const start = performance.now();
      function frame(now) {
        const t = Math.min((now-start)/1100,1);
        el.textContent = Math.round(target * (1 - Math.pow(1-t,3)));
        if(t<1) requestAnimationFrame(frame);
      }
      requestAnimationFrame(frame);
    });
  }
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.add('visible');count(entry.target);observer.unobserve(entry.target);}
    }),{threshold:0.12});
    document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
  } else document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'));
  const art = document.querySelector('.chip-art');
  if(!reduced && matchMedia('(pointer: fine)').matches) {
    art.addEventListener('pointermove',e=>{const r=art.getBoundingClientRect();art.style.setProperty('--tx',`${(e.clientX-r.left-r.width/2)*.035}px`);art.style.setProperty('--ty',`${(e.clientY-r.top-r.height/2)*.035}px`);});
    art.addEventListener('pointerleave',()=>{art.style.setProperty('--tx','0px');art.style.setProperty('--ty','0px');});
  }
  const depthItems = document.querySelectorAll('.competencies>div,.project-brief,.flow details,.comparison,.metric-stack article,.support-grid article,.skills-grid article,.jd-fit');
  depthItems.forEach((el,i)=>{
    el.classList.add('depth-item');
    el.style.setProperty('--item-delay', `${(i % 3) * 110}ms`);
    if (!reduced && matchMedia('(pointer: fine)').matches) {
      el.addEventListener('pointermove', event=>{
        const box=el.getBoundingClientRect();
        el.style.setProperty('--ry', `${(event.clientX-box.left-box.width/2)/box.width*5}deg`);
        el.style.setProperty('--rx', `${-(event.clientY-box.top-box.height/2)/box.height*4}deg`);
      });
      el.addEventListener('pointerleave',()=>{el.style.setProperty('--ry','0deg');el.style.setProperty('--rx','0deg');});
    }
  });
  const flow = document.querySelector('.flow');
  const stages = [...flow.querySelectorAll('details')];
  let rollingIndex = 0, rollingTimer, flowVisible = false, hoverPaused = false, focusPaused = false, manualPauseUntil = 0, printing = false;
  function showStage(index) {
    rollingIndex = index;
    stages.forEach((stage,i)=>{stage.open = i === index;});
  }
  function scheduleStage() {
    clearTimeout(rollingTimer);
    if (reduced || !flowVisible || document.hidden || hoverPaused || focusPaused || printing) return;
    rollingTimer = setTimeout(()=>{
      if (Date.now() < manualPauseUntil) { scheduleStage(); return; }
      showStage((rollingIndex + 1) % stages.length);
      scheduleStage();
    }, 5000);
  }
  showStage(0);
  stages.forEach((stage,i)=>stage.querySelector('summary').addEventListener('click',()=>{
    rollingIndex = i;
    stages.forEach((other,k)=>{if(k!==i)other.open=false;});
    manualPauseUntil = Date.now() + 15000;
    scheduleStage();
  }));
  flow.addEventListener('pointerenter',()=>{hoverPaused=true;clearTimeout(rollingTimer);});
  flow.addEventListener('pointerleave',()=>{hoverPaused=false;scheduleStage();});
  flow.addEventListener('focusin',()=>{focusPaused=true;clearTimeout(rollingTimer);});
  flow.addEventListener('focusout',event=>{if(!flow.contains(event.relatedTarget)){focusPaused=false;scheduleStage();}});
  document.addEventListener('visibilitychange',scheduleStage);
  if ('IntersectionObserver' in window) {
    const rollingObserver = new IntersectionObserver(entries=>{
      flowVisible=entries[0].isIntersecting;scheduleStage();
    },{threshold:.2});
    rollingObserver.observe(flow);
  } else {flowVisible=true;scheduleStage();}
  addEventListener('beforeprint',()=>{printing=true;clearTimeout(rollingTimer);});
  addEventListener('afterprint',()=>{printing=false;scheduleStage();});
  const links = [...document.querySelectorAll('nav a')];
  let scheduled=false;
  function update(){scheduled=false;const max=document.documentElement.scrollHeight-innerHeight;document.querySelector('.progress').style.width=`${max>0?scrollY/max*100:0}%`;let active='';document.querySelectorAll('main section').forEach(section=>{if(section.getBoundingClientRect().top<180)active=section.id;});if(active==='results')active='process';links.forEach(a=>{const yes=a.hash===`#${active}`;a.classList.toggle('active',yes);if(yes)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});}
  addEventListener('scroll',()=>{if(!scheduled){scheduled=true;requestAnimationFrame(update);}},{passive:true});update();
  document.querySelectorAll('.print').forEach(button=>button.addEventListener('click',()=>window.print()));
  let previousDetails=[];
  addEventListener('beforeprint',()=>{previousDetails=[...document.querySelectorAll('.flow details')].map(el=>({el,open:el.open}));previousDetails.forEach(({el})=>el.open=true);document.querySelectorAll('[data-count]').forEach(el=>el.textContent=el.dataset.count);});
  addEventListener('afterprint',()=>previousDetails.forEach(({el,open})=>el.open=open));
})();
