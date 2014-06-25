function Clock (element) {
	var mode = "short",
        timer = setInterval(shortMode, 1000);

    shortMode();

	element.addEventListener("contextmenu", timeToDate, false);
    element.addEventListener("click", timeMode, false);

    function timeMode () {
        if(mode === "short") {
            fullMode();
            mode = "full";
            clearInterval(timer);
            timer = setInterval(fullMode, 1000);
        } else {
            shortMode();
            mode = "short";
            clearInterval(timer);
            timer = setInterval(shortMode, 1000);
        }
    }

    function timeToDate (e) {
        e.preventDefault();
        if(mode !== "date") {
            dateMode();
            mode = "date";
            clearInterval(timer);
            timer = setInterval(dateMode, 1000);
        } else {
            shortMode();
            mode = "short";
            clearInterval(timer);
            timer = setInterval(shortMode, 1000);
        }
    }

    function formatClockMode (value) {
        if(value < 10) {
            value = '0' + value;
        }
        return value;
    }

	function shortMode () {
        var date = new Date(),
            hours = date.getHours(),
            minutes = date.getMinutes();

        hours = formatClockMode(hours);
        minutes = formatClockMode(minutes);

        element.innerHTML = hours + ':' + minutes;
    }

    function fullMode () {
        var date = new Date(),
            hours = date.getHours(),
            minutes = date.getMinutes(),
            seconds = date.getSeconds();

        hours = formatClockMode(hours);
        minutes = formatClockMode(minutes);
        seconds = formatClockMode(seconds);

        element.innerHTML = hours + ':' + minutes +':' + seconds;
    }

    function dateMode () {
        var date = new Date(),
            month = date.getMonth() + 1,
            day = date.getDate(),
            year = date.getFullYear() % 100;

        month = formatClockMode(month);
        day = formatClockMode(day);
        year = formatClockMode(year);

        element.innerHTML = month + '/' + day + '/' + year;
    }

    return this;
}