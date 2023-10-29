var wall = document.querySelector(".wall");
var load = document.querySelector(".load");

function start(){
   wall.style.display = "block";
   load.style.display = "block";
   setTimeout(() =>{
    wall.style.display = "none";
    load.style.display = "none";
    document.querySelector("main").style.display = "none";
    document.querySelector(".rank").style.display = "grid";
    document.querySelector(".art").style.display = "none";
    document.querySelector(".voltar").style.display = "grid"
   }, 2000)
   
}
function voltar(){
    window.location.href = "/pages/jujutsuRank.html";
}