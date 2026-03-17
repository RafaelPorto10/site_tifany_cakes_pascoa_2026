let slideAtual = 0;

const slides = document.querySelectorAll(".slide");
const indicadores = document.querySelectorAll(".indicadores span");

function mostrarSlide(index){

slides.forEach(slide => slide.classList.remove("ativo"));
indicadores.forEach(dot => dot.classList.remove("ativo"));

slides[index].classList.add("ativo");
indicadores[index].classList.add("ativo");

}

function proximo(){

slideAtual++;

if(slideAtual >= slides.length){
slideAtual = 0;
}

mostrarSlide(slideAtual);

}

function anterior(){

slideAtual--;

if(slideAtual < 0){
slideAtual = slides.length - 1;
}

mostrarSlide(slideAtual);

}

function irSlide(index){

slideAtual = index;

mostrarSlide(slideAtual);

}

/* CARROSSEL AUTOMÁTICO */

let auto = setInterval(proximo,5000);

/* LOADING */

window.addEventListener("load",()=>{

document.getElementById("loader").style.display="none";

});