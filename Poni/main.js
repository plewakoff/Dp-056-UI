window.addEventListener("load", main, false);

function main () {
    var star = new Poni();
    var rainbow = new Poni();
    var pinky = new Poni();

    var stable = new Stable();

    stable.add([star, rainbow, pinky]);

    console.dir(stable);
}