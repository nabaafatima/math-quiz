const t1 = document.getElementById("text1");
const t2 = document.getElementById("text2");
const ans = document.getElementById("ans");
const s = document.getElementById("start");
const m = document.getElementById("score");
const main = document.getElementById("main");
const p2 = document.getElementById("page2");
const livesdisplay = document.getElementById("livesDisplay");
let num1  = 0;
let num2 = 0;
let x = 0;
let y = 0;
let lives = 5;
let score = 0;
let time = 10;
const timer = setInterval(() => {
    time++
}, 1000);
function start() {
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
    x = num1 + num2;
    y = ans.value; 
    if (x==y) {
        p2.style.backgroundColor = "green";
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


