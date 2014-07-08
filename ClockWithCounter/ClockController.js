function ClockController (element) {
    var clock = new ShortClock(element),
		timer = setInterval(function () {render();}, 1000);
		
	render();

    element.addEventListener("click", timeMode, false);
    element.addEventListener("contextmenu", timeToDate, false);

    function render () {
        element.innerHTML = clock.toString();
    }
	
	function timeMode () {
        if(clock instanceof ShortClock) {
            clock = new FullClock(element);
            render();
        } else {
            clock = new ShortClock(element);
            render();
        }
    }

    function timeToDate (e) {
        e.preventDefault();
        if(!(clock instanceof DateClock)) {
            clock = new DateClock(element);
            render();
        } else {
            clock = new ShortClock(element);
            render();
        }
    }
	
	return this;
}