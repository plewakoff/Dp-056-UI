function Clock () {
    this.normalize = function (value) {
        if(value < 10) {
            value = '0' + value;
        }
        return value;
    };
	
	this.render = function () {};
	
	return this;
}