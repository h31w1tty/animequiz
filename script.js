function btnjujutsu() { //botao Home -> jujutsu rank
    window.location.href = "pages/jujutsuRank.html";
}
function btndbz() {//botao Home -> dragon ball rank
    window.location.href = "pages/dbzRank.html";
}
function home() {//botao rankAnime -> Home
    window.location.href = "/index.html";
}

var view = true;
function art(){
    if(view){
        viewoff();
        view = false;
    }
    else{
        viewon();
        view = true;
    }
}
function viewoff(){
    document.documentElement.requestFullscreen();
    document.querySelector("main").style.display = "none";
    document.querySelector("nav").style.display = "none";
}
function viewon(){
    document.exitFullscreen();
    document.querySelector("main").style.display = "flex";
    document.querySelector("nav").style.display = "flex";
}
