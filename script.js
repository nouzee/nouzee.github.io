/* membuat button click show hide di navbar */
var togglebtn = document.querySelector(".toggle-btn");
var nav = document.querySelector(".navlinks");
var links = document.querySelector(".navlinks li");

togglebtn.addEventListener("click", function() {
    this.classList.toggle("click");
    nav.classList.toggle("open");
})

var typed = new Typed(".input", {
    strings:["Frontend Developer", "UI/UX Designeer", "Web Developer"],
    typedSpeed:70,
    backSpeed:55,
    loop:true
})