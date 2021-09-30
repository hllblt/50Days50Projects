const hamburger = document.getElementById("hamburger");
const close = document.getElementById("close");
const main = document.querySelector(".main")

hamburger.addEventListener("click",()=>{
    hamburger.style.transform = "rotate(-90deg)";
    close.style.transform = "rotate(00deg)";
    main.style.transform = "rotate(-20deg)";
})
close.addEventListener("click",()=>{
    hamburger.style.transform = "rotate(0deg)";
    close.style.transform = "rotate(90deg)";
    main.style.transform = "rotate(0deg)";
})