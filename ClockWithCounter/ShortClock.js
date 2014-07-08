function ShortClock (element) {
	this.toString = function () {
        var date = new Date(),
            hours = date.getHours(),
            minutes = date.getMinutes(),
            clock_string;

        hours = this.normalize(hours);
        minutes = this.normalize(minutes);

        clock_string = hours + ':' + minutes;

        return clock_string;
    }
	
    return this;
}

ShortClock.prototype = new Clock();

