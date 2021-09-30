const h1 = document.getElementById("h1");
const section = document.querySelector("section");
let i = 0;

const interval = setInterval(() => {
  h1.innerHTML = i + "%";
  h1.style.opacity = 1 - i / 100;
  section.style.filter = "blur("+(50-i*0.5)+"px)"
  if (i == 100) {
    clearInterval(interval);
  }
  i++;
}, 10);
