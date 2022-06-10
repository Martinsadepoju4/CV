
var firstDropdownButton = document.querySelector(".dropdown-button-1");
document.addEventListener("click", function(event){
  var dropdown1Content = document.querySelector(".dropdown-contents-1");
  if (event.target.classList.contains("dropdown-button-1")) {
    dropdown1Content.classList.toggle("show");
    document.querySelector(".dropdown-logo-1").classList.toggle("rotate-arrow")
  }else{
    dropdown1Content.classList.remove("show")
    document.querySelector(".dropdown-logo-1").classList.remove("rotate-arrow")
  }
})
var secondDropdownButton = document.querySelector(".dropdown-button-2");
document.addEventListener("click", function(){
var dropdown2content = document.querySelector(".dropdown-contents-2")
if (event.target.classList.contains("dropdown-button-2")) {
  dropdown2content.classList.toggle("show");
    document.querySelector(".dropdown-logo-2").classList.toggle("rotate-arrow")
} else {
  dropdown2content.classList.remove("show");
  document.querySelector(".dropdown-logo-2").classList.remove("rotate-arrow")
}

})
