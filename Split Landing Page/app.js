const right = document.querySelector(".right");
const left = document.querySelector(".left");

right.addEventListener("mouseover",()=>{
    right.style.width = "70%";
    left.style.width = "30%";
})
right.addEventListener("mouseout",()=>{
    right.style.width = "50%";
    left.style.width = "50%";
})
left.addEventListener("mouseover",()=>{
    right.style.width = "30%";
    left.style.width = "70%";
})
left.addEventListener("mouseout",()=>{
    right.style.width = "50%";
    left.style.width = "50%";
})