var GroupController = Backbone.View.extend({
    group_template: _.template("<ul class='group_list'><%=name%></ul>"),

    collection: new Group(),

    elements: {},

    events: {
        "click .add": "showAddDiv",
        "click .cancel": "resetInput",
        "click .add_student": "render"
    },

    initialize: function () {
		this.initElements();
        this.$(".group_info").html(this.group_template(this.collection.toJSON()));
    },
	
	initElements: function () {
		this.elements = {
	        group_info: $(this.el).find(".group_info"),
            add: $(this.el).find(".add"),
            add_div: $(this.el).find(".add_div"),
            cancel: $(this.el).find(".cancel"),
            add_student: $(this.el).find(".add_student"),
            student_name: $(this.el).find(".student_name"),
            student_age: $(this.el).find(".student_age"),
            student_gender: $(this.el).find(".student_gender")
		};
	},

    showAddDiv: function () {
        this.elemets["add_div"].removeClass("hide");
        this.elemets["add"].addClass("hide");
    },

    resetInput: function () {
        this.elemets["student_name"].val("");
        this.elemets["student_age"].val("");
        this.elemets["student_gender"].val("");
        this.elemets["add_div"].addClass("hide");
        this.elemets["add"].removeClass("hide");
    },

    render: function () {
		
		this.collection("add", this.renderOne, this);
	
        //this.addStudentToGroup();
		
		this.elemets["add_div"].addClass("hide");
		
        this.elemets["group_info"].html(this.group_template(this.collection.toJSON()));
		
        /*for (var i = 0; i < this.model.getNumberOfStudents(); i++) {
            var student_controller = new StudentController(this.model.getStudent(i));
            this.$el.find(".group_list").append(student_controller.render());
        }*/
		
		//this.collection.each(this.renderOne, this);
    },
	
	renderOne: function (person) {
		var student_controller = new StudentController({model: person});
		this.$el.find(".group_list").append(student_controller.render());
	},

    addStudentToGroup: function () {
        var student = new Student();

        student.set("name", this.elemets["student_name"].val());
        student.set("age", this.elemets["student_age"].val());
        student.set("gender", this.elemets["student_gender"].val());

        this.collection.add(student);

        this.resetInput();
    }
});