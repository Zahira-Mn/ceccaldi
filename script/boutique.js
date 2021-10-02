
let imgs = document.querySelectorAll(".move__up");
let body = document.getElementById("body");

export function loading2(){
let load = document.querySelector(".loading");
let header = document.querySelector(".header");
  window.onload = function () {
    this.setTimeout(() => {
      load.style.display = "none";
    }, 2000);
    if(window.scrollY>0){
      header.classList.remove("produits");
    }
  };
}

export function scrollTop2(){

let header = document.querySelector(".header");

window.addEventListener("scroll", function () { 
  if (window.scrollY == 0) {
    header.classList.add("produits");  
  }
  else{
    header.classList.remove("produits"); 
  }
  
});
}

