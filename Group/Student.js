function Student () {
    var attributes = {};

    this.addAttribute = function (key, value) {
        attributes[key] = value;
    };

    this.getAttribute = function (key) {
        return attributes[key];
    };

    this.toString = function () {
        var str = "",
            key;

        for (key in attributes) {
            str += attributes[key] + " ";
        }

        return str;
    };

    return this;
}