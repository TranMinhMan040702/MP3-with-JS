const song = document.getElementById('song');

const playBtn = document.querySelector(".play-inner");

let isPlaying = true;

playBtn.addEventListener("click", playPause);

function playPause() {
    if (isPlaying) {
        song.play();
    } else {
        song.pause();
    }
}