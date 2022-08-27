const song = document.getElementById("song");
const nameSong = document.querySelector(".music-name");
const desSong = document.querySelector(".music-des");
const playBtn = document.querySelector(".play-inner");
const nextBtn = document.querySelector(".play-forward");
const prevBtn = document.querySelector(".play-back");
const durationTime = document.querySelector(".duration");
const remindingTime = document.querySelector(".reminding");
const rangeBar = document.querySelector(".range");

let isPlaying = true;
let indexSong = 0;
let timer;
const music = [
    {
        name: "Halo",
        des: "Ampyz",
        song: "holo.mp3",
    },
    {
        name: "Summer",
        des: "Best remixe of Popular song",
        song: "mp3_music_summer.mp3",
    },
    {
        name: "Câu hứa Chưa Vẹn ",
        des: "Dj Đại Mèo",
        song: "Vui Lắm Nha Remix.mp3",
    },
    {
        name: "Vui Lắm Nha",
        des: "Remix - Hương Ly, Jombie",
        song: "Câu Hứa Chưa Vẹn Tròn Remix.mp3",
    },
]
nextBtn.addEventListener("click", function() {
    changeSong(1);
} );
prevBtn.addEventListener("click", function() {
    changeSong(-1);
});

function init() {
    displayTimer();
}
function changeSong (dir) {
    if (dir === 1) {
        // next song
        indexSong++;
        if (indexSong >= music.length) {
            indexSong = 0;
        }
        isPlaying = true;
    } else if (dir === -1) {
        // prev song
        indexSong--;
        if (indexSong < 0) {
            indexSong = music.length - 1;
        }
        isPlaying = true;
    }
    let indexMusic = music[indexSong];
    song.setAttribute("src", `./music/${indexMusic.song}`);
    nameSong.innerHTML = indexMusic.name;
    desSong.innerHTML = indexMusic.des;
    playPause();
}
playBtn.addEventListener("click", playPause);
function playPause() {
  if (isPlaying) {
    song.play();
    playBtn.innerHTML = `<ion-icon name="pause-outline"></ion-icon>`;
    isPlaying = false;
    timer = setInterval(displayTimer, 500);
  } else {
    song.pause();
    playBtn.innerHTML = `<ion-icon name="play-outline" class="play-icon"></ion-icon>`;
    isPlaying = true;
    clearInterval(timer);
  }
}

function displayTimer() {
    const { duration, currentTime } = song;
    rangeBar.max = duration;
    rangeBar.value = currentTime;   
    remindingTime.textContent = formatTimer(currentTime);
    if (!duration) {
        durationTime.textContent = "00:00";
    } else {
        durationTime.textContent = formatTimer(duration);
    }
}

function formatTimer(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time - minutes * 60);
    return `${minutes < 10 ? "0" + minutes : minutes}
    :${seconds < 10 ? "0" + seconds : seconds}`
}

rangeBar.addEventListener("change", handleTimer);
function handleTimer() {
    song.currentTime = rangeBar.value;
}

init();
