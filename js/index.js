var hamburger = document.querySelector(".fa-solid");
var xMark = document.querySelector(".fa-xmark");
hamburger.addEventListener("click", function(){
  document.querySelector(".nav").classList.add("display");
})

xMark.addEventListener("click", function(){
  document.querySelector(".nav").classList.remove("display");
})
