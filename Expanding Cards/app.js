const leftleft = document.getElementById("leftleft");
const leftleftText = document.getElementById("sunnyBeach");

const leftcenter = document.getElementById("leftcenter");
const leftcenterText = document.querySelector("#mountain");

const center = document.getElementById("center");
const centerText = document.querySelector("#city");

const rightcenter = document.getElementById("rightcenter");
const rightcenterText = document.querySelector("#explore");

const rightright = document.getElementById("rightright");
const rightrightText = document.querySelector("#forest");

leftleft.addEventListener("click",()=>{
    leftleft.style.width = "60%";
    leftleftText.style.opacity = 1;
    leftcenter.style.width = "7%";
    center.style.width = "7%";
    rightcenter.style.width = "7%";
    rightright.style.width = "7%";
    leftcenterText.style.opacity = 0;
    centerText.style.opacity = 0;
    rightrightText.style.opacity = 0;
    rightcenterText.style.opacity = 0;
})
leftcenter.addEventListener("click",()=>{
    leftleft.style.width = "7%";
    leftleftText.style.opacity = 0;
    leftcenter.style.width = "60%";
    center.style.width = "7%";
    rightcenter.style.width = "7%";
    rightright.style.width = "7%";
    leftcenterText.style.opacity = 1;
    centerText.style.opacity = 0;
    rightrightText.style.opacity = 0;
    rightcenterText.style.opacity = 0;
})
center.addEventListener("click",()=>{
    leftleft.style.width = "7%";
    leftleftText.style.opacity = 0;
    leftcenter.style.width = "7%";
    center.style.width = "60%";
    rightcenter.style.width = "7%";
    rightright.style.width = "7%";
    leftcenterText.style.opacity = 0;
    centerText.style.opacity = 1;
    rightrightText.style.opacity = 0;
    rightcenterText.style.opacity = 0;
})
rightcenter.addEventListener("click",()=>{
    leftleft.style.width = "7%";
    leftleftText.style.opacity = 0;
    leftcenter.style.width = "7%";
    center.style.width = "7%";
    rightcenter.style.width = "60%";
    rightright.style.width = "7%";
    leftcenterText.style.opacity = 0;
    centerText.style.opacity = 0;
    rightrightText.style.opacity = 0;
    rightcenterText.style.opacity = 1;
})
rightright.addEventListener("click",()=>{
    leftleft.style.width = "7%";
    leftleftText.style.opacity = 0;
    leftcenter.style.width = "7%";
    center.style.width = "7%";
    rightcenter.style.width = "7%";
    rightright.style.width = "60%";
    leftcenterText.style.opacity = 0;
    centerText.style.opacity = 0;
    rightrightText.style.opacity = 1;
    rightcenterText.style.opacity = 0;
})