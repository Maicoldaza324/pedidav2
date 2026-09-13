function goTo(id){
  const el=document.getElementById(id);
  if(el) el.scrollIntoView({behavior:"smooth",block:"start"});
}

function createHeart(){
  const heart=document.createElement("span");
  heart.className="heart";
  heart.textContent=Math.random()>.45?"♥":"♡";
  heart.style.left=(5+Math.random()*90)+"vw";
  heart.style.fontSize=(14+Math.random()*22)+"px";
  heart.style.animationDuration=(4.5+Math.random()*4)+"s";
  document.body.appendChild(heart);
  setTimeout(()=>heart.remove(),9000);
}

function sayYes(){
  const final=document.getElementById("final");
  final.classList.remove("hidden");
  setTimeout(()=>final.scrollIntoView({behavior:"smooth",block:"start"}),120);
  for(let i=0;i<65;i++) setTimeout(createHeart,i*45);
}

setInterval(()=>{
  if(document.visibilityState==="visible") createHeart();
},2200);
