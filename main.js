var audio = document.getElementById("audio");
var content = document.getElementById("content");
var cover = document.getElementById("cover");
var fingerprint = document.getElementById("fingerprint");

fingerprint.addEventListener("click", (event) => {
  if (audio) {
    audio.classList.add("show");
    setTimeout(() => {
      audio.play();
    }, 1600);
  }

  content.classList.add("show");
  cover.classList.add("clicked");
});
