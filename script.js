const menu = document.querySelector(".menu");
const toggle = document.querySelector(".toggle");
toggle.addEventListener("click",()=>{
  menu.classList.toggle("active");
})

$ = function(id) {
    return document.getElementById(id);
  }
  
  var show = function(id) {
      $(id).style.display ='block';
  }
  var hide = function(id) {
      $(id).style.display ='none';
  }