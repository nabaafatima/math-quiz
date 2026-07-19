const t1 = document.getElementById("text1");
const t2 = document.getElementById("text2");
const ans = document.getElementById("ans");
const s = document.getElementById("start");
const m = document.getElementById("score");
const main = document.getElementById("main");
const p2 = document.getElementById("page2");
const timerdisplay = document.getElementById("timerDisplay");
const livesdisplay = document.getElementById("livesDisplay");
let num1  = 0;
let num2 = 0;
let x = 0;
let y = 0;
let lives = 5;
let score = 0;
let time = 10;
let timerInterval = null;
function start() {
    timer();
    main.style.opacity = "0";
    main.style.pointerEvents = "none"
    p2.style.opacity = "1";
    p2.style.pointerEvents = "auto";
    num1 = Math.floor(Math.random()*25)+1;
    num2 = Math.floor(Math.random()*25)+1;
    t1.textContent = num1;
    t2.textContent = num2;
    x = num1 + num2
    y = ans.value;
}
function done() {
    timer();
    time = 10;
    x = num1 + num2;
    y = ans.value;
     
    if (x==y) {
        if(time => 3) {
            score = score + 2;
        } else {
            score = score + 1;
        }
        p2.style.backgroundColor = "green";
        time = 10;
        setTimeout(() => {
            p2.style.backgroundColor = "black"
        }, 100);
    } else {
        p2.style.backgroundColor = "red";
        setTimeout(() => {
            p2.style.backgroundColor = "black";
        }, 100);
        lives = lives - 1;
        livesdisplay.textContent = "Lives: " + lives + "❤️";
    }
    num1 = Math.floor(Math.random()*25)+1;
    num2 = Math.floor(Math.random()*25)+1;
    t1.textContent = num1;
    t2.textContent = num2;
    ans.value = "";
}
function timer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        time--
        timerdisplay.textContent = "Time: " + time + "s";
        if (time == 0) {
            livesdisplay.textContent = "lives: " + lives + "❤️";
            done();
            time = 10;
        }
    }, 1000);
}

