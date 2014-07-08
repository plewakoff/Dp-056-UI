function DateClock (element) {
    this.toString = function () {
        var date = new Date(),
            month = date.getMonth() + 1,
            day = date.getDate(),
            year = date.getFullYear() % 100,
            clock_string;

        month = this.normalize(month);
        day = this.normalize(day);
        year = this.normalize(year);

        clock_string = month + '/' + day + '/' + year;

        return clock_string;
    }

    return this;
}

DateClock.prototype = new Clock();