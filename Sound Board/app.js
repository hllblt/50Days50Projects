const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
for (let i = 0; i < 6; i++) {
  document.getElementById(sounds[i]).addEventListener("click", () => {
    for (let j = 0; j < 6; j++) {
      document.getElementById(sounds[j] + "1").pause();
      document.getElementById(sounds[j] + "1").currentTime = 0;
    }
    document.getElementById(sounds[i] + "1").play();
  });
}