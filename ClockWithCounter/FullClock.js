function FullClock (element) {
    this.render = function () {
        var date = new Date(),
            hours = date.getHours(),
            minutes = date.getMinutes(),
            seconds = date.getSeconds();

        hours = this.normalize(hours);
        minutes = this.normalize(minutes);
        seconds = this.normalize(seconds);

        element.innerHTML = hours + ':' + minutes +':' + seconds;
    }

    return this;
}

FullClock.prototype = new Clock();