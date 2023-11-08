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
var container = document.getElementById("container");
var inhoud = document.getElementById("inhoud");
var seal = document.getElementById("seal");

console.log("noice");

map.addEventListener("click", scrollTerug)
y.addEventListener("click", scrollUit);
x.addEventListener("click", scrollTerug);

function scrollUit() {
    inhoud.style.display = "block";
    thebeginning.style.display = "flex";
    growingup.style.display = "flex";
    y.removeEventListener("click", scrollUit);
    x.removeEventListener("click", scrollTerug);
    progress.style.transition = "1s ease";
    progress1.style.transition = "1s ease";
    y.style.opacity = "0"
    progress1.style.width = "2em";
    setTimeout(() => {
        z.style.width = "95%";
    }, 1000);
    setTimeout(() => {
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
        x.onclick = scrollTerug;
        y.addEventListener("click", scrollUit);
        x.addEventListener("click", scrollTerug);
        progress.style.opacity = "1";
        progress1.style.opacity = "1";
        inhoud.style.opacity = "1";
        thebeginning.style.opacity = "1";
        growingup.style.opacity = "1";
    }, 3600);
    arrow.style.opacity = "0"
    open.style.opacity = "0"
}

function scrollTerug() {
    inhoud.style.display = "none";
    thebeginning.style.display = "none";
    growingup.style.display = "none";
    y.removeEventListener("click", scrollUit);
    x.removeEventListener("click", scrollTerug);
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
        setTimeout(() => {
            x.onclick = scrollTerug;
            y.addEventListener("click", scrollUit);
            x.addEventListener("click", scrollTerug);
        }, 3600);
        setTimeout(() => {
            y.style.opacity = "1";
            arrow.style.opacity = "1";
            open.style.opacity = "1";
        }, 3200);
    }, 10);
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


