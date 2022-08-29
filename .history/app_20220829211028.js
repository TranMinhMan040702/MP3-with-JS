const song = document.getElementById("song");
const musicName = document.querySelector(".music-name");
const musicDes = document.querySelector(".music-des");
const musicImg = document.querySelector(".music-thumb img");
const musicThumb = document.querySelector(".music-thumb");
const playBtn = document.querySelector(".play-inner");
const nextBtn = document.querySelector(".play-forward");
const prevBtn = document.querySelector(".play-back");
const durationTime = document.querySelector(".duration");
const remindingTime = document.querySelector(".reminding");
const rangeBar = document.querySelector(".range");
const musicRepeat = document.querySelector(".music-repeat");

let isPlaying = true;
let indexSong = 0;
let timer;
let isRepeat = true;
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

musicRepeat.addEventListener("click", function() {
    if (isRepeat) {
        isRepeat = false;
        musicRepeat.setAttribute("style", "color:#d91594");
    } else {
        isRepeat = true;
        musicRepeat.removeAttribute("style");
    }
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
    musicThumb.classList.add("is-playing");
    song.play();
    playBtn.innerHTML = `<ion-icon name="pause-outline"></ion-icon>`;
    isPlaying = false;
    timer = setInterval(displayTimer, 500);
  } else {
        musicThumb.classList.remove("is-playing");
        song.pause();
        playBtn.innerHTML = `<ion-icon name="play-outline"></ion-icon>`;
        isPlaying = true;
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
    musicName.textContent = music.name;
    musicDes.textContent = music.des;
    musicImg.setAttribute("src", `${music.image}`);
}
init(music[indexSong]);
displayTimer();
