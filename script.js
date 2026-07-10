const t1 = document.getElementById("text1");
const t2 = document.getElementById("text2");
const ans = document.getElementById("ans");
const s = document.getElementById("start");
const m = document.getElementById("score");
const main = document.getElementById("main");
const p2 = document.getElementById("page2");
let num1  = 0;
let num2 = 0;
let x = 0;
let y = 0;
let count = 0;
let total = 0;
let score = 0;
function start() {
    main.style.opacity = "0";
    p2.style.opacity = "1";
    count = count + 1;
    num1 = Math.floor(Math.random()*25)+1;
    num2 = Math.floor(Math.random()*25)+1;
    t1.textContent = num1;
    t2.textContent = num2;
    x = num1 + num2
    y = ans.value;
    s.innerText = "End";
}
function done() {
    y = ans.value;
    if (y==x) {
        alert("YOUR ANSWER IS RIGHT!");
        score = score + 1;
    } else {
        alert("your answer is wrong :(");
    }
    num1 = Math.floor(Math.random()*25)+1;
    num2 = Math.floor(Math.random()*25)+1;
    t1.textContent = num1;
    t2.textContent = num2;
    x = num1 + num2;
    y = ans.value;
    s.innerText = "End";
    total = total + 1;
    ans.value = "" ;
}


