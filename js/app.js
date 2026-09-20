/* =========================================================
   CND Quiz — moteur de l'application
   ========================================================= */
'use strict';

/* ── Identifiants stables ──────────────────────────────── */
(function(){ const n={}; QUESTIONS.forEach(q=>{ n[q.c]=(n[q.c]||0); q.id=q.c+'-'+n[q.c]++; }); })();
const QBY = {}; QUESTIONS.forEach(q=>QBY[q.id]=q);
const CH = {}; CHAPTERS.forEach(c=>CH[c.id]=c);

/* ── Constantes de jeu ─────────────────────────────────── */
const KEY = 'cnd_quiz_v1';
const BOXES = [10*60e3, 24*36e5, 3*24*36e5, 7*24*36e5, 16*24*36e5, 40*24*36e5];
const BADGES = [
  {id:'first',  em:'🌱', t:'Premier pas',      d:'1 question'},
  {id:'c100',   em:'💯', t:'Centurion',        d:'100 réponses'},
  {id:'c250',   em:'🚀', t:'Marathonien',      d:'250 réponses'},
  {id:'combo10',em:'🔥', t:'Série de 10',      d:'10 d’affilée'},
  {id:'combo25',em:'⚡', t:'Série de 25',      d:'25 d’affilée'},
  {id:'exam16', em:'🎖️', t:'Mention',          d:'16/20 à un examen'},
  {id:'perfect',em:'👑', t:'Sans faute',       d:'100 % à un examen'},
  {id:'rev50',  em:'🔁', t:'Réviseur',         d:'50 révisions'},
  {id:'days3',  em:'📅', t:'Assidu',           d:'3 jours de suite'},
  {id:'seenall',em:'🗺️', t:'Explorateur',      d:'Toutes les questions vues'},
  {id:'m-c1',   em:'🔍', t:'Intro & défauts',  d:'Chapitre maîtrisé'},
  {id:'m-c2',   em:'💧', t:'Ressuage',         d:'Chapitre maîtrisé'},
  {id:'m-c3',   em:'📡', t:'Ultrasons',        d:'Chapitre maîtrisé'},
  {id:'m-c4',   em:'🧲', t:'Magnétoscopie',    d:'Chapitre maîtrisé'},
  {id:'m-c5',   em:'⚡', t:'Foucault',         d:'Chapitre maîtrisé'},
  {id:'m-c6',   em:'🌡️', t:'Thermographie',    d:'Chapitre maîtrisé'},
  {id:'m-c7',   em:'🧠', t:'Synthèse',         d:'Chapitre maîtrisé'}
];

/* ── État persistant ───────────────────────────────────── */
let S = load();
function blank(){ return {xp:0, q:{}, badges:[], sessions:[], revCount:0, day:{last:null,streak:0}, snd:true, theme:'dark', plan:{}}; }
function load(){ try{ const o=JSON.parse(localStorage.getItem(KEY)); return o&&o.q? Object.assign(blank(),o) : blank(); }catch(e){ return blank(); } }
function save(){ try{ localStorage.setItem(KEY, JSON.stringify(S)); }catch(e){} }
function qs(id){ return S.q[id] || (S.q[id]={seen:0,ok:0,ko:0,box:0,due:0,lastKo:false}); }

/* ── Niveaux ───────────────────────────────────────────── */
const xpFor = L => 40*L*(L+1);                 // XP cumulé requis pour atteindre le niveau L+1
function levelOf(xp){ let L=1; while(xp >= xpFor(L)) L++; return L; }
function levelBounds(xp){ const L=levelOf(xp); return {L, lo: L>1? xpFor(L-1):0, hi: xpFor(L)}; }

/* ── Outils ────────────────────────────────────────────── */
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const shuffle = a => { a=a.slice(); for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0; [a[i],a[j]]=[a[j],a[i]];} return a; };
const esc = t => String(t).replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));
const pct = (a,b) => b? Math.round(a/b*100) : 0;
const el = (tag,cls,html) => { const e=document.createElement(tag); if(cls)e.className=cls; if(html!=null)e.innerHTML=html; return e; };
const today = () => new Date().toISOString().slice(0,10);

/* ── Son ───────────────────────────────────────────────── */
let AC=null;
function tone(f,d,type='sine',vol=.09,t0=0){
  if(!S.snd) return;
  try{
    AC = AC || new (window.AudioContext||window.webkitAudioContext)();
    const o=AC.createOscillator(), g=AC.createGain(), t=AC.currentTime+t0;
    o.type=type; o.frequency.setValueAtTime(f,t);
    g.gain.setValueAtTime(0,t); g.gain.linearRampToValueAtTime(vol,t+.012);
    g.gain.exponentialRampToValueAtTime(.0001,t+d);
    o.connect(g); g.connect(AC.destination); o.start(t); o.stop(t+d+.02);
  }catch(e){}
}
const sndOk   = () => { tone(659,.13,'triangle',.08); tone(880,.18,'triangle',.07,.08); };
const sndKo   = () => { tone(190,.20,'sawtooth',.05); tone(140,.24,'sawtooth',.045,.09); };
const sndLvl  = () => [523,659,784,1047].forEach((f,i)=>tone(f,.22,'triangle',.08,i*.09));
const sndClick= () => tone(420,.05,'square',.03);

/* ── Confettis ─────────────────────────────────────────── */
function confetti(n=90){
  const cv=$('#cfx'), ctx=cv.getContext('2d');
  cv.width=innerWidth; cv.height=innerHeight; cv.style.display='block';
  const cols=['#5eead4','#818cf8','#f472b6','#fbbf24','#34d399','#fb7185'];
  const P=[...Array(n)].map(()=>({x:Math.random()*cv.width, y:-20-Math.random()*cv.height*.4,
    vx:(Math.random()-.5)*3.4, vy:2+Math.random()*4, s:5+Math.random()*7,
    c:cols[Math.random()*cols.length|0], r:Math.random()*6, vr:(Math.random()-.5)*.28}));
  let f=0;
  (function step(){
    ctx.clearRect(0,0,cv.width,cv.height);
    P.forEach(p=>{ p.x+=p.vx; p.y+=p.vy; p.vy+=.055; p.r+=p.vr;
      ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.r); ctx.fillStyle=p.c;
      ctx.fillRect(-p.s/2,-p.s/2,p.s,p.s*.6); ctx.restore(); });
    if(++f<170) requestAnimationFrame(step);
    else { ctx.clearRect(0,0,cv.width,cv.height); cv.style.display='none'; }
  })();
}
let toastT;
function toast(msg){
  const t=$('#toast'); t.innerHTML=msg; t.classList.add('on');
  clearTimeout(toastT); toastT=setTimeout(()=>t.classList.remove('on'),2600);
}

/* ── En-tête ───────────────────────────────────────────── */
function renderHeader(){
  const b=levelBounds(S.xp);
  $('#lvlN').textContent=b.L;
  $('#lvlTxt').textContent='Niv.';
  $('#xpFill').style.width = ((S.xp-b.lo)/(b.hi-b.lo)*100)+'%';
  $('#xpNow').textContent = S.xp+' XP';
  $('#xpNext').textContent = 'niveau '+(b.L+1)+' à '+b.hi+' XP';
  $('#streakN').textContent = S.day.streak;
  $('#soundBtn').textContent = S.snd? '🔊':'🔇';
  $('#themeBtn').textContent = S.theme==='dark'? '🌙':'☀️';
}
function addXP(n){
  const before=levelOf(S.xp); S.xp+=n;
  const after=levelOf(S.xp);
  if(after>before){ sndLvl(); confetti(120); toast('🎉 Niveau '+after+' atteint !'); }
  renderHeader();
}

/* ── Badges ────────────────────────────────────────────── */
function chapStats(cid){
  const list=QUESTIONS.filter(q=>q.c===cid);
  let seen=0, ok=0, tot=0;
  list.forEach(q=>{ const r=S.q[q.id]; if(r&&r.seen){ seen++; ok+=r.ok; tot+=r.ok+r.ko; } });
  return {n:list.length, seen, acc:pct(ok,tot), tot};
}
function checkBadges(ctx={}){
  const got=new Set(S.badges), add=[];
  const give=id=>{ if(!got.has(id)){ got.add(id); add.push(id); } };
  const answered=Object.values(S.q).reduce((s,r)=>s+r.ok+r.ko,0);
  if(answered>=1) give('first');
  if(answered>=100) give('c100');
  if(answered>=250) give('c250');
  if((ctx.combo||0)>=10) give('combo10');
  if((ctx.combo||0)>=25) give('combo25');
  if(ctx.examNote>=16) give('exam16');
  if(ctx.examPerfect) give('perfect');
  if(S.revCount>=50) give('rev50');
  if(S.day.streak>=3) give('days3');
  if(Object.values(S.q).filter(r=>r.seen).length>=QUESTIONS.length) give('seenall');
  CHAPTERS.forEach(c=>{ const st=chapStats(c.id); if(st.seen>=Math.ceil(st.n*.8) && st.acc>=80) give('m-'+c.id); });
  if(add.length){
    S.badges=[...got]; save();
    add.forEach((id,i)=>setTimeout(()=>{ const b=BADGES.find(x=>x.id===id);
      toast(b.em+' Badge débloqué — <b>'+b.t+'</b>'); confetti(70); sndLvl(); }, i*1500));
  }
}

/* ── Streak quotidienne ────────────────────────────────── */
function touchDay(){
  const t=today();
  if(S.day.last===t) return;
  const y=new Date(Date.now()-864e5).toISOString().slice(0,10);
  S.day.streak = (S.day.last===y)? S.day.streak+1 : 1;
  S.day.last=t; save(); renderHeader();
}

/* ── Navigation ────────────────────────────────────────── */
function show(v){
  $$('.view').forEach(s=>s.classList.toggle('on', s.id==='v-'+v));
  $$('nav button').forEach(b=>b.classList.toggle('on', b.dataset.view===v));
  window.scrollTo({top:0,behavior:'instant'});
}

/* ── Accueil ───────────────────────────────────────────── */
function dueQuestions(){
  const now=Date.now();
  return QUESTIONS.filter(q=>{ const r=S.q[q.id]; return r && r.seen && r.due<=now; });
}
function renderHome(){
  const all=Object.values(S.q);
  const seen=all.filter(r=>r.seen).length;
  const ok=all.reduce((s,r)=>s+r.ok,0), tot=all.reduce((s,r)=>s+r.ok+r.ko,0);
  $('#totQ').textContent=QUESTIONS.length;
  $('#kSeen').textContent=seen+'/'+QUESTIONS.length;
  $('#kAcc').textContent= tot? pct(ok,tot)+'%' : '—';
  $('#kXp').textContent=S.xp;
  $('#kBadge').textContent=S.badges.length+'/'+BADGES.length;
  const d=dueQuestions().length;
  $('#dueTag').textContent = d? (d+' question'+(d>1?'s':'')+' à revoir →') : 'Rien à réviser pour l’instant';

  const cl=$('#chapList'); cl.innerHTML='';
  CHAPTERS.forEach(c=>{
    const st=chapStats(c.id), p=pct(st.seen,st.n), C=2*Math.PI*19;
    const b=el('button','chap');
    b.innerHTML=`<div class="ring">
        <svg viewBox="0 0 46 46"><circle class="bgc" cx="23" cy="23" r="19"></circle>
        <circle cx="23" cy="23" r="19" stroke="${c.col}" stroke-dasharray="${C}" stroke-dashoffset="${C*(1-p/100)}"></circle></svg>
        <em>${c.ic}</em></div>
      <div class="txt"><b>${c.n}. ${esc(c.t)}</b><small>${st.n} questions · ${st.seen} vues${st.tot?' · '+st.acc+'% de réussite':''}</small></div>
      <div class="pc" style="color:${c.col}">${p}%</div>`;
    b.onclick=()=>{ sndClick(); openSetup('learn',[c.id]); };
    cl.appendChild(b);
  });

  const bl=$('#badgeList'); bl.innerHTML='';
  BADGES.forEach(b=>{
    const got=S.badges.includes(b.id);
    bl.appendChild(el('div','badge'+(got?' got':''),
      `<span class="em">${b.em}</span><b>${esc(b.t)}</b><small>${esc(b.d)}</small>`));
  });
}

/* ── Écran de configuration ────────────────────────────── */
let cfg = {mode:'exam', chaps:[], count:20, timer:true, diff:0, malus:1/3};
function openSetup(mode, chaps){
  cfg.mode=mode;
  cfg.chaps = chaps && chaps.length? chaps.slice() : CHAPTERS.map(c=>c.id);
  cfg.count = mode==='learn'? 15 : 20;
  cfg.timer = mode==='exam';
  cfg.diff  = 0;
  cfg.malus = mode==='exam'? 1/3 : 0;
  const M={learn:['🎓 Apprentissage','Correction et explication après chaque question.'],
           exam:['⏱️ Examen blanc','Chrono, note sur 20, correction à la fin.'],
           review:['🔁 Révision intelligente','Les questions que tu dois revoir en priorité.']}[mode];
  $('#setupTitle').textContent=M[0]; $('#setupSub').textContent=M[1];

  const cc=$('#setChaps'); cc.innerHTML='';
  const allBtn=el('button','chip'+(cfg.chaps.length===CHAPTERS.length?' on':''),'Tous');
  allBtn.onclick=()=>{ cfg.chaps = cfg.chaps.length===CHAPTERS.length? [] : CHAPTERS.map(c=>c.id); drawSetup(); };
  cc.appendChild(allBtn);
  CHAPTERS.forEach(c=>{
    const b=el('button','chip', c.ic+' '+c.n+'. '+c.short);
    b.dataset.c=c.id;
    b.onclick=()=>{ sndClick();
      const i=cfg.chaps.indexOf(c.id);
      if(i<0) cfg.chaps.push(c.id); else cfg.chaps.splice(i,1);
      drawSetup(); };
    cc.appendChild(b);
  });
  const nc=$('#setCount'); nc.innerHTML='';
  [10,20,30,50,'Tout'].forEach(n=>{
    const b=el('button','chip', n==='Tout'? 'Tout':n+' questions'); b.dataset.n=n;
    b.onclick=()=>{ sndClick(); cfg.count = n==='Tout'? 9999 : n; drawSetup(); };
    nc.appendChild(b);
  });
  const tc=$('#setTimer'); tc.innerHTML='';
  [['Avec chrono',true],['Sans chrono',false]].forEach(([l,v])=>{
    const b=el('button','chip',l); b.dataset.t=v;
    b.onclick=()=>{ sndClick(); cfg.timer=v; drawSetup(); }; tc.appendChild(b);
  });
  const mc=$('#setMalus'); mc.innerHTML='';
  [['Sans pénalité',0],['− ⅓ par erreur',1/3],['− ½ par erreur',0.5]].forEach(([l,v])=>{
    const b=el('button','chip',l); b.dataset.m=v;
    b.onclick=()=>{ sndClick(); cfg.malus=v; drawSetup(); }; mc.appendChild(b);
  });
  const dc=$('#setDiff'); dc.innerHTML='';
  [['Toutes',0],['⭐ Bases',1],['⭐⭐ Intermédiaire',2],['⭐⭐⭐ Difficile',3]].forEach(([l,v])=>{
    const b=el('button','chip',l); b.dataset.d=v;
    b.onclick=()=>{ sndClick(); cfg.diff=v; drawSetup(); }; dc.appendChild(b);
  });
  drawSetup(); show('setup');
}
function poolFor(){
  let p = QUESTIONS.filter(q=>cfg.chaps.includes(q.c));
  if(cfg.diff) p=p.filter(q=>q.d===cfg.diff);
  if(cfg.mode==='review'){
    const now=Date.now();
    const due=p.filter(q=>{const r=S.q[q.id];return r&&r.seen&&r.due<=now;});
    const bad=p.filter(q=>{const r=S.q[q.id];return r&&r.lastKo;});
    const un =p.filter(q=>!S.q[q.id]||!S.q[q.id].seen);
    const set=new Set(); const out=[];
    [...due,...bad,...un].forEach(q=>{ if(!set.has(q.id)){set.add(q.id);out.push(q);} });
    p=out;
  }
  return p;
}
function drawSetup(){
  $$('#setChaps .chip').forEach(b=>{
    if(b.dataset.c) b.classList.toggle('on', cfg.chaps.includes(b.dataset.c));
    else b.classList.toggle('on', cfg.chaps.length===CHAPTERS.length);
  });
  $$('#setCount .chip').forEach(b=>b.classList.toggle('on', (b.dataset.n==='Tout'?9999:+b.dataset.n)===cfg.count));
  $$('#setTimer .chip').forEach(b=>b.classList.toggle('on', (b.dataset.t==='true')===cfg.timer));
  $$('#setDiff .chip').forEach(b=>b.classList.toggle('on', +b.dataset.d===cfg.diff));
  $$('#setMalus .chip').forEach(b=>b.classList.toggle('on', Math.abs(+b.dataset.m-cfg.malus)<1e-6));
  const showX = cfg.mode==='exam'? '' : 'none';
  $('#setMalus').style.display=showX; $('#lblMalus').style.display=showX;
  $('#setTimer').parentNode.querySelectorAll('.lbl')[2].style.display = cfg.mode==='exam'?'':'none';
  $('#setTimer').style.display = cfg.mode==='exam'?'':'none';
  const n=poolFor().length;
  const use=Math.min(n,cfg.count);
  $('#setupInfo').innerHTML = n? (use+' question'+(use>1?'s':'')+' sélectionnée'+(use>1?'s':'')+
      (cfg.mode==='exam'&&cfg.timer? ' · '+Math.round(use*45/60)+' min de chrono':'')) :
      '⚠️ Aucune question ne correspond à ces filtres.';
  $('#setupGo').disabled = n===0 || cfg.chaps.length===0;
}

/* ── Moteur de session ─────────────────────────────────── */
let SES=null;
function startSession(mode, chaps, count, opts={}){
  const old=cfg;
  cfg={mode, chaps:chaps||CHAPTERS.map(c=>c.id), count:count||20, timer:opts.timer!==false&&mode==='exam',
       diff:opts.diff||0, malus: opts.malus!==undefined? opts.malus : (mode==='exam'? 1/3 : 0)};
  let pool = opts.pool || poolFor();
  if(!pool.length){ toast('Aucune question disponible.'); cfg=old; return; }
  if(mode!=='review') pool=shuffle(pool);
  pool=pool.slice(0, Math.min(cfg.count, pool.length));
  SES={mode, list:pool, i:0, answers:[], combo:0, maxCombo:0, xp:0, step:opts.step||null,
       t0:Date.now(), limit: cfg.timer? pool.length*45 : 0, tick:null};
  touchDay();
  if(SES.limit){ $('#qTimer').style.display=''; startTimer(); } else $('#qTimer').style.display='none';
  show('quiz'); renderQ();
}
function startTimer(){
  clearInterval(SES.tick);
  SES.tick=setInterval(()=>{
    const left=SES.limit-Math.floor((Date.now()-SES.t0)/1000);
    const m=Math.max(0,Math.floor(left/60)), s=Math.max(0,left%60);
    const T=$('#qTimer'); T.textContent=String(m).padStart(2,'0')+':'+String(s).padStart(2,'0');
    T.classList.toggle('warn', left<=30);
    if(left<=0){ clearInterval(SES.tick); toast('⏰ Temps écoulé !'); finish(); }
  },250);
}

/* ── Rendu d'une question ──────────────────────────────── */
let CUR=null;
function renderQ(){
  const q=SES.list[SES.i];
  $('#progFill').style.width=(SES.i/SES.list.length*100)+'%';
  $('#qCount').textContent=(SES.i+1)+'/'+SES.list.length;
  const ch=CH[q.c];
  const card=$('#qCard'); card.innerHTML='';
  CUR={q, answered:false, sel:null, multi:new Set(), pairs:{}, active:null, order:null, map:null, place:{}, wact:null};

  card.appendChild(el('div','qmeta',
    `<span class="pill" style="color:${ch.col}">${ch.ic} ${ch.n}. ${esc(ch.short)}</span>
     <span class="pill d${q.d}">${'⭐'.repeat(q.d)}</span>
     <span class="pill">${({qcm:'Choix unique',multi:'Choix multiples',vf:'Vrai / Faux',match:'Associations',order:'Remise en ordre',label:'Placer les mots'})[q.t]}</span>`));
  card.appendChild(el('div','qtext', q.q));
  if(q.i && q.t!=='label'){
    const w=el('div','qimg',`<img src="assets/img/${q.i}.jpg" alt="Schéma du cours" loading="lazy">`);
    w.onclick=()=>openLB('assets/img/'+q.i+'.jpg');
    card.appendChild(w);
  }
  ({qcm:rQcm, vf:rVf, multi:rMulti, match:rMatch, order:rOrder, label:rLabel})[q.t](card,q);
  card.appendChild(el('div','btnrow',''));
  const row=card.querySelector('.btnrow');
  const bv=el('button','btn full','Valider'); bv.id='btnVal'; bv.disabled = q.t!=='order'; bv.onclick=()=>validate();
  row.appendChild(bv);
  if(q.t==='qcm'||q.t==='vf') bv.style.display='none';
  if(SES.mode==='exam' && cfg.malus>0){
    const bs=el('button','btn ghost','🤷 Je ne sais pas'); bs.id='btnSkip';
    bs.title='Aucun point, mais aucune pénalité';
    bs.onclick=()=>validate(true); row.appendChild(bs);
    bv.style.flex='2';
  }
}
function rQcm(card,q){
  const idx=shuffle(q.o.map((_,i)=>i)); CUR.map=idx;
  const box=el('div','opts');
  idx.forEach((oi,k)=>{
    const b=el('button','opt',`<span class="k">${k+1}</span><span>${q.o[oi]}</span>`);
    b.dataset.o=oi;
    b.onclick=()=>{ if(CUR.answered) return; CUR.sel=oi; sndClick();
      box.querySelectorAll('.opt').forEach(x=>x.classList.remove('sel'));
      b.classList.add('sel'); $('#btnVal').disabled=false;
      if(SES.mode!=='exam') validate(); else $('#btnVal').style.display='';
    };
    box.appendChild(b);
  });
  card.appendChild(box);
}
function rVf(card,q){
  CUR.map=[0,1];
  const box=el('div','opts');
  ['Vrai','Faux'].forEach((lab,oi)=>{
    const b=el('button','opt',`<span class="k">${oi+1}</span><span>${lab}</span>`);
    b.dataset.o=oi;
    b.onclick=()=>{ if(CUR.answered) return; CUR.sel=oi; sndClick();
      box.querySelectorAll('.opt').forEach(x=>x.classList.remove('sel'));
      b.classList.add('sel'); $('#btnVal').disabled=false;
      if(SES.mode!=='exam') validate(); else $('#btnVal').style.display='';
    };
    box.appendChild(b);
  });
  card.appendChild(box);
}
function rMulti(card,q){
  const idx=shuffle(q.o.map((_,i)=>i)); CUR.map=idx;
  card.appendChild(el('p','', '<small style="color:var(--txt3)">Plusieurs réponses possibles.</small>'));
  const box=el('div','opts');
  idx.forEach((oi,k)=>{
    const b=el('button','opt',`<span class="k">${k+1}</span><span>${q.o[oi]}</span>`);
    b.onclick=()=>{ if(CUR.answered) return; sndClick();
      if(CUR.multi.has(oi)){ CUR.multi.delete(oi); b.classList.remove('sel'); }
      else { CUR.multi.add(oi); b.classList.add('sel'); }
      $('#btnVal').disabled = CUR.multi.size===0;
    };
    box.appendChild(b);
  });
  card.appendChild(box);
}
function rMatch(card,q){
  const L=shuffle(q.p.map((_,i)=>i)), R=shuffle(q.p.map((_,i)=>i));
  CUR.L=L; CUR.R=R;
  card.appendChild(el('p','', '<small style="color:var(--txt3)">Touche un élément à gauche, puis son correspondant à droite.</small>'));
  const g=el('div','match');
  const cl=el('div','mcol','<h5>Éléments</h5>'), cr=el('div','mcol','<h5>Correspondances</h5>');
  L.forEach(i=>{ const b=el('button','mitem',`<span class="num"></span><span>${q.p[i][0]}</span>`);
    b.dataset.l=i; b.onclick=()=>pickL(i,b); cl.appendChild(b); });
  R.forEach(j=>{ const b=el('button','mitem',`<span class="num"></span><span>${q.p[j][1]}</span>`);
    b.dataset.r=j; b.onclick=()=>pickR(j,b); cr.appendChild(b); });
  g.appendChild(cl); g.appendChild(cr); card.appendChild(g);
}
function pickL(i,b){
  if(CUR.answered) return; sndClick();
  if(CUR.pairs[i]!==undefined){ delete CUR.pairs[i]; }
  CUR.active = CUR.active===i? null : i;
  drawMatch();
}
function pickR(j,b){
  if(CUR.answered) return;
  const owner=Object.keys(CUR.pairs).find(k=>CUR.pairs[k]===j);
  if(owner!==undefined) delete CUR.pairs[owner];
  if(CUR.active===null){ sndClick(); drawMatch(); return; }
  CUR.pairs[CUR.active]=j; CUR.active=null; sndClick(); drawMatch();
}
function drawMatch(){
  const q=CUR.q, order=Object.keys(CUR.pairs);
  const num={}; order.forEach((k,n)=>num[k]=n+1);
  $$('#qCard .mitem').forEach(b=>{
    b.classList.remove('active','paired'); b.querySelector('.num').textContent='';
    if(b.dataset.l!==undefined){
      const i=b.dataset.l;
      if(CUR.active!==null && +i===CUR.active) b.classList.add('active');
      if(CUR.pairs[i]!==undefined){ b.classList.add('paired'); b.querySelector('.num').textContent=num[i]; }
    } else {
      const j=+b.dataset.r, o=order.find(k=>CUR.pairs[k]===j);
      if(o!==undefined){ b.classList.add('paired'); b.querySelector('.num').textContent=num[o]; }
    }
  });
  $('#btnVal').disabled = Object.keys(CUR.pairs).length < q.p.length;
}
function rOrder(card,q){
  CUR.order = shuffle(q.s.map((_,i)=>i));
  card.appendChild(el('p','', '<small style="color:var(--txt3)">Remets les étapes dans le bon ordre avec les flèches.</small>'));
  const box=el('div','order'); box.id='ordBox'; card.appendChild(box);
  drawOrder();
}
function drawOrder(){
  const q=CUR.q, box=$('#ordBox'); box.innerHTML='';
  CUR.order.forEach((oi,k)=>{
    const it=el('div','oitem',
      `<span class="num">${k+1}</span><span class="lbl">${q.s[oi]}</span>
       <span class="mv"><button data-u="${k}">▲</button><button data-d="${k}">▼</button></span>`);
    it.dataset.o=oi;
    box.appendChild(it);
  });
  box.querySelectorAll('[data-u]').forEach(b=>b.onclick=()=>{ const k=+b.dataset.u; if(k>0){ const a=CUR.order; [a[k-1],a[k]]=[a[k],a[k-1]]; sndClick(); drawOrder(); }});
  box.querySelectorAll('[data-d]').forEach(b=>b.onclick=()=>{ const k=+b.dataset.d; const a=CUR.order; if(k<a.length-1){ [a[k+1],a[k]]=[a[k],a[k+1]]; sndClick(); drawOrder(); }});
}

function rLabel(card,q){
  card.appendChild(el('p','','<small style="color:var(--txt3)">Touche une étiquette, puis la pastille correspondante sur le schéma.</small>'));
  const box=el('div','lbimg');
  const D=(typeof LABELDIM!=='undefined' && LABELDIM[q.i]) || null;
  const inner=el('div','lbinner',
    `<img src="assets/img/${q.i}.jpg" alt="Schéma à annoter"${D?` width="${D[0]}" height="${D[1]}"`:''}>`);
  if(D) inner.style.aspectRatio = D[0]+' / '+D[1];
  q.sp.forEach((s,k)=>{
    const p=el('button','pin', String(k+1));
    p.style.left=s.x+'%'; p.style.top=s.y+'%'; p.dataset.p=k;
    p.onclick=()=>placePin(k);
    inner.appendChild(p);
  });
  box.appendChild(inner); card.appendChild(box);
  card.appendChild(el('div','lbhint','↔ fais glisser le schéma pour le parcourir'));
  const words=shuffle(q.sp.map(s=>s.a).concat(q.w||[]));
  CUR.words=words;
  const wb=el('div','words');
  words.forEach((w,wi)=>{
    const b=el('button','word', `<span class="pn" style="display:none"></span><span>${w}</span>`);
    b.dataset.w=wi; b.onclick=()=>pickWord(wi);
    wb.appendChild(b);
  });
  card.appendChild(wb);
}
function pickWord(wi){
  if(CUR.answered) return; sndClick();
  const placed=Object.keys(CUR.place).find(k=>CUR.place[k]===wi);
  if(placed!==undefined){ delete CUR.place[placed]; CUR.wact=null; }
  else CUR.wact = CUR.wact===wi? null : wi;
  drawLabel();
}
function placePin(k){
  if(CUR.answered) return; sndClick();
  if(CUR.place[k]!==undefined){ delete CUR.place[k]; drawLabel(); return; }
  if(CUR.wact===null) return;
  CUR.place[k]=CUR.wact; CUR.wact=null; drawLabel();
}
function drawLabel(){
  const q=CUR.q;
  $$('#qCard .pin').forEach(p=>{
    const k=+p.dataset.p, has=CUR.place[k]!==undefined;
    p.classList.toggle('filled', has);
    p.classList.toggle('target', !has && CUR.wact!==null);
  });
  $$('#qCard .word').forEach(b=>{
    const wi=+b.dataset.w, k=Object.keys(CUR.place).find(x=>CUR.place[x]===wi);
    b.classList.toggle('active', CUR.wact===wi);
    b.classList.toggle('placed', k!==undefined);
    const pn=b.querySelector('.pn');
    if(k!==undefined){ pn.style.display=''; pn.textContent=(+k)+1; } else pn.style.display='none';
  });
  $('#btnVal').disabled = Object.keys(CUR.place).length < q.sp.length;
}

/* ── Validation ────────────────────────────────────────── */
function isCorrect(){
  const q=CUR.q;
  if(q.t==='qcm'||q.t==='vf') return CUR.sel===q.a;
  if(q.t==='multi'){ const a=new Set(q.a); return a.size===CUR.multi.size && [...a].every(x=>CUR.multi.has(x)); }
  if(q.t==='match') return q.p.every((_,i)=>CUR.pairs[i]===i);
  if(q.t==='order') return CUR.order.every((oi,k)=>oi===k);
  if(q.t==='label') return q.sp.every((s,k)=>CUR.words[CUR.place[k]]===s.a);
  return false;
}
function validate(skipped){
  if(CUR.answered) return;
  const q=CUR.q, good = skipped? false : isCorrect();
  CUR.answered=true;

  const r=qs(q.id); r.seen++;
  if(good){ r.ok++; r.lastKo=false; r.box=Math.min(r.box+1,BOXES.length-1); }
  else    { r.ko++; r.lastKo=true;  r.box=0; }
  r.due=Date.now()+BOXES[r.box];
  if(SES.mode==='review') S.revCount++;

  if(good){ SES.combo++; SES.maxCombo=Math.max(SES.maxCombo,SES.combo); }
  else SES.combo=0;

  let gain=0;
  if(good){ gain = (SES.mode==='review'?7:10) + Math.min(SES.combo-1,5)*2; SES.xp+=gain; addXP(gain); }
  SES.answers.push({id:q.id, good, gain, skipped:!!skipped});

  // en examen : aucun retour visuel, on enchaîne directement
  if(SES.mode==='exam'){ sndClick(); save(); nextQ(); return; }

  // retour visuel
  const card=$('#qCard');
  if(q.t==='qcm'||q.t==='vf'){
    card.querySelectorAll('.opt').forEach(b=>{
      const oi=+b.dataset.o; b.disabled=true;
      if(oi===q.a) b.classList.add('good');
      else if(oi===CUR.sel){ b.classList.add('wrong','shake'); }
    });
  } else if(q.t==='multi'){
    const A=new Set(q.a);
    card.querySelectorAll('.opt').forEach((b,k)=>{
      const oi=CUR.map[k]; b.disabled=true;
      if(A.has(oi)) b.classList.add('good');
      else if(CUR.multi.has(oi)) b.classList.add('wrong');
    });
  } else if(q.t==='match'){
    card.querySelectorAll('.mitem').forEach(b=>{
      b.disabled=true;
      if(b.dataset.l!==undefined){
        const i=+b.dataset.l;
        b.classList.add(CUR.pairs[i]===i?'good':'wrong');
        if(CUR.pairs[i]!==i) b.querySelector('span:last-child').innerHTML += ' <small style="opacity:.75">→ '+q.p[i][1]+'</small>';
      }
    });
  } else if(q.t==='label'){
    const key=el('div','lbkey');
    q.sp.forEach((s,k)=>{
      const mine=CUR.words[CUR.place[k]], ok=mine===s.a;
      const p=card.querySelector('.pin[data-p="'+k+'"]');
      p.classList.remove('filled','target'); p.classList.add(ok?'good':'wrong');
      key.appendChild(el('div', ok?'ok2':'ko2',
        `<span class="pn">${k+1}</span><span>${ok?'':'<s style="opacity:.6">'+esc(mine)+'</s> → '}<b>${esc(s.a)}</b></span>`));
    });
    card.querySelector('.words').style.display='none';
    card.querySelector('.lbhint').after(key);
    card.querySelectorAll('.word').forEach(b=>b.disabled=true);
  } else if(q.t==='order'){
    card.querySelectorAll('.oitem').forEach((it,k)=>{
      const oi=+it.dataset.o;
      it.classList.add(oi===k?'good':'wrong');
      if(oi!==k) it.querySelector('.lbl').innerHTML += ' <small style="opacity:.75">(place n°'+(oi+1)+')</small>';
    });
  }

  if(good){ sndOk(); if(SES.combo>=3) showCombo(SES.combo); } else sndKo();

  // explication détaillée (apprentissage et révision)
  const btn=$('#btnVal');
  {
    const fb=el('div','fb '+(good?'ok':'ko'),
      `<div class="hd2">${good?'✅ Bonne réponse'+(gain?' <span style="opacity:.8;font-size:.8rem">+'+gain+' XP</span>':''):'❌ Raté'}</div>
       <div class="exp">${q.e}</div>`);
    card.insertBefore(fb, btn.parentNode);
  }
  btn.style.display=''; btn.disabled=false;
  btn.textContent = (SES.i+1<SES.list.length)? 'Question suivante →' : 'Voir mon résultat →';
  btn.onclick=nextQ;
  btn.focus();
  save();
}
function showCombo(n){
  const c=$('#combo');
  c.innerHTML = (n>=10?'🔥🔥 ':'🔥 ')+'Série de '+n+' !';
  c.classList.add('on'); setTimeout(()=>c.classList.remove('on'),1400);
}
function nextQ(){
  SES.i++;
  if(SES.i>=SES.list.length) finish(); else renderQ();
}

/* ── Résultats ─────────────────────────────────────────── */
function finish(){
  if(SES.tick) clearInterval(SES.tick);
  const done=SES.answers.length, good=SES.answers.filter(a=>a.good).length;
  const skipped=SES.answers.filter(a=>a.skipped).length;
  const faux=done-good-skipped;
  const malus=(SES.mode==='exam')? (cfg.malus||0) : 0;
  const p=pct(good,done||1);
  const brut=done? (good/done*20):0;
  const note=done? Math.max(0,(good-faux*malus)/done*20):0;
  S.sessions.unshift({d:Date.now(), mode:SES.mode, good, total:done, chaps:cfg.chaps.slice(), note:+note.toFixed(1)});
  if(SES.step){ S.plan[SES.step]=true; }
  S.sessions=S.sessions.slice(0,40); save();
  checkBadges({combo:SES.maxCombo, examNote: SES.mode==='exam'? note:0, examPerfect: SES.mode==='exam'&&done>=10&&good===done});

  const col = p>=80? 'var(--ok)' : p>=50? 'var(--warn)' : 'var(--bad)';
  const C=2*Math.PI*70;
  const verdicts = p>=90?['🏆','Excellent — tu maîtrises.']:p>=75?['🎯','Très bien, quelques détails à consolider.']
    :p>=50?['📈','Correct, mais il reste du travail sur les points ci-dessous.']:['💪','Il faut relire les fiches puis recommencer — c’est normal au début.'];
  $('#scoreCard').innerHTML=`
    <div class="scoreRing">
      <svg viewBox="0 0 160 160"><circle class="bgc" cx="80" cy="80" r="70"></circle>
      <circle cx="80" cy="80" r="70" stroke="${col}" stroke-dasharray="${C}" stroke-dashoffset="${C*(1-p/100)}" style="transition:stroke-dashoffset 1.1s cubic-bezier(.2,.8,.2,1)"></circle></svg>
      <div><div class="val" style="color:${col}">${p}%</div><div class="sub">${good} / ${done}</div></div>
    </div>
    <div class="note">${verdicts[0]} Note : ${note.toFixed(1)} / 20</div>
    ${malus? `<div class="verdict" style="font-size:.84rem">${good} bonne${good>1?'s':''} · ${faux} fausse${faux>1?'s':''} · ${skipped} abstention${skipped>1?'s':''}
       — barème −${malus===0.5?'½':'⅓'} par erreur${Math.abs(brut-note)>0.05?` (sans pénalité : ${brut.toFixed(1)}/20)`:''}</div>`:''}
    <div class="verdict">${verdicts[1]}</div>
    <div class="gain">✨ +${SES.xp} XP${SES.maxCombo>=3? ' · 🔥 meilleure série : '+SES.maxCombo:''}</div>`;
  if(p>=80) setTimeout(()=>confetti(150),250);

  const rl=$('#revList'); rl.innerHTML='';
  SES.answers.forEach((a,k)=>{
    const q=QBY[a.id];
    const d=el('div','rev'+(a.good?'':' open'));
    d.innerHTML=`<div class="rh"><span class="ic">${a.good?'✅':(a.skipped?'⊘':'❌')}</span>
        <span><b>${k+1}.</b> ${q.q}</span></div>
      <div class="rb">${goodAnswerHTML(q)}<div style="margin-top:9px">${q.e}</div></div>`;
    d.querySelector('.rh').onclick=()=>d.classList.toggle('open');
    rl.appendChild(d);
  });
  const wrong=SES.answers.filter(a=>!a.good);
  $('#resAgain').style.display = wrong.length? '' : 'none';
  $('#resAgain').onclick=()=>{ startSession(SES.mode==='exam'?'learn':SES.mode, cfg.chaps, wrong.length,
      {pool: wrong.map(a=>QBY[a.id])}); };
  show('result'); renderHome(); renderStats(); renderPlan();
}
function goodAnswerHTML(q){
  if(q.t==='qcm') return '<b style="color:var(--ok)">Réponse : </b>'+q.o[q.a];
  if(q.t==='vf')  return '<b style="color:var(--ok)">Réponse : </b>'+(q.a===0?'Vrai':'Faux');
  if(q.t==='multi') return '<b style="color:var(--ok)">Réponses : </b>'+q.a.map(i=>q.o[i]).join(' · ');
  if(q.t==='match') return '<b style="color:var(--ok)">Associations : </b><br>'+q.p.map(p=>'• '+p[0]+' → '+p[1]).join('<br>');
  if(q.t==='order') return '<b style="color:var(--ok)">Ordre correct : </b><br>'+q.s.map((s,i)=>(i+1)+'. '+s).join('<br>');
  if(q.t==='label') return '<b style="color:var(--ok)">Légendes : </b><br>'+q.sp.map((s,i)=>(i+1)+'. '+s.a).join('<br>');
  return '';
}

/* ── Fiches de cours ───────────────────────────────────── */
function renderCourse(){
  const box=$('#courseList'); box.innerHTML='';
  CHAPTERS.forEach(c=>{
    const secs=COURSE[c.id]||[];
    const a=el('div','acc');
    a.innerHTML=`<button class="ah"><span class="em">${c.ic}</span>
        <span><span style="display:block">${c.n}. ${esc(c.t)}</span>
        <small style="font-weight:400;color:var(--txt3);font-size:.74rem">${esc(c.sub)}</small></span>
        <span class="ar">›</span></button><div class="ab"></div>`;
    const body=a.querySelector('.ab');
    secs.forEach(s=>{
      const f=el('div','fiche','<h4>'+esc(s.t)+'</h4>');
      if(s.img){ const w=el('div','fimg',`<img src="assets/img/${s.img}.jpg" alt="" loading="lazy">`);
        w.onclick=()=>openLB('assets/img/'+s.img+'.jpg'); f.appendChild(w); }
      f.insertAdjacentHTML('beforeend', s.h);
      body.appendChild(f);
    });
    const go=el('button','btn full','🎓 S’entraîner sur ce chapitre');
    go.style.marginTop='16px';
    go.onclick=()=>{ sndClick(); openSetup('learn',[c.id]); };
    body.appendChild(go);
    a.querySelector('.ah').onclick=()=>{ a.classList.toggle('open'); sndClick(); };
    box.appendChild(a);
  });
}


/* ── Plan de révision 4 jours × 1 h ────────────────────── */
const PLAN = [
 {t:"Les bases et le ressuage", ic:'🔍', steps:[
   {id:'d1a', m:10, l:"Lire les fiches des chapitres 1 et 2",        act:{k:'course', c:['c1','c2']}},
   {id:'d1b', m:20, l:"Apprentissage — chapitre 1 (30 questions)",   act:{k:'learn', c:['c1'], n:30}},
   {id:'d1c', m:17, l:"Apprentissage — chapitre 2 (25 questions)",   act:{k:'learn', c:['c2'], n:25}},
   {id:'d1d', m:13, l:"Examen blanc — chapitres 1 et 2 (15 questions)", act:{k:'exam', c:['c1','c2'], n:15}} ]},
 {t:"Ultrasons", ic:'📡', steps:[
   {id:'d2a', m:8,  l:"Révision intelligente — ce qui est dû",       act:{k:'review', n:15}},
   {id:'d2b', m:8,  l:"Lire la fiche du chapitre 3",                 act:{k:'course', c:['c3']}},
   {id:'d2c', m:29, l:"Apprentissage — chapitre 3 (40 questions)",   act:{k:'learn', c:['c3'], n:40}},
   {id:'d2d', m:13, l:"Examen blanc — chapitre 3 (15 questions)",    act:{k:'exam', c:['c3'], n:15}} ]},
 {t:"Magnétoscopie et courants de Foucault", ic:'🧲', steps:[
   {id:'d3a', m:8,  l:"Révision intelligente — ce qui est dû",       act:{k:'review', n:15}},
   {id:'d3b', m:8,  l:"Lire les fiches des chapitres 4 et 5",        act:{k:'course', c:['c4','c5']}},
   {id:'d3c', m:20, l:"Apprentissage — chapitre 4 (30 questions)",   act:{k:'learn', c:['c4'], n:30}},
   {id:'d3d', m:17, l:"Apprentissage — chapitre 5 (25 questions)",   act:{k:'learn', c:['c5'], n:25}},
   {id:'d3e', m:7,  l:"Examen blanc — chapitres 4 et 5 (10 questions)", act:{k:'exam', c:['c4','c5'], n:10}} ]},
 {t:"Thermographie, synthèse et examen général", ic:'🌡️', steps:[
   {id:'d4a', m:8,  l:"Révision intelligente — ce qui est dû",       act:{k:'review', n:15}},
   {id:'d4b', m:8,  l:"Lire les fiches des chapitres 6 et 7 (avantages / inconvénients)", act:{k:'course', c:['c6','c7']}},
   {id:'d4c', m:20, l:"Apprentissage — chapitre 6 (30 questions)",   act:{k:'learn', c:['c6'], n:30}},
   {id:'d4d', m:13, l:"Apprentissage — chapitre 7 (20 questions)",   act:{k:'learn', c:['c7'], n:20}},
   {id:'d4e', m:11, l:"Examen blanc général (15 questions)",         act:{k:'exam', c:CHAPTERS.map(c=>c.id), n:15}} ]}
];
function planSteps(){ return PLAN.flatMap(d=>d.steps); }
function planDone(id){ return !!S.plan[id]; }
function runStep(st){
  sndClick();
  const a=st.act;
  if(a.k==='course'){
    S.plan[st.id]=true; save(); renderPlan();
    show('course');
    $$('#courseList .acc').forEach((el2,i)=>el2.classList.toggle('open', a.c.includes(CHAPTERS[i].id)));
    const first=$$('#courseList .acc')[CHAPTERS.findIndex(c=>c.id===a.c[0])];
    if(first) setTimeout(()=>first.scrollIntoView({behavior:'smooth',block:'start'}),60);
    return;
  }
  if(a.k==='review'){
    const pool=poolReview();
    if(!pool.length){ toast('Rien à réviser pour l\u2019instant — enchaîne sur l\u2019étape suivante 🙂');
      S.plan[st.id]=true; save(); renderPlan(); return; }
    startSession('review', CHAPTERS.map(c=>c.id), Math.min(a.n,pool.length), {pool, step:st.id});
    return;
  }
  startSession(a.k, a.c, a.n, {timer:a.k==='exam', malus:a.k==='exam'?1/3:0, step:st.id});
}
function renderPlan(){
  const box=$('#planList'); if(!box) return;
  const all=planSteps(), done=all.filter(s=>planDone(s.id)).length;
  $('#planPct').textContent=pct(done,all.length)+' %';
  const cur=PLAN.findIndex(d=>d.steps.some(s=>!planDone(s.id)));
  $('#planDay').textContent = cur<0? 'Terminé 🎉' : 'Jour '+(cur+1);
  box.innerHTML='';
  PLAN.forEach((d,i)=>{
    const nd=d.steps.filter(s=>planDone(s.id)).length, p=pct(nd,d.steps.length);
    const mins=d.steps.reduce((s,x)=>s+x.m,0);
    const acc=el('div','acc'+(i===cur?' open':''));
    acc.innerHTML=`<button class="ah"><span class="em">${d.ic}</span>
      <span><span style="display:block">Jour ${i+1} — ${esc(d.t)}</span>
      <small style="font-weight:400;color:var(--txt3);font-size:.74rem">${mins} min · ${nd}/${d.steps.length} fait${nd>1?'s':''}</small></span>
      <span style="margin-left:auto;display:flex;align-items:center;gap:9px">
        <span style="font-family:var(--fm);font-size:.8rem;font-weight:800;color:${p===100?'var(--ok)':'var(--txt3)'}">${p}%</span>
        <span class="ar">›</span></span></button><div class="ab"></div>`;
    const body=acc.querySelector('.ab');
    const tr=el('div','tr2','');
    tr.style.cssText='height:6px;border-radius:999px;background:var(--surf2);border:1px solid var(--line);overflow:hidden;margin:12px 0 4px';
    tr.innerHTML=`<i style="display:block;height:100%;width:${p}%;background:linear-gradient(90deg,var(--acc),var(--acc2));transition:width .6s"></i>`;
    body.appendChild(tr);
    d.steps.forEach(st=>{
      const ok=planDone(st.id);
      const row=el('div','pstep');
      row.innerHTML=`<button class="pchk${ok?' on':''}" title="Marquer fait">${ok?'✓':''}</button>
        <span class="ptxt"><b>${esc(st.l)}</b><small>${st.m} min</small></span>
        <button class="pgo">${ok?'Refaire':'Commencer'} →</button>`;
      row.querySelector('.pchk').onclick=()=>{ S.plan[st.id]=!ok; save(); renderPlan(); sndClick(); };
      row.querySelector('.pgo').onclick=()=>runStep(st);
      body.appendChild(row);
    });
    acc.querySelector('.ah').onclick=()=>{ acc.classList.toggle('open'); sndClick(); };
    box.appendChild(acc);
  });
  const note=el('div','tip');
  note.innerHTML='<b>La veille au soir, 10 min :</b> bouton <b>❌ Refaire mes erreurs</b> sur l\u2019accueil. C\u2019est le meilleur rapport temps / points gagnés.';
  note.style.marginTop='14px';
  box.appendChild(note);
}

/* ── Statistiques ──────────────────────────────────────── */
function renderStats(){
  const bars=$('#statBars'); bars.innerHTML='';
  CHAPTERS.forEach(c=>{
    const st=chapStats(c.id);
    const b=el('div','bar',
      `<div class="lb"><span>${c.ic} ${c.n}. ${esc(c.short)}</span>
        <b style="color:${c.col}">${st.tot? st.acc+'%':'—'} <span style="color:var(--txt3);font-weight:400">(${st.seen}/${st.n})</span></b></div>
       <div class="tr"><i style="width:${st.tot?st.acc:0}%;background:${c.col}"></i></div>`);
    bars.appendChild(b);
  });

  const weak=QUESTIONS.map(q=>({q, r:S.q[q.id]}))
    .filter(x=>x.r && x.r.ko>0)
    .sort((a,b)=>(b.r.ko-b.r.ok)-(a.r.ko-a.r.ok) || b.r.ko-a.r.ko)
    .slice(0,12);
  const wl=$('#weakList');
  if(!weak.length){ wl.innerHTML='<div class="empty">Aucune erreur enregistrée pour l’instant. Lance une session pour voir apparaître tes points faibles ici.</div>'; }
  else{
    wl.innerHTML='';
    weak.forEach(x=>{
      const d=el('div','weak',
        `<span class="n">${x.r.ko}✗</span><span><b style="color:${CH[x.q.c].col}">${CH[x.q.c].n}.</b> ${x.q.q}</span>`);
      d.style.cursor='pointer';
      d.onclick=()=>startSession('learn',[x.q.c],1,{pool:[x.q]});
      wl.appendChild(d);
    });
    const go=el('button','btn full','🎯 Rejouer ces '+weak.length+' questions');
    go.style.marginTop='14px';
    go.onclick=()=>startSession('learn', CHAPTERS.map(c=>c.id), weak.length, {pool:weak.map(x=>x.q)});
    wl.appendChild(go);
  }

  const hl=$('#histList');
  if(!S.sessions.length){ hl.innerHTML='<div class="empty">Aucune session terminée pour l’instant.</div>'; }
  else{
    hl.innerHTML='';
    S.sessions.slice(0,12).forEach(s=>{
      const p=pct(s.good,s.total), col=p>=80?'var(--ok)':p>=50?'var(--warn)':'var(--bad)';
      const nm={learn:'🎓 Apprentissage',exam:'⏱️ Examen',review:'🔁 Révision'}[s.mode]||s.mode;
      hl.appendChild(el('div','weak',
        `<span class="n" style="color:${col};border-color:${col};background:transparent">${p}%</span>
         <span>${nm} — ${s.good}/${s.total} · <span style="color:var(--txt3)">${new Date(s.d).toLocaleDateString('fr-FR',{day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit'})}</span></span>`));
    });
  }
}

/* ── Lightbox ──────────────────────────────────────────── */
function openLB(src){ const lb=$('#lightbox'); lb.querySelector('img').src=src; lb.classList.add('on'); }
$('#lightbox').onclick=()=>$('#lightbox').classList.remove('on');

/* ── Événements ────────────────────────────────────────── */
$$('nav button').forEach(b=>b.onclick=()=>{ sndClick(); show(b.dataset.view);
  if(b.dataset.view==='stats') renderStats(); if(b.dataset.view==='home') renderHome(); if(b.dataset.view==='plan') renderPlan(); });
$$('.mode').forEach(b=>b.onclick=()=>{ sndClick();
  const m=b.dataset.mode;
  if(m==='review'){
    const pool=poolReview();
    if(!pool.length){ toast('Rien à réviser : réponds d’abord à quelques questions 🙂'); return; }
    startSession('review', CHAPTERS.map(c=>c.id), Math.min(20,pool.length), {pool});
  } else openSetup(m);
});
function poolReview(){
  const now=Date.now();
  const due=QUESTIONS.filter(q=>{const r=S.q[q.id];return r&&r.seen&&r.due<=now;});
  const bad=QUESTIONS.filter(q=>{const r=S.q[q.id];return r&&r.lastKo;});
  const set=new Set(); const out=[];
  [...due,...bad].forEach(q=>{ if(!set.has(q.id)){set.add(q.id);out.push(q);} });
  return out;
}
$('#btnAll').onclick=()=>{ sndClick(); startSession('learn', CHAPTERS.map(c=>c.id), 30); };
$('#btnErr').onclick=()=>{ sndClick();
  const pool=QUESTIONS.filter(q=>{const r=S.q[q.id];return r&&r.lastKo;});
  if(!pool.length){ toast('Aucune erreur en attente — bien joué ! 🎉'); return; }
  startSession('learn', CHAPTERS.map(c=>c.id), Math.min(25,pool.length), {pool:shuffle(pool)});
};
$('#setupBack').onclick=()=>{ sndClick(); show('home'); };
$('#setupGo').onclick=()=>{ sndClick(); startSession(cfg.mode, cfg.chaps, cfg.count, {timer:cfg.timer, diff:cfg.diff, malus:cfg.malus}); };
$('#quitBtn').onclick=()=>{
  if(SES && SES.answers.length && !confirm('Quitter la session en cours ? Tes XP sont déjà enregistrés.')) return;
  if(SES && SES.tick) clearInterval(SES.tick);
  SES=null; save(); show('home'); renderHome(); renderStats();
};
$('#resHome').onclick=()=>{ sndClick(); show('home'); renderHome(); };
$('#themeBtn').onclick=()=>{ S.theme = S.theme==='dark'?'light':'dark';
  document.documentElement.dataset.theme=S.theme; save(); renderHeader(); sndClick(); };
$('#soundBtn').onclick=()=>{ S.snd=!S.snd; save(); renderHeader(); if(S.snd) sndOk(); };
$('#btnReset').onclick=()=>{ if(confirm('Effacer toute ta progression (XP, badges, historique) ?')){
  localStorage.removeItem(KEY); S=blank(); document.documentElement.dataset.theme=S.theme;
  renderHeader(); renderHome(); renderStats(); toast('Progression réinitialisée.'); } };

document.addEventListener('keydown', e=>{
  if(!$('#v-quiz').classList.contains('on')) return;
  if(e.key==='Enter'){ const b=$('#btnVal'); if(b && !b.disabled && b.style.display!=='none'){ e.preventDefault(); b.click(); } return; }
  const n=parseInt(e.key,10);
  if(n>=1 && n<=9 && !CUR.answered){
    const opts=$$('#qCard .opt');
    if(opts[n-1]) { opts[n-1].click(); e.preventDefault(); }
  }
});

/* ── Démarrage ─────────────────────────────────────────── */
document.documentElement.dataset.theme = S.theme;
if(typeof OWNER==='string' && OWNER){
  const g=$('#greet'); if(g) g.innerHTML='👋 Salut '+esc(OWNER)+' — ta révision CND';
  document.title='Quiz CND — '+OWNER;
}
// remise à zéro de la série quotidienne si un jour a été sauté
(function(){ if(S.day.last){ const y=new Date(Date.now()-864e5).toISOString().slice(0,10);
  if(S.day.last!==today() && S.day.last!==y) S.day.streak=0; } })();
renderHeader(); renderHome(); renderCourse(); renderStats(); renderPlan();
console.log('CND Quiz — '+QUESTIONS.length+' questions chargées.');
