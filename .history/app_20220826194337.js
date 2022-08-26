const playBtn = document.querySelector(".play-inner");

playBtn.addEventListener("click", playPause);

function playPause() {
    song.play();
}