var Group = Backbone.Model.extend({
    defaults: {
        name: "Dp-056 JavaScript UI"
    },

    collection: [],

    addStudent: function (student) {
        this.collection.push(student);
    },

    getStudent: function (i) {
        return this.collection[i];
    },

    getNumberOfStudents: function () {
        return this.collection.length;
    }
});
