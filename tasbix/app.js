let btn = document.querySelector(".button1")
let h1 = document.querySelector("h1")
let btn2 = document.querySelector(".banner_box")
let ppp = document.querySelector("p")
let bbb = document.querySelector("b")
let divv = document.querySelector(".banner_child_item")
function changeColor() {
  h1.style.color = "black"
  btn2.style.background = "white"
  ppp.style.color = "black"
  bbb.style.color = "black"
  divv.style.background = "black"
  btn.style.background = "#fff"
}
let button2 = document.querySelector(".button2")
let p = document.querySelector("h1")
let btn1 = document.querySelector(".banner_box")
let pp = document.querySelector("p")
let bb = document.querySelector("b")
let div = document.querySelector(".banner_child_item")
function changeColor1() {
  button2.style.background = "#222"
  p.style.color = "white"
  btn1.style.background = "#222"
  pp.style.color = "white"
  bb.style.color = "white"
  div.style.background = "white"
}

const countBtn = document.getElementById("countBtn");
const resetBtn = document.getElementById("resetBtn");
const countSpan = document.getElementById("count");
const resetBtn1 = document.getElementById("resetBtn1");


let count = 0;

countBtn.addEventListener("click", () => {
  count++;
  countSpan.innerText = count;
});

resetBtn.addEventListener("click", () => {
  count = 0;
  countSpan.innerText = count;
});

let pppp = document.querySelector(".color11")

function color1() {
  pppp.style.background = "red"
}
