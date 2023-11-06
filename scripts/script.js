var scroll = document.getElementsByClassName("scroll");
var paper = new Audio('sounds/paper.wav');
var believeit = new Audio('sounds/believeit.mp3');

console.log("noice");
function schreeuw() {
    believeit.play();
}


function scrollUit() {
    var x = document.getElementsByClassName("scroll")[0];
    var y = document.getElementsByClassName("scroll")[1];
    var z = document.getElementsByClassName("content")[0];
    var arrow = document.getElementsByClassName("arrow")[0];
    var open = document.getElementsByClassName("open")[0];
    var progress = document.getElementsByClassName("progress")[0];
    var progress1 = document.getElementsByClassName("progress")[1];
    x.removeAttribute("onclick")
    y.style.transition = "1s ease";
    progress.style.transition = "1s ease";
    progress1.style.transition = "1s ease";
    z.style.transition = "3.4s ease";
    y.style.opacity = "0"
    y.removeAttribute("onclick");
    progress1.style.width = "10em";
    setTimeout(() => {  x.style.left = "87%"; }, 1000);
    setTimeout(() => {  z.style.width = "90%"; }, 1000);
    setTimeout(() => {  paper.play(); }, 1000);
    setTimeout(() => {  z.style.width = "95%"; }, 4000);
    setTimeout(() => {  x.onclick = scrollTerug; }, 3500);
    setTimeout(() => {  progress.style.opacity = "1"; }, 3500);
    setTimeout(() => {  progress1.style.opacity = "1"; }, 3500);
    x.style.transition = "3.25s ease";
    arrow.style.transition = "1s ease";
    arrow.style.opacity = "0"
    open.style.transition = "1s ease";
    open.style.opacity = "0"
}

function scrollTerug() {
    var x = document.getElementsByClassName("scroll")[0];
    var y = document.getElementsByClassName("scroll")[1];
    var z = document.getElementsByClassName("content")[0];
    var arrow = document.getElementsByClassName("arrow")[0];
    var open = document.getElementsByClassName("open")[0];
    var progress = document.getElementsByClassName("progress")[0];
    var progress1 = document.getElementsByClassName("progress")[1];
    paper.play();
    x.style.left = "0%";
    z.style.width = "0%";
    z.style.transition = "3.2s ease";
    x.removeAttribute("onclick")
    y.removeAttribute("onclick")
    progress.style.opacity = "0";
    progress1.style.opacity = "0";
    setTimeout(() => {  y.onclick = scrollUit; }, 5200);
    setTimeout(() => {  y.style.opacity = "1"; }, 3200);
    setTimeout(() => {  arrow.style.opacity = "1"; }, 3200);
    setTimeout(() => {  open.style.opacity = "1"; }, 3200);
}



