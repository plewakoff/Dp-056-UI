function ShortClock (element) {
	this.render = function () {
        var date = new Date(),
            hours = date.getHours(),
            minutes = date.getMinutes();

        hours = this.normalize(hours);
        minutes = this.normalize(minutes);

        element.innerHTML = hours + ':' + minutes;
    }
	
    return this;
}

ShortClock.prototype = new Clock();

