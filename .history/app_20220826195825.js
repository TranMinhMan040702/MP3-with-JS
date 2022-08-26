const song = document.getElementById("song");

const playBtn = document.querySelector(".play-inner");

let isPlaying = true;

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
