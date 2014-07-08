var StudentController = Backbone.View.extend({
    student_template: _.template("<li>Name: <%=name%> Age: <%=age%> Gender: <%=gender%></li>"),

    render: function () {
        return this.student_template(this.model.toJSON());
    }
});
