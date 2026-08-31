// ================= EASY SETTINGS =================
const SETTINGS = {
  name: "Saanvi",
  title: "Get Well Soon Babe 😉",
  message: "Rest well, take care of yourself, and get better soon. 💗",
  from: "Aman ✨",
  tease: [
    "Hmm… that’s it? 😭 Try harder.",
    "Nice try 😂 You really thought it'd open that easily?",
    "Okay okay… ONE LAST TRY 👀"
  ]
};
// ===================================================

document.querySelector(".paper h2").textContent=SETTINGS.name;
document.querySelector(".paper h3").textContent=SETTINGS.title;
document.getElementById("mainMessage").textContent=SETTINGS.message;
document.querySelector(".from").textContent="— "+SETTINGS.from;

const area=document.getElementById("cardArea"), envelope=document.getElementById("envelope");
const btn=document.getElementById("tapBtn"), hint=document.getElementById("hint");
const sub=document.getElementById("sub"), final=document.getElementById("final");
let taps=0, opened=false;

function tryTap(){
  if(opened)return;
  taps++;
  if(taps<=3){
    envelope.classList.remove("shake"); void envelope.offsetWidth; envelope.classList.add("shake");
    hint.textContent=SETTINGS.tease[taps-1];
    sub.textContent=taps===3?"Okay… one more tap. 👀":"Nope. Not that easy 😌";
    btn.textContent=taps===3?"ONE LAST TRY 👀":"Tap & try harder 😂";
  }else{
    opened=true; area.classList.add("open"); btn.style.display="none";
    hint.textContent="Awww, finally 💗"; sub.textContent="";
    setTimeout(()=>final.classList.add("show"),1000);
    confetti();
  }
}
envelope.addEventListener("click",tryTap); btn.addEventListener("click",tryTap);
document.getElementById("again").onclick=()=>location.reload();

function confetti(){
  for(let i=0;i<45;i++){
    const s=document.createElement("span"); s.textContent=["💗","✨","🌸","♡"][i%4];
    s.style.position="fixed";s.style.left=(45+Math.random()*10)+"vw";s.style.top="45vh";
    s.style.fontSize=(12+Math.random()*18)+"px";s.style.zIndex=20;
    s.style.transition="transform 1.5s ease,opacity 1.5s ease";
    document.body.appendChild(s);
    requestAnimationFrame(()=>{s.style.transform=`translate(${(Math.random()-.5)*500}px,${(Math.random()-.5)*500}px) rotate(${Math.random()*500}deg)`;s.style.opacity=0});
    setTimeout(()=>s.remove(),1600);
  }
}
const p=document.querySelector(".particles");
for(let i=0;i<30;i++){const s=document.createElement("span");s.textContent=["♡","✦","🌸"][i%3];s.style.left=Math.random()*100+"vw";s.style.animationDuration=7+Math.random()*8+"s";s.style.animationDelay=-Math.random()*10+"s";p.appendChild(s)}
