function DateClock (element) {
    this.render = function () {
        var date = new Date(),
            month = date.getMonth() + 1,
            day = date.getDate(),
            year = date.getFullYear() % 100;

        month = this.normalize(month);
        day = this.normalize(day);
        year = this.normalize(year);

        element.innerHTML = month + '/' + day + '/' + year;
    }

    return this;
}

DateClock.prototype = new Clock();