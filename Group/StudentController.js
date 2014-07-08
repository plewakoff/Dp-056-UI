var StudentController = Backbone.View.extend({
    student_template: _.template("<li>Name: <%=name%> Age: <%=age%> Gender: <%=gender%></li>"),

    initialize: function (student) {
        this.model = student;
    },

    render: function () {
        return this.student_template(this.model.toJSON());
    }
});
