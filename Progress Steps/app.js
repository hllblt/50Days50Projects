const next = document.getElementById("next");
const prev = document.getElementById("prev");
const upper = document.getElementById("upperProgress");
const circles = document.getElementsByClassName("circle");
console.log(circles);

let counter = 0;

next.addEventListener("click", () => {
  if (counter != 3) {
    counter++;
  }
  upper.style.width = counter * 32 + "%";
  for (let i = 0; i < counter + 1; i++) {
    circles[i].classList.add("active");
  }
  check(counter);
});
prev.addEventListener("click", () => {
  if (counter != 0) {
    counter--;
  }
  upper.style.width = counter * 32 + "%";
  circles[counter + 1].classList.remove("active");
  check(counter);
});

function check(counter) {
  if (0 < counter < 3) {
    next.classList = "activeButton";
    prev.classList = "activeButton";
  }
  else if (counter == 0) {
    // next.classList.remove("passiveButton");
    prev.classList.remove("activeButton");
    // next.classList.add("activeButton");
    prev.classList.add("passiveButton");
  }
  else if (counter == 3) {
    // prev.classList.remove("passiveButton");
    next.classList.remove("activeButton");
    next.classList.add("passiveButton");
    // prev.classList.add("activeButton");
  }
}
