function ClockController (element) {
    var clock = new ShortClock(element),
		mode = "short",
		timer = setInterval(function () {render();}, 1000);
		
	render();
	
	element.addEventListener("contextmenu", timeToDate, false);
    element.addEventListener("click", timeMode, false);

    function render () {
        element.innerHTML = clock.toString();
    }
	
	function timeMode () {
        if(mode === "short") {
            clock = new FullClock(element);
            render();
            mode = "full";
        } else {
            clock = new ShortClock(element);
            render();
            mode = "short";
        }
    }

    function timeToDate (e) {
        e.preventDefault();
        if(mode !== "date") {
            clock = new DateClock(element);
            render();
            mode = "date";
        } else {
            clock = new ShortClock(element);
            render();
            mode = "short";
        }
    }
	
	return this;
}