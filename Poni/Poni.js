var Poni = Backbone.Model.extend({
    oxygen: 100,
    breath: function () {},
    constructor: function () {
        var name;
        this.getName = function () {
            return name;
        };

        function resetName () {}

        return this;
    },
    speed: 25,
    run: function () {},
    eat: function () {}
});

var Stable = Backbone.Collection.extend({
    model: Poni
});