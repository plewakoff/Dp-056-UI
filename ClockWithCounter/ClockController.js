function ClockController (element) {
    var clock = new ShortClock(element),
		mode = "short",
		timer = setInterval(function () {clock.render();}, 1000);
		
	clock.render();
	
	element.addEventListener("contextmenu", timeToDate, false);
    element.addEventListener("click", timeMode, false);
	
	function timeMode () {
        if(mode === "short") {
            clock = new FullClock(element);
            clock.render();
            mode = "full";
        } else {
            clock = new ShortClock(element);
            clock.render();
            mode = "short";
        }
    }

    function timeToDate (e) {
        e.preventDefault();
        if(mode !== "date") {
            clock = new DateClock(element);
            clock.render();
            mode = "date";
        } else {
            clock = new ShortClock(element);
            clock.render();
            mode = "short";
        }
    }
	
	return this;
}