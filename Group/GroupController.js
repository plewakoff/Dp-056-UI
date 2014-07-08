var GroupController = Backbone.View.extend({
    group_template: _.template("<ul class='group_list'><%=name%></ul>"),

    collection: new Group(),

    elements: {},

    events: {
        "click .add": "showAddDiv",
        "click .cancel": "resetInput",
        "click .add_student": "addStudentToGroup"
    },

    initialize: function () {
		this.initElements();

        this.collection.on("add", this.renderOne, this);

        this.render();
    },
	
	initElements: function () {
		this.elements = {
	        group_info: this.$el.find(".group_info"),
            add: this.$el.find(".add"),
            add_div: this.$el.find(".add_div"),
            cancel: this.$el.find(".cancel"),
            add_student: this.$el.find(".add_student"),
            student_name: this.$el.find(".student_name"),
            student_age: this.$el.find(".student_age"),
            student_gender: this.$el.find(".student_gender")
		};
	},

    showAddDiv: function () {
        this.elements["add_div"].removeClass("hide");
        this.elements["add"].addClass("hide");
    },

    resetInput: function () {
        this.elements["student_name"].val("");
        this.elements["student_age"].val("");
        this.elements["student_gender"].val("");
        this.elements["add_div"].addClass("hide");
        this.elements["add"].removeClass("hide");
    },

    addStudentToGroup: function () {
        var student = new Student();

        student.set("name", this.elements["student_name"].val());
        student.set("age", this.elements["student_age"].val());
        student.set("gender", this.elements["student_gender"].val());

        this.collection.add(student);
    },

    render: function () {
        this.elements["group_info"].html(this.group_template(this.collection.getName()));
    },
	
	renderOne: function (student) {
		var student_controller = new StudentController({model: student});
		this.$el.find(".group_list").append(student_controller.render());

        this.elements["add_div"].addClass("hide");
        this.resetInput();
	}
});