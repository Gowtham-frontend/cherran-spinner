const $=(s,c=document)=>c.querySelector(s),$$=(s,c=document)=>[...c.querySelectorAll(s)];
const reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
const fine=matchMedia('(hover:hover) and (pointer:fine)').matches;
const NUM='917373855777',MAIL='marketing@cheranspinnerlimited.com';
const IMGS=['machine','cones','knitting','spinning','winding'];
const F=(s)=>s.split(',');
const P=[
['Viscose Yarn','fibre','100% viscose, single and 2-ply, plus Vortex counts.',F('NE 6/1,10/1,12/1,16/1,20/1,24/1,27/1,30/1,36/1,40/1,60/1,2/16,2/20,2/24,2/30,2/40,2/60,20/1 Vortex,27/1 Vortex,30/1 Vortex,31/1 Vortex,40/1 Vortex')],
['Excel Yarn','fibre','100% Birla Excel yarn.',F('NE 20/1,24/1,30/1,40/1,2/20,2/24,2/30,2/40')],
['Lenzing Tencel / Lyocell','fibre','100% Lenzing Tencel (lyocell) yarn.',F('NE 7/1,10/1,20/1,24/1,25/1,30/1,40/1,3/15,2/20,3/20,2/24,3/25,2/30,2/40')],
['Lenzing Micro Modal','fibre','100% Lenzing Micro Modal yarn.',F('NE 30/1,40/1,60/1,2/60')],
['Lenzing Ecovero','fibre','100% Lenzing Ecovero yarn.',F('NE 20/1,30/1,36/1,40/1,60/1,2/30,2/40')],
['Liva Eco','fibre','100% Liva Eco yarn.',F('NE 20/1,24/1,27/1,30/1,36/1,40/1,60/1,2/30,2/40')],
['Bamboo Yarn','fibre','100% bamboo yarn.',F('NE 20/1,30/1,40/1,2/20,2/30,2/40')],
['Viscose / Linen (70/30)','fibre','Viscose and linen blended yarn.',F('NE 6/1,9/1,12/1,15/1,2/9,2/12,2/15')],
['Ring Yarn','special','Speciality ring-spun yarn.',[]],
['Compact Yarn','special','Speciality compact-spun yarn.',[]],
['Siro Compact Yarn','special','Speciality siro compact yarn.',[]],
['Vortex Yarn','special','Speciality vortex yarn; Vortex counts listed under Viscose.',[]],
['High Twist Yarn','special','Speciality high twist yarn.',[]],
['Slub Yarn','special','Speciality slub yarn.',[]],
['Multi-Ply Yarn (TFO)','value','Value-added multi-ply yarn via TFO.',[]],
['Sewing Thread','value','Value-added sewing thread.',[]],
['Gassed Yarn','value','Value-added gassed yarn.',[]],
['Mercerised Yarn','value','Value-added mercerised yarn.',[]],
['Hank Yarn','value','Value-added hank yarn.',[]]];
const grid=$('#grid'),sel=$('#yarnSel');
sel.innerHTML='<option value="">Select yarn type</option>'+P.map(p=>`<option>${p[0]}</option>`).join('');
function render(f='all'){
 grid.innerHTML=P.map((p,i)=>({p,i})).filter(o=>f=='all'||o.p[1]==f).map(({p,i},k)=>`
 <article class="pc tilt" style="animation-delay:${k*50}ms"><div class="im"><img loading="lazy" src="img/${IMGS[i%5]}.png" alt="Illustrative image for ${p[0]}"></div>
 <div class="bd"><h3>${p[0]}</h3><p>${p[2]}</p>${p[3].length?`<div class="counts">${p[3].map(c=>`<em>${c.replace(/^NE /,'')}</em>`).join('')}</div>`:''}
 <a class="btn" href="#enquiry" data-y="${p[0]}">Request a Quote</a></div></article>`).join('');
 bindTilt();
}
$('#filters').onclick=e=>{const b=e.target.closest('button');if(!b)return;$$('#filters button').forEach(x=>x.classList.toggle('on',x==b));render(b.dataset.f)};
grid.onclick=e=>{const a=e.target.closest('[data-y]');if(a)sel.value=a.dataset.y};
function bindTilt(){if(reduce||!fine)return;$$('.tilt').forEach(el=>{if(el._t)return;el._t=1;
 el.addEventListener('mousemove',e=>{const r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;el.style.transform=`rotateY(${x*14}deg) rotateX(${-y*14}deg) translateZ(10px)`});
 el.addEventListener('mouseleave',()=>el.style.transform='')})}
// 3D machinery ring
const R=[['machine','Winding / cone machinery'],['spinning','Spinning frame'],['cones','Finished yarn cones'],['winding','Cone processing'],['knitting','Quality inspection'],['machine','Yarn winding line']].slice(0,6);
$('#ring').innerHTML=R.map((r,i)=>`<figure style="--i:${i}"><img loading="lazy" src="img/${r[0]}.png" alt="${r[1]} (illustrative)"><figcaption>${r[1]}</figcaption></figure>`).join('');
// nav, progress, reveal, parallax
const nav=$('#nav'),menu=$('#menu'),bg=$('#burger');
addEventListener('scroll',()=>{nav.classList.toggle('s',scrollY>40);$('#progress').style.width=scrollY/(document.body.scrollHeight-innerHeight)*100+'%'},{passive:true});
addEventListener('keydown',e=>{if(e.key=='Escape'){menu.classList.remove('open');bg.setAttribute('aria-expanded',false)}});
bg.onclick=()=>{const o=menu.classList.toggle('open');bg.setAttribute('aria-expanded',o)};
menu.onclick=e=>{if(e.target.tagName=='A'){menu.classList.remove('open');bg.setAttribute('aria-expanded',false)}};
const sc=$('#scene');
if(!reduce&&fine)$('#home').addEventListener('mousemove',e=>{sc.style.setProperty('--ry',((e.clientX/innerWidth-.5)*-30)+'deg');sc.style.setProperty('--rx',((e.clientY/innerHeight-.5)*-12)+'deg')});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('on');$$('[data-n]',e.target).forEach(count);io.unobserve(e.target)}}),{threshold:.15});
$$('.rv').forEach(el=>io.observe(el));
function count(el){const t=+el.dataset.n,pre=el.dataset.pre||'',suf=el.dataset.suf||'',dec=t%1?1:0;let s=null;
 const step=ts=>{s=s||ts;const p=Math.min((ts-s)/1400,1);el.textContent=pre+(t*p).toFixed(dec).replace(/(\d)(?=(\d{3})+$)/,'$1')+suf;if(p<1&&!reduce)requestAnimationFrame(step);else el.textContent=pre+t+suf};requestAnimationFrame(step)}
// form
const form=$('#form'),st=$('#status');
function data(){const d=Object.fromEntries(new FormData(form));return d}
function valid(){let ok=true;$$('[required]',form).forEach(i=>{const bad=!i.value.trim()||(i.type=='email'&&!/^\S+@\S+\.\S+$/.test(i.value))||(i.name=='phone'&&i.value.replace(/\D/g,'').length<10)||(i.name=='qty'&&+i.value<5);i.classList.toggle('bad',bad);if(bad)ok=false});
 st.className='status '+(ok?'ok':'err');st.textContent=ok?'Opening WhatsApp with your enquiry. Please press send there to deliver it.':'Please correct the highlighted fields (valid email, 10-digit phone, quantity of 5 tonnes or more).';return ok}
const text=d=>`Enquiry – Cheran Spinner\nName: ${d.name}\nCompany: ${d.company}\nEmail: ${d.email}\nPhone: ${d.phone}\nYarn: ${d.yarn}\nCount: ${d.count}\nQuantity: ${d.qty} tonnes\nMessage: ${d.msg||'-'}`;
form.onsubmit=e=>{e.preventDefault();if(valid()){const u=`https://wa.me/${NUM}?text=${encodeURIComponent(text(data()))}`;if(!window.open(u,'_blank','noopener'))location.href=u}};
$('#mailBtn').onclick=e=>{e.preventDefault();if(valid()){st.textContent='Opening your email app. Please press send there to deliver it.';location.href=`mailto:${MAIL}?subject=${encodeURIComponent('Yarn enquiry')}&body=${encodeURIComponent(text(data()))}`}};
render();bindTilt();
