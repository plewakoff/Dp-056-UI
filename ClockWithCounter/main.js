window.addEventListener("load", main, false);

function main () {
    var clock = new Clock(document.getElementById("clock")),
        counter = new ClickCounter(document.getElementById("clock"));
}