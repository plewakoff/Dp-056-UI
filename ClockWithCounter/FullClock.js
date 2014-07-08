function FullClock (element) {
    this.toString = function () {
        var date = new Date(),
            hours = date.getHours(),
            minutes = date.getMinutes(),
            seconds = date.getSeconds(),
            clock_string;

        hours = this.normalize(hours);
        minutes = this.normalize(minutes);
        seconds = this.normalize(seconds);

        clock_string = hours + ':' + minutes +':' + seconds;

        return clock_string;
    }

    return this;
}

FullClock.prototype = new Clock();