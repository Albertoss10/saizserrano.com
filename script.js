const menu = document.querySelector(".menu");
const toggle = document.querySelector(".toggle");
toggle.addEventListener("click",()=>{
  menu.classList.toggle("active");
})

$('.portfolio-button').mousedown(function(){
    timeout = setInterval(function(){
        window.scrollBy(0,-1); // May need to be -1 to go down
    }, 0); // Play around with this number. May go too fast

    return false;
});