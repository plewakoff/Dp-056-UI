function ClickCounter (element_to_count) {
    var show = "off",
        right_click = 0,
        left_click = 0;

    element_to_count.addEventListener("click", rightClick, false);
    element_to_count.addEventListener("contextmenu", leftClick, false);
    element_to_count.addEventListener("dblclick", fixStatistic, false);
    element_to_count.addEventListener("dblclick", showStatistic, false);

    function showStatistic () {
        console.log("Statistics:\nRight Click - "+right_click+"\nLeft Click - "+left_click);
    }

    function rightClick () {
        right_click++;
    }

    function leftClick () {
        left_click++;
    }

    function fixStatistic () {
        right_click -= 2;
    }

    return this;
}