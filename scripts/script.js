var x = document.getElementById("scrollzonder");
var map = document.getElementById("map");
var y = document.getElementById("scrollmet");
var z = document.getElementById("content");
var arrow = document.getElementById("arrow");
var open = document.getElementById("open");
var progress = document.getElementsByClassName("progress")[0];
var progress1 = document.getElementsByClassName("progress")[1];
var logo = document.getElementById("logo");
var paper = new Audio('sounds/paper.wav');
var believeit = new Audio('sounds/believeit.mp3');
var thebeginning = document.getElementById("theBeginning");
var growingup = document.getElementById("growingUp");
var gettingbetter = document.getElementById("gettingBetter");
var container = document.getElementById("container");
var inhoud = document.getElementById("inhoud");
var seal = document.getElementById("seal");
var clone1 = document.getElementById("clone1");
var clone2 = document.getElementById("clone2");
var clone3 = document.getElementById("clone3");
var smoke1 = document.getElementById("smoke1");
var smoke2 = document.getElementById("smoke2");
var jutsuSound = new Audio("sounds/jutsu.mp3");
var poofSound = new Audio("sounds/clonepoof.mp3");
var poofSound2 = new Audio("sounds/clonepoof2.mp3");
var tip = document.getElementById("tip");

console.log("noice");

map.addEventListener("click", scrollTerug)
y.addEventListener("click", scrollUit);


function scrollUit() {

    y.removeEventListener("click", scrollUit);
    map.removeEventListener("click", scrollTerug);
    progress.style.transition = "1s ease";
    progress1.style.transition = "1s ease";
    y.style.opacity = "0"
    progress1.style.width = "2em";
    setTimeout(() => {
        z.style.width = "95%";
    }, 1000);
    setTimeout(() => {
        inhoud.style.display = "block";
        thebeginning.style.display = "flex";
        growingup.style.display = "flex";
        gettingbetter.style.display = "flex";
        z.style.width = "600%";
    }, 3500);
    setTimeout(() => {
        x.id = "scrollleft";
    }, 1000);
    setTimeout(() => {
        paper.play();
    }, 1000);
    setTimeout(() => {
        y.id = "scrollgone";
    }, 1000);
    setTimeout(() => {
        y.addEventListener("click", scrollUit);
        map.addEventListener("click", scrollTerug);
        progress.style.opacity = "1";
        progress1.style.opacity = "1";
        inhoud.style.opacity = "1";
        thebeginning.style.opacity = "1";
        growingup.style.opacity = "1";
        gettingbetter.style.opacity = "1";
    }, 3600);
    arrow.style.opacity = "0"
    open.style.opacity = "0"
}

function scrollTerug() {
    inhoud.style.display = "none";
    thebeginning.style.display = "none";
    growingup.style.display = "none";
    gettingbetter.style.display = "none";
    y.removeEventListener("click", scrollUit);
    map.removeEventListener("click", scrollTerug);
    z.style.transition = "0s";
    z.style.width = "90%";
    setTimeout(() => {
        z.style.transition = "3.4s ease";
        z.style.width = "0%";
        paper.play();
        x.id = "scrollzonder";
        z.id = "content";
        y.id = "scrollmet";
        x.removeAttribute("onclick")
        y.removeAttribute("onclick")
        progress.style.opacity = "0";
        inhoud.style.opacity = "0";
        theBeginning.style.opacity = "0";
        progress1.style.opacity = "0";
    }, 0010)
    setTimeout(() => {
        x.onclick = scrollTerug;
        y.addEventListener("click", scrollUit);
        map.addEventListener("click", scrollTerug);
    }, 3600);
    setTimeout(() => {
        y.style.opacity = "1";
        arrow.style.opacity = "1";
        open.style.opacity = "1";
    }, 3200);
}


logo.addEventListener("click", schreeuw);

function schreeuw() {
    believeit.play();
}


const element = document.querySelector("#container");

element.addEventListener('wheel', (event) => {
    event.preventDefault();

    element.scrollBy({
        left: event.deltaY < 0 ? -300 : 300,

    });
});

clone2.addEventListener("click", shadowClone);

function shadowClone() {
    jutsuSound.play();
    setTimeout(() => {
        poofSound.play();
        clone1.style.opacity = "1";
        smoke1.style.opacity = "1"
    }, 1000);
    setTimeout(() => {
        smoke1.style.opacity = "0"
    }, 1500);
    setTimeout(() => {
        poofSound2.play();
        clone3.style.opacity = "1";
        smoke2.style.opacity = "1"
    }, 1200);
    setTimeout(() => {
        smoke2.style.opacity = "0"
    }, 1600);
    clone2.removeEventListener("click", shadowClone)
    tip.innerHTML = "Shadow clone jutsu!";
}
