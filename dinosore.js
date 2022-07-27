let dino=document.getElementsByClassName("dino")[0];
let score=0;
let a=true;
let obstacle=document.querySelector('.obstacle');
let play=document.querySelector('button');
let audio=new Audio("action.mp3");
setTimeout(() => {
    audio.play();
}, 5000);
 let b=false;
 play.addEventListener('click',function(){
     b=!b;
     let m;
     if(b==true){
         if(!obstacle.classList.contains('obstacleani'))
        obstacle.classList.add('obstacleani');
        else{
            obstacle.style.webkitAnimationPlayState='running';
        }
      }
      else if(b==false){
          m=parseInt(getComputedStyle(obstacle).getPropertyValue('left'));
          obstacle.style.webkitAnimationPlayState='paused';
        //   obstacle.style.left=m+'px';
          
      }
      score=0;
 })

function scorecard(s){
    if(b==true)
document.getElementById("scorecont").innerHTML="your score: "+s;
}
document.addEventListener("keydown",function(event){
   // console.log("keycode is", event.key);
     
    if(event.key=="ArrowUp" && b){
        dino.classList.add("anim");
        setTimeout(() => {
            dino.classList.remove("anim");
        }, 700);

    }
    
    if(event.code=="ArrowRight" && b){
        let x=document.querySelector("#d");
      let x1=parseInt(window.getComputedStyle(x).getPropertyValue("left"));
      x.style.left=(x1+112)+"px";
    }
    if(event.code=="ArrowLeft" && b){
        let y=document.querySelector("#d");
      let y1=parseInt(window.getComputedStyle(y).getPropertyValue("left"));
    y.style.left=(y1-112)+"px";
    //   y.style.left=(y1-112)+"px";
    
    }

})
 
 setInterval(() => {
      let dino1=document.getElementsByClassName("dino")[0];
      let g=document.getElementById("gameover");
      
      let dx=parseInt(window.getComputedStyle(dino1).getPropertyValue("left"));
      
      let dy=parseInt(window.getComputedStyle(dino1).getPropertyValue("bottom"));
      let ox=parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
      let oy=parseInt(window.getComputedStyle(obstacle).getPropertyValue("bottom"));
       let offsetx=Math.abs(dx-ox);
       let offsety=Math.abs(dy-oy);
       
if(offsetx<100 &&offsety<90){
    obstacle.classList.remove("obstacleani");
    g.style.display="block";
    g.innerHTML="gameover-reload to play again";
   b=false;
   let y=document.querySelector("#d");
   y.style.left=10+"px";
   obstacle.style.left=85+'vw';
}
else if(offsetx<200 && a){
    
    score+=1;
scorecard(score);
a=false;
setTimeout(() => {
    a=true;
}, 1000);
}
if(score>0){
    let ob=document.querySelector(".obstacle");
   let o=parseFloat(window.getComputedStyle(ob,null).getPropertyValue("animation-duration"));
  o=o-0.01;
ob.style.animationDuration = o+'s';
// console.log(o);
}
    }, 100);


