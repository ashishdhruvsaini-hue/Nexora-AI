const screens=[...document.querySelectorAll('.screen')];
function show(id){screens.forEach(s=>s.classList.toggle('active',s.id===id));document.querySelectorAll('.nav').forEach(n=>n.classList.toggle('active',n.dataset.screen===id));}
document.querySelectorAll('.nav').forEach(n=>n.onclick=()=>show(n.dataset.screen));
document.querySelectorAll('.card').forEach(c=>c.onclick=()=>{show('chat');input.value=c.dataset.prompt;input.focus()});
document.querySelectorAll('[data-mode]').forEach(b=>b.onclick=()=>{show('chat');document.getElementById('modeLabel').textContent=b.dataset.mode+' Mode';});
document.getElementById('backBtn').onclick=()=>show('home');
const input=document.getElementById('input'), messages=document.getElementById('messages');
function add(text,who){const d=document.createElement('div');d.className='msg '+who;d.innerHTML=who==='ai'?'<b>Nexora</b><br>'+text:text;messages.appendChild(d);messages.scrollTop=messages.scrollHeight}
function demoReply(q){
  q=q.toLowerCase();
  if(q.includes('math')||q.includes('equation')||q.includes('algebra')) return "Let's solve it together 🧠<br><br>This is the demo version, so the AI brain isn't connected yet. Add your AI API through a secure backend and this chat can generate real step-by-step Maths solutions.";
  if(q.includes('science')||q.includes('physics')||q.includes('chemistry')||q.includes('biology')) return "Science mode activated 🔬<br><br>This prototype is ready for a real AI model connection. The production version should explain concepts at the student's level and distinguish established science from speculation.";
  if(q.includes('ncert')) return "📚 NCERT mode is ready. For reliable textbook answers, connect a trusted NCERT knowledge base/RAG system rather than asking the model to invent textbook content.";
  return "Nice question! 🚀 This is the Nexora prototype. Connect your AI backend to turn this demo response into a real tutor.";
}
function send(){const q=input.value.trim();if(!q)return;add(q,'user');input.value='';setTimeout(()=>add(demoReply(q),'ai'),450)}
document.getElementById('send').onclick=send;input.addEventListener('keydown',e=>{if(e.key==='Enter')send()});
document.querySelectorAll('[data-level]').forEach(b=>b.onclick=()=>{const l=b.dataset.level;document.getElementById('practiceBox').innerHTML=`<b>${l} Practice 🔥</b><br><br>Prototype question:<br><br><b>If a number is multiplied by 5 and then 10 is added, the result is 35. What is the number?</b><br><br><button onclick="this.parentElement.innerHTML='<b>Answer: 5 🎯</b><br><br>5 × 5 + 10 = 35. Great job!'">Show answer</button>`});
document.getElementById('themeBtn').onclick=()=>document.body.classList.toggle('dark');