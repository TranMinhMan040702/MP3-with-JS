const song = document.getElementById("song");
const playBtn = document.querySelector(".play-inner");
let isPlaying = true;
const music = ["holo.mp3", "home.mp3", "mp3_music_summer.mp3", "spark.mp3"];

playBtn.addEventListener("click", playPause);
function playPause() {
  if (isPlaying) {
    song.play();
    playBtn.innerHTML = `<ion-icon name="pause-outline"></ion-icon>`;
    isPlaying = false;
  } else {
    song.pause();
    playBtn.innerHTML = `<ion-icon name="play-outline" class="play-icon"></ion-icon>`;
    isPlaying = true;
  }
}
