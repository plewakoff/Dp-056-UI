window.addEventListener("load", main, false);

function main () {
    var clock_controller = new ClockController(document.getElementById("clock")),
        counter = new ClickCounter(document.getElementById("clock"));
}