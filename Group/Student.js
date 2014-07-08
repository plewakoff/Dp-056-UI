var Student = Backbone.Model.extend({
    toString: function () {
        var str = "",
            key;

        for (key in this.attributes) {
            str += this.attributes[key] + " ";
        }

        return str;
    }
});