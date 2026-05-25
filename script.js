const t1 = document.getElementById("text1");
const t2 = document.getElementById("text2");
const ans = document.getElementById("ans");
const s = document.getElementById("start");
const m = document.getElementById("score");
let num1  = 0;
let num2 = 0;
let x = 0;
let y = 0;
let count = 0;
let total = 0;
let score = 0;
function start() {
    if (count==1) {
        num1 = 0;
        num2 = 0;
        t1.textContent = num1;
        t2.textContent = num2;
        m.textContent = score + " out of " + total;
        ans.value = "";
        count = count + 1;
        s.innerText = "Start";
        score = 0
    } else {
        count = count + 1;
        num1 = Math.floor(Math.random()*25)+1;
       num2 = Math.floor(Math.random()*25)+1;
       t1.textContent = num1;
       t2.textContent = num2;
       x = num1 + num2
       y = ans.value;
       s.innerText = "End";
       if (count>2){
        score= 0;
        s.innerText="Start/End"
        m.textContent= score + " out of " + total;
        total = 0;
       }
    }
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


