AOS.init({
duration:1000,
once:true
});

tsParticles.load("particles",{
particles:{
number:{value:80},
move:{
enable:true,
speed:1
},
links:{
enable:true,
distance:150
},
opacity:{
value:.3
},
size:{
value:2
}
}
});

const glow = document.getElementById('cursor-glow');

document.addEventListener('mousemove',(e)=>{
glow.style.left=(e.clientX-200)+"px";
glow.style.top=(e.clientY-200)+"px";
});

const roles = [
"Fraud Detection Engineer",
"Agentic AI Developer",
"Data Scientist",
"Machine Learning Engineer",
"Data Engineer"
];

let roleIndex = 0;
let charIndex = 0;

function typeEffect(){

const target =
document.getElementById("typing");

if(charIndex < roles[roleIndex].length){

target.innerHTML +=
roles[roleIndex].charAt(charIndex);

charIndex++;

setTimeout(typeEffect,80);

}else{

setTimeout(()=>{
target.innerHTML="";
charIndex=0;

roleIndex =
(roleIndex+1)%roles.length;

typeEffect();
},2000);

}

}

typeEffect();

document.querySelectorAll('.counter')
.forEach(counter=>{

const target =
parseInt(counter.dataset.target);

let current = 0;

const update = ()=>{

current += Math.ceil(target/50);

if(current >= target){

counter.innerText = target;

}else{

counter.innerText = current;

requestAnimationFrame(update);

}

};

update();

});

document.getElementById('themeToggle')
?.addEventListener('click',()=>{

document.body.classList.toggle('light');

});