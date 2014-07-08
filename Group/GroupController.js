var GroupController = Backbone.View.extend({
    group_template: _.template("<ul class='group_list'><%=name%></ul>"),

    model: new Group(),

    /*elements: {
        group_info: $(this.el).find(".group_info"),
        add: $(this.el).find(".add"),
        add_div: $(this.el).find(".add_div"),
        cancel: $(this.el).find(".cancel"),
        add_student: $(this.el).find(".add_student"),
        student_name: $(this.el).find(".student_name"),
        student_age: $(this.el).find(".student_age"),
        student_gender: $(this.el).find(".student_gender")
    },*/

    events: {
        "click .add": "showAddDiv",
        "click .cancel": "resetInput",
        "click .add_student": "render"
    },

    initialize: function () {
        this.$el.find(".group_info").append(this.group_template(this.model.toJSON()));
        this.$el.find(".add_div").addClass("hide");
    },

    showAddDiv: function () {
        this.$el.find(".add_div").removeClass("hide");
        this.$el.find(".add").addClass("hide");
    },

    resetInput: function () {
        this.$el.find(".student_name").val("");
        this.$el.find(".student_age").val("");
        this.$el.find(".student_gender").val("");
        this.$el.find(".add_div").addClass("hide");
        this.$el.find(".add").removeClass("hide");
    },

    render: function () {
        this.addStudentToGroup();
        this.$el.find(".group_info").html("");
        this.$el.find(".group_info").append(this.group_template(this.model.toJSON()));
        for (var i = 0; i < this.model.getNumberOfStudents(); i++) {
            var student_controller = new StudentController(this.model.getStudent(i));
            this.$el.find(".group_list").append(student_controller.render());
        }
    },

    addStudentToGroup: function () {
        var student = new Student();

        student.set("name", this.$el.find(".student_name").val());
        student.set("age", this.$el.find(".student_age").val());
        student.set("gender", this.$el.find(".student_gender").val());

        this.model.addStudent(student);

        this.resetInput();
    }
});