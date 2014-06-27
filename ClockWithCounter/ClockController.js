function ClockController (element) {
    var short_clock = new ShortClock(element),
        full_clock = new FullClock(element),
		date_clock = new DateClock(element),
		mode = "short",
		timer;
		
	short_clock.render();
	
	element.addEventListener("contextmenu", timeToDate, false);
    element.addEventListener("click", timeMode, false);
	
	function timeMode () {
        if(mode === "short") {
            full_clock.render();
            mode = "full";
            clearInterval(timer);
            timer = setInterval(function () {full_clock.render();}, 1000);
        } else {
            short_clock.render();
            mode = "short";
            clearInterval(timer);
            timer = setInterval(function () {short_clock.render();}, 1000);
        }
    }

    function timeToDate (e) {
        e.preventDefault();
        if(mode !== "date") {
            date_clock.render();
            mode = "date";
            clearInterval(timer);
            timer = setInterval(function () {date_clock.render();}, 1000);
        } else {
            short_clock.render();
            mode = "short";
            clearInterval(timer);
            timer = setInterval(function () {short_clock.render();}, 1000);
        }
    }
	
	return this;
}