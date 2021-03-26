var wrap= document.querySelector(".wrapper")
var dragdam=0
var dragonEle= document.createElement("h1")

dragonEle.innerHTML= "Dragon Damage: "+dragdam

var userwinEle=document.createElement("h2")

function damagedealt(damage, type){
  if(type=="fire"){
    dragdam=dragdam +(damage-1);
  }
  if(type=="ice"){
    dragdam=dragdam +(damage+1)
  }
  if(type=="poison"){
    dragdam=dragdam + damage
  }
  dragonEle.innerHTML="Dragon Damage: "+dragdam;
  if(dragdam>=10){
    userwinEle.innerHTML="You Win"
  }
}
document.body.querySelector(".fireattack").addEventListener("click", function(){
  damagedealt(3,"fire")
})
document.body.querySelector(".iceattack").addEventListener("click", function(){
  damagedealt(1,"ice")
})
document.body.querySelector(".poisonattack").addEventListener("click", function(){
  damagedealt(4,"poison")
})

document.body.appendChild(dragonEle)
document.body.appendChild(userwinEle)