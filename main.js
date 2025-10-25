var audio = document.getElementById("audio");
var content = document.getElementById("content");
var cover = document.getElementById("cover");
var fingerprint = document.getElementById("fingerprint");

fingerprint.addEventListener("click", (event) => {
  audio.classList.add("show");
  content.classList.add("show");
  cover.classList.add("clicked");

  setTimeout(() => {
    audio.play();
  }, 1600);
});
