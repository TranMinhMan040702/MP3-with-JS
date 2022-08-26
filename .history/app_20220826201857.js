const song = document.getElementById("song");
const playBtn = document.querySelector(".play-inner");
const nextBtn = document.querySelector(".play-forward");
const prevBtn = document.querySelector(".play-back");
let isPlaying = true;
let indexSong = 0;
const music = ["holo.mp3", "home.mp3", "mp3_music_summer.mp3", "spark.mp3"];
nextBtn.addEventListener("click", function() {
    changeSong(1);
} );
prevBtn.addEventListener("click", function() {
    changeSong(-1);
});
function changeSong (dir) {
    if (dir === 1) {
        // next song
    } else if (dir === -1) {
        // prev song
    }
    song.setAttribute("src", `./music/${music[indexSong]}`);
}
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
