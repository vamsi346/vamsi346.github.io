const menuBtn=document.getElementById("menuBtn");
const sidebar=document.getElementById("sidebar");
menuBtn.addEventListener("click",()=>sidebar.classList.toggle("open"));
document.querySelectorAll(".side-nav a").forEach(link=>link.addEventListener("click",()=>{document.querySelectorAll(".side-nav a").forEach(a=>a.classList.remove("active"));link.classList.add("active");sidebar.classList.remove("open");}));
const roles=["Computer Science Student","AI & ML Learner","Python Enthusiast"];
let roleIndex=0;const roleText=document.getElementById("roleText");
setInterval(()=>{roleIndex=(roleIndex+1)%roles.length;roleText.textContent=roles[roleIndex];},2400);
document.getElementById("analyseBtn").addEventListener("click",()=>{
 const fields=[...document.querySelectorAll(".mark")], values=fields.map(x=>Number(x.value)), result=document.getElementById("result");
 if(fields.some(x=>x.value.trim()==="")||values.some(x=>!Number.isFinite(x)||x<0||x>100)){result.textContent="Please enter a valid mark from 0 to 100 in every field.";return;}
 const total=values.reduce((a,b)=>a+b,0), avg=total/values.length, pass=values.every(x=>x>=35);
 let grade="F";if(avg>=90)grade="A+";else if(avg>=80)grade="A";else if(avg>=70)grade="B";else if(avg>=60)grade="C";else if(avg>=50)grade="D";
 result.textContent=`Total: ${total}/500 · Average: ${avg.toFixed(1)}% · Grade: ${grade} · Result: ${pass?"PASS":"FAIL"}`;
});