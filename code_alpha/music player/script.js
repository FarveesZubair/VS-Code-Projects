const songs = [
    { title: "Boggie", src: "res/song1.mp3", thumbnail: "res/thumb1.jpg" },
    { title: "Mortals Remix", src: "res/song2.mp3", thumbnail: "res/thumb2.jpg" },
    { title: "Alive", src: "res/song3.mp3", thumbnail: "res/thumb3.jpg" },
    { title: "Desperate", src: "res/song4.mp3", thumbnail: "res/thumb4.jpg" },
    { title: "Mortals", src: "res/song5.mp3", thumbnail: "res/thumb5.jpg" },
    { title: "Button", src: "res/song6.mp3", thumbnail: "res/thumb6.jpg" }, 
    { title: "Beautiful Disaster", src: "res/song7.mp3", thumbnail: "res/thumb7.jpg" },
    { title: "Wanderlust", src: "res/song8.mp3", thumbnail: "res/thumb8.jpg" },
    { title: "Overdrive", src: "res/song9.mp3", thumbnail: "res/thumb9.jpg" },
    { title: "Asteriod II", src: "res/song10.mp3", thumbnail: "res/thumb10.jpg" }
];

let currentIndex = 0;
const audio = new Audio();
const playPauseBtn = document.getElementById("play-pause");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const rewindBtn = document.getElementById("rewind");
const forwardBtn = document.getElementById("forward");
const progressBar = document.getElementById("progress-bar");
const elapsedTime = document.getElementById("elapsed-time");
const totalTime = document.getElementById("total-time");
const songTitle = document.getElementById("song-title");
const thumbnail = document.getElementById("thumbnail");
const songListDiv = document.getElementById("song-list");
const listBtn = document.getElementById("list-btn");

function loadSong(index) {
    audio.src = songs[index].src;
    songTitle.textContent = songs[index].title;
    thumbnail.src = songs[index].thumbnail;
    audio.load();
}

function playPause() {
    if (audio.paused) {
        audio.play();
        playPauseBtn.innerHTML = '<img src="res/pause.png" alt="pause" height="20px" width="20px">';
    } else {
        audio.pause();
        playPauseBtn.innerHTML = '<img src="res/play.png" alt="play" height="20px" width="20px">';
    }
}

function updateProgress() {
    progressBar.value = (audio.currentTime / audio.duration) * 100;
    elapsedTime.textContent = formatTime(audio.currentTime);
}

function formatTime(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
}

audio.addEventListener("loadedmetadata", () => {
    totalTime.textContent = formatTime(audio.duration);
});

audio.addEventListener("timeupdate", updateProgress);

progressBar.addEventListener("input", () => {
    audio.currentTime = (progressBar.value / 100) * audio.duration;
});

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + songs.length) % songs.length;
    loadSong(currentIndex);
    audio.play();
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % songs.length;
    loadSong(currentIndex);
    audio.play();
});

rewindBtn.addEventListener("click", () => {
    audio.currentTime -= 10;
});

forwardBtn.addEventListener("click", () => {
    audio.currentTime += 10;
});

playPauseBtn.addEventListener("click", playPause);

listBtn.addEventListener("click", () => {
    songListDiv.innerHTML = "";
    songs.forEach((song, index) => {
        const songItem = document.createElement("div");
        songItem.textContent = song.title;
        songItem.addEventListener("click", () => {
            currentIndex = index;
            loadSong(index);
            audio.play();
        });
        songListDiv.appendChild(songItem);
    });
    songListDiv.style.display = songListDiv.style.display === "block" ? "none" : "block";
});

loadSong(currentIndex);
