const song = document.getElementById("song");
const nameSong = document.querySelector(".music-name");
const desSong = document.querySelector(".music-des");
const musicImg = document.querySelector(".music-thumb img");
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
        id: "1",
        name: "Halo",
        des: "Ampyz",
        song: "holo.mp3",
        image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    {
        id: "2",
        name: "Summer",
        des: "Best remixe of Popular song",
        song: "mp3_music_summer.mp3",
        image: "https://images.unsplash.com/photo-1537726043141-dabf1c48d0a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    {
        id: "3",
        name: "Câu hứa Chưa Vẹn ",
        des: "Dj Đại Mèo",
        song: "Câu Hứa Chưa Vẹn Tròn Remix.mp3",
        image: "https://images.unsplash.com/photo-1518489913881-199b7c7a081d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80",
    },
    {
        id: "4",
        name: "Vui Lắm Nha",
        des: "Remix - Hương Ly, Jombie",
        song: "Vui Lắm Nha Remix.mp3",
        image: "https://images.unsplash.com/photo-1526758097130-bab247274f58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
]
nextBtn.addEventListener("click", function() {
    changeSong(1);
} );
prevBtn.addEventListener("click", function() {
    changeSong(-1);
});


song.addEventListener("ended", handleEndSong);
function handleEndSong() {
    changeSong(1);
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
    init(music[indexSong]);
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
function init(music) {
    song.setAttribute("src", `./music/${music.song}`);
    nameSong.textContent = music.name;
    desSong.textContent = music.des;
}
init(music[indexSong]);
displayTimer();
