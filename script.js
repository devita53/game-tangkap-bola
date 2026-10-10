// ================================
// MENGAMBIL ELEMEN HTML
// ================================

const loginPage = document.getElementById("loginPage");
const gamePage = document.getElementById("gamePage");

const loginForm = document.getElementById("loginForm");

const usernameInput = document.getElementById("username");

const playerName = document.getElementById("playerName");

const scoreText = document.getElementById("score");

const timeText = document.getElementById("time");

const gameArea = document.getElementById("gameArea");

const ball = document.getElementById("ball");

const result = document.getElementById("result");

const startButton = document.getElementById("startButton");

const logoutButton = document.getElementById("logoutButton");


// ================================
// VARIABEL GAME
// ================================

let score = 0;

let time = 30;

let gameStarted = false;

let timer;


// ================================
// LOGIN
// ================================

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const username = usernameInput.value.trim();

    if (username === "") {

        alert("Silakan masukkan nama pengguna!");

        return;

    }


    // Menampilkan nama pengguna
    playerName.textContent = username;


    // Menampilkan halaman game
    loginPage.classList.add("hidden");

    gamePage.classList.remove("hidden");

});


// ================================
// MEMINDAHKAN BOLA
// ================================

function moveBall() {

    const areaWidth = gameArea.clientWidth;

    const areaHeight = gameArea.clientHeight;

    const ballWidth = ball.offsetWidth;

    const ballHeight = ball.offsetHeight;


    const maxX = areaWidth - ballWidth;

    const maxY = areaHeight - ballHeight;


    const randomX = Math.floor(
        Math.random() * maxX
    );


    const randomY = Math.floor(
        Math.random() * maxY
    );


    ball.style.left = randomX + "px";

    ball.style.top = randomY + "px";

}


// ================================
// MULAI GAME
// ================================

function startGame() {

    // Reset skor
    score = 0;

    // Reset waktu
    time = 30;

    gameStarted = true;


    scoreText.textContent = score;

    timeText.textContent = time;

    result.textContent = "";


    // Pindahkan bola
    moveBall();


    // Timer
    clearInterval(timer);

    timer = setInterval(function() {

        time--;

        timeText.textContent = time;


        if (time <= 0) {

            endGame();

        }

    }, 1000);

}


// ================================
// KLIK BOLA
// ================================

ball.addEventListener("click", function() {

    if (!gameStarted) {

        return;

    }


    // Tambah skor
    score++;

    scoreText.textContent = score;


    // Pindahkan bola
    moveBall();

});


// ================================
// GAME SELESAI
// ================================

function endGame() {

    gameStarted = false;

    clearInterval(timer);


    result.textContent =
        "🎉 Waktu habis! Skor kamu: " + score;


    startButton.textContent = "Main Lagi";

}


// ================================
// TOMBOL MULAI
// ================================

startButton.addEventListener("click", function() {

    startGame();

});


// ================================
// LOGOUT
// ================================

logoutButton.addEventListener("click", function() {

    clearInterval(timer);

    gameStarted = false;


    // Kembali ke login
    gamePage.classList.add("hidden");

    loginPage.classList.remove("hidden");


    // Kosongkan nama
    usernameInput.value = "";

    playerName.textContent = "";


    // Reset tampilan
    score = 0;

    time = 30;

    scoreText.textContent = "0";

    timeText.textContent = "30";

    result.textContent = "";

    startButton.textContent = "Mulai Game";

});
