const CONFIG = {
  name: "Kate",
  introTitle: "Hoy pensé en ti",
  introSubtitle: "Y me dieron ganas de dejarte unas flores amarillas con algunas palabras que nacen desde la admiración y el cariño bonito.",
  tagline: "A veces la gente más tranquila es la que guarda la fuerza más inesperada.",
  gardenHint: "Aquí hay palabras de admiración, ternura y un toque de picardía sutil.",
  finalTitle: "Flores para una mujer admirable",
  finalMessage: "Kate:\nAdmiro esa mezcla tan tuya de calma, nobleza y fuerza.\nHas pasado momentos duros, y aun así conservas una sensibilidad muy bonita.\nEso se nota.\nNo quise dejarte un mensaje exagerado ni fingido; solo algo sincero:\nme pareces una mujer valiosa, de lindos sentimientos y con una luz que merece ser reconocida.",
  signature: "Con cariño y admiración 🌻",
  accent: "#d95b87",
  glow: "#f6d55f",
  musicVolume: 0.58,
  messages: [
    {kind:"poema", title:"Admiración", text:"Hay personas que llaman la atención por un momento,\ny otras que se quedan en la memoria\npor lo que transmiten.\nTú tienes un poco de ambas:\nuna dulzura que inspira confianza\ny una fuerza tranquila que despierta curiosidad."},
    {kind:"frase", title:"Sensibilidad", text:"Tu nobleza y la forma en que te entregas a los tuyos dicen mucho de la mujer que eres."},
    {kind:"frase", title:"Fortaleza", text:"Después de todo lo que has sostenido por tu familia, es imposible no admirar tu carácter."},
    {kind:"poema", title:"Esa parte tuya", text:"Tienes ese contraste curioso\nentre lo reservada que pareces\ny la fuerza con la que tomas lo que quieres.\nY sí,\nesa combinación tiene algo peligrosamente interesante."},
    {kind:"frase", title:"Ternura", text:"Tu cariño por los animales y por la gente que quieres habla de un corazón muy especial."},
    {kind:"frase", title:"Mirada", text:"A veces las personas calladas sorprenden más… quizá porque guardan más de lo que aparentan."},
    {kind:"poema", title:"Con cuidado", text:"No sé si estas flores alcanzan para decirlo,\npero hay algo muy bonito en verte seguir,\nrecomponerte\ny no perder esa esencia tierna que te hace tan tú."},
    {kind:"frase", title:"Sutileza", text:"No te digo nada demasiado grande; solo que me pareces una mujer que vale mucho la pena conocer."},
    {kind:"frase", title:"Picardía", text:"Lo elegante también puede tener su lado atrevido… y sospecho que tú entiendes bien esa mezcla."},
    {kind:"poema", title:"Detalle sincero", text:"A veces basta un detalle pequeño\npara hacerle saber a alguien que fue pensado con calma.\nHoy quise que lo supieras tú."}
  ]
};


const $ = (s) => document.querySelector(s);
const scenes = [...document.querySelectorAll(".scene")];
const data = CONFIG;

function hexToRgba(hex, alpha=1){
  const raw = hex.replace("#","");
  const full = raw.length === 3 ? raw.split("").map(c=>c+c).join("") : raw;
  const n = parseInt(full, 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function applyTheme(){
  document.documentElement.style.setProperty("--accent", data.accent);
  document.documentElement.style.setProperty("--accent-soft", hexToRgba(data.accent, .18));
  document.documentElement.style.setProperty("--glow", data.glow);
  document.documentElement.style.setProperty("--glow-soft", hexToRgba(data.glow, .20));
}

function applyCopy(){
  $("#introTitle").textContent = data.introTitle;
  $("#introSubtitle").textContent = data.introSubtitle;
  $("#nameTitle").textContent = data.name;
  $("#tagline").textContent = data.tagline;
  $("#gardenHint").textContent = data.gardenHint;
  $("#finalFor").textContent = data.name;
  $("#finalTitle").textContent = data.finalTitle;
  $("#finalMessage").textContent = data.finalMessage;
  $("#signature").textContent = data.signature;
}

function showScene(id){
  scenes.forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

let __flowerSvgCounter = 0;
function sunflowerSVG(size=140, petal="#f4c542", petal2="#f7de6d", center="#4b2c1d", seed="#674126"){
  const id = `sf_${__flowerSvgCounter++}`;
  const petalGrad = `${id}_petalGrad`;
  const centerGrad = `${id}_centerGrad`;
  const stemGrad = `${id}_stemGrad`;
  const leafGrad = `${id}_leafGrad`;
  const petalCount = 22;

  let petals = "";
  for(let i=0;i<petalCount;i++){
    const angle = i * (360/petalCount);
    petals += `<ellipse cx="80" cy="35" rx="12" ry="34" fill="url(#${petalGrad})" transform="rotate(${angle} 80 80)"/>`;
  }

  return `
  <svg viewBox="0 0 160 220" width="${size}" height="${size*1.2}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <radialGradient id="${petalGrad}" cx="50%" cy="35%" r="70%">
        <stop offset="0%" stop-color="${petal2}"/>
        <stop offset="72%" stop-color="${petal}"/>
        <stop offset="100%" stop-color="#d49a2a"/>
      </radialGradient>
      <radialGradient id="${centerGrad}" cx="45%" cy="40%" r="70%">
        <stop offset="0%" stop-color="#8a5a34"/>
        <stop offset="55%" stop-color="${seed}"/>
        <stop offset="100%" stop-color="${center}"/>
      </radialGradient>
      <linearGradient id="${stemGrad}" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stop-color="#699b37"/>
        <stop offset="100%" stop-color="#355519"/>
      </linearGradient>
      <linearGradient id="${leafGrad}" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stop-color="#89bc4a"/>
        <stop offset="100%" stop-color="#4d751f"/>
      </linearGradient>
    </defs>
    <g transform="translate(0,8)">
      <path d="M80 111 C83 140, 82 170, 82 206" stroke="url(#${stemGrad})" stroke-width="7" fill="none" stroke-linecap="round"/>
      <path d="M80 150 C55 141, 46 166, 73 167" fill="url(#${leafGrad})"/>
      <path d="M82 168 C109 156, 111 184, 90 186" fill="url(#${leafGrad})"/>
    </g>
    <g>
      ${petals}
      <circle cx="80" cy="80" r="33" fill="url(#${centerGrad})"/>
      ${Array.from({length:48}).map((_,i)=>{
        const a = i * 137.5 * Math.PI/180;
        const r = 3 + (i % 18) * 1.1;
        const x = 80 + Math.cos(a) * r;
        const y = 80 + Math.sin(a) * r;
        const rr = 1.8 + (i % 3) * .35;
        return `<circle cx="${x.toFixed(2)}" cy="${y.toFixed(2)}" r="${rr}" fill="#2d170e" opacity=".68"/>`;
      }).join("")}
      <circle cx="80" cy="80" r="36" fill="none" stroke="rgba(255,255,255,.16)" stroke-width="1.2"/>
    </g>
  </svg>`;
}

function placeHeroBouquet(targetId, final=false){
  const container = document.getElementById(targetId);
  container.innerHTML = "";
  const flowers = final ? [
    {left:"12%",bottom:"5%",size:115,rotate:-14,delay:"0s"},
    {left:"29%",bottom:"18%",size:135,rotate:-8,delay:".2s"},
    {left:"48%",bottom:"28%",size:152,rotate:0,delay:".1s"},
    {left:"66%",bottom:"18%",size:135,rotate:9,delay:".25s"},
    {left:"79%",bottom:"5%",size:112,rotate:15,delay:"0s"},
  ] : [
    {left:"6%",bottom:"4%",size:150,rotate:-15,delay:"0s"},
    {left:"18%",bottom:"18%",size:180,rotate:-9,delay:".2s"},
    {left:"33%",bottom:"7%",size:155,rotate:-4,delay:".45s"},
    {left:"46%",bottom:"28%",size:230,rotate:0,delay:".1s"},
    {left:"61%",bottom:"8%",size:160,rotate:6,delay:".35s"},
    {left:"74%",bottom:"18%",size:180,rotate:10,delay:".15s"},
    {left:"86%",bottom:"5%",size:145,rotate:16,delay:".3s"},
  ];

  flowers.forEach((f,i)=>{
    const wrap = document.createElement("div");
    wrap.className = "flower-wrap";
    wrap.style.left = f.left;
    wrap.style.bottom = f.bottom;
    wrap.style.transform = `rotate(${f.rotate}deg)`;
    wrap.style.animationDelay = f.delay;
    wrap.innerHTML = sunflowerSVG(f.size, i%2 ? "#f2bf37" : "#efc64a", i%2 ? "#ffea79" : "#f8de6b");
    container.appendChild(wrap);
  });
}

function placeGarden(){
  const field = $("#gardenField");
  field.innerHTML = "";

  const title = document.createElement("div");
  title.className = "garden-group-title";
  title.textContent = data.name;
  field.appendChild(title);

  const positions = [
    [12,24],[30,20],[48,22],[66,24],[84,21],
    [20,46],[39,43],[58,47],[76,45],
    [10,71],[29,68],[48,72],[69,69],[86,71]
  ];

  data.messages.forEach((msg,i)=>{
    const [x,y] = positions[i % positions.length];
    const btn = document.createElement("button");
    btn.className = "bloom";
    btn.style.left = `${x}%`;
    btn.style.top = `${y}%`;
    btn.type = "button";
    btn.innerHTML = `
      <div class="bloom-visual">${sunflowerSVG(96, i%2 ? "#f0be35" : "#f3c94d", i%2 ? "#f8df70" : "#fee88f")}</div>
      <span class="tiny-label">${msg.title}</span>
    `;
    btn.addEventListener("click",()=>openMessage(msg));
    field.appendChild(btn);
  });
}

function openMessage(msg){
  $("#modalTitle").textContent = msg.title;
  $("#modalBadge").textContent = msg.kind === "poema" ? "Pequeño poema" : "Mensaje";
  $("#modalText").textContent = msg.text;
  $("#modalFlower").innerHTML = sunflowerSVG(105, "#f2bf37", "#fee88f");
  $("#messageModal").classList.remove("hidden");
}
function closeMessage(){ $("#messageModal").classList.add("hidden"); }

$("#closeModal").addEventListener("click", closeMessage);
$("#messageModal").addEventListener("click", e => {
  if(e.target.id === "messageModal") closeMessage();
});

const audio = $("#bgMusic");
const musicBtn = $("#musicBtn");
let userPausedMusic = false;
let fadeTimer = null;
let audioFailed = false;

function clearFade(){
  if(fadeTimer){ clearInterval(fadeTimer); fadeTimer = null; }
}

function fadeVolume(target, duration=900){
  clearFade();
  const start = audio.volume;
  const diff = target - start;
  const steps = Math.max(1, Math.round(duration/40));
  let step = 0;
  fadeTimer = setInterval(()=>{
    step++;
    const p = Math.min(1, step/steps);
    const eased = 1 - Math.pow(1-p,3);
    audio.volume = Math.max(0, Math.min(1, start + diff*eased));
    if(p >= 1) clearFade();
  },40);
}

async function startMusic(){
  if(audioFailed || userPausedMusic) return;
  try{
    audio.volume = 0;
    await audio.play();
    musicBtn.classList.add("playing");
    musicBtn.title = "Pausar música";
    fadeVolume(data.musicVolume ?? .60, 2400);
  }catch(err){
    // Si falla, no interrumpe la experiencia.
    console.warn("No se pudo reproducir la música:", err);
  }
}

async function resumeMusic(){
  if(audioFailed) return;
  try{
    userPausedMusic = false;
    await audio.play();
    musicBtn.classList.add("playing");
    musicBtn.title = "Pausar música";
    fadeVolume(data.musicVolume ?? .60, 800);
  }catch(err){
    console.warn("No se pudo reanudar la música:", err);
  }
}

function pauseMusic(){
  if(audioFailed) return;
  userPausedMusic = true;
  fadeVolume(0,450);
  setTimeout(()=>{
    if(userPausedMusic){
      audio.pause();
      musicBtn.classList.remove("playing");
      musicBtn.title = "Reproducir música";
    }
  },520);
}

audio.addEventListener("error",()=>{
  audioFailed = true;
  musicBtn.classList.add("music-disabled");
  musicBtn.title = "No se encontró ./musica.mp3";
});

musicBtn.addEventListener("click", async ()=>{
  if(audioFailed) return;
  if(audio.paused || userPausedMusic) await resumeMusic();
  else pauseMusic();
});

$("#openBtn").addEventListener("click", ()=>{
  // La experiencia nunca depende de que el audio cargue.
  // Primero avanzamos la página y luego intentamos reproducir la música.
  showScene("reveal");
  startMusic();
});
$("#continueBtn").addEventListener("click", ()=>{
  placeGarden();
  showScene("garden");
});
$("#finalBtn").addEventListener("click", ()=>showScene("finale"));
$("#restartBtn").addEventListener("click", ()=>showScene("intro"));

document.addEventListener("visibilitychange",()=>{
  if(audioFailed || audio.paused) return;
  if(document.hidden) fadeVolume(.12,300);
  else if(!userPausedMusic) fadeVolume(data.musicVolume ?? .60,450);
});

/* fondo animado */
const canvas = $("#skyCanvas");
const ctx = canvas.getContext("2d");
let stars=[], petals=[], w=0, h=0;
const dpr = Math.min(devicePixelRatio || 1,2);

function makePetal(initial=false){
  return {
    x:Math.random()*w,
    y:initial?Math.random()*h:-20,
    s:Math.random()*.6+.3,
    drift:Math.random()*.8+.15,
    rot:Math.random()*Math.PI*2,
    vr:(Math.random()*.04+.01)*(Math.random()>.5?1:-1),
    size:Math.random()*8+5,
    hue:Math.random()>.75?52:46
  };
}
function resizeCanvas(){
  w=innerWidth; h=innerHeight;
  canvas.width=w*dpr; canvas.height=h*dpr;
  canvas.style.width=w+"px"; canvas.style.height=h+"px";
  ctx.setTransform(dpr,0,0,dpr,0,0);
  stars=Array.from({length:Math.min(90,Math.floor(w/14))},()=>({
    x:Math.random()*w,y:Math.random()*h,r:Math.random()*1.7+.4,
    a:Math.random()*.55+.08,vy:Math.random()*.12+.03
  }));
  petals=Array.from({length:Math.min(24,Math.floor(w/36))},()=>makePetal(true));
}
function drawPetal(p){
  ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot);
  ctx.fillStyle=p.hue===52?"rgba(255,231,142,.72)":"rgba(245,205,88,.78)";
  ctx.beginPath();
  ctx.moveTo(0,-p.size*.8);
  ctx.quadraticCurveTo(p.size*.9,-p.size*.2,p.size*.55,p.size*.9);
  ctx.quadraticCurveTo(0,p.size*.55,-p.size*.55,p.size*.9);
  ctx.quadraticCurveTo(-p.size*.9,-p.size*.2,0,-p.size*.8);
  ctx.fill(); ctx.restore();
}
function frame(){
  ctx.clearRect(0,0,w,h);
  for(const s of stars){
    s.y-=s.vy;
    if(s.y<-6){s.y=h+6;s.x=Math.random()*w}
    ctx.beginPath(); ctx.fillStyle=`rgba(244,210,91,${s.a})`;
    ctx.arc(s.x,s.y,s.r,0,Math.PI*2); ctx.fill();
  }
  for(const p of petals){
    p.y+=p.s; p.x+=Math.sin(p.y*.012)*p.drift; p.rot+=p.vr;
    if(p.y>h+30) Object.assign(p,makePetal(false));
    drawPetal(p);
  }
  requestAnimationFrame(frame);
}
addEventListener("resize",resizeCanvas);
resizeCanvas(); frame();

applyTheme();
applyCopy();
placeHeroBouquet("heroBouquet");
placeHeroBouquet("finalBouquet", true);
