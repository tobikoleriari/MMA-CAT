const video = document.getElementById("wildlifeVideo");
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", function () {
  if (video.paused) {
    video.play();
    toggleBtn.textContent = "Pause Video";
  } else {
    video.pause();
    toggleBtn.textContent = "Play Video";
  }
});
