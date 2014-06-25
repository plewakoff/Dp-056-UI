function Person () {
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
            str += key + ": " + attributes[key] + "\n";
        }

        return str;
    };

    this.toJSON = function () {
        var jsonHash = {},
            key;

        for (key in attributes) {
            jsonHash[key] = attributes[key];
        }

        return jsonHash;
    };

    return this;
}