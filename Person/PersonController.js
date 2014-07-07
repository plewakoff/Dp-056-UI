/*function PersonController () {
    var person = new Person(),
        save_button = document.getElementById("save_button"),
>>>>>>> e6cb973e62da97af3d8a15ab07715966b6200564
        person_info = $("#person_info"),
        person_table = document.getElementById("person_table"),
        person_template = _.template($("#person_template").html()),
        edit_button;

    save_button.addEventListener("click", savePerson, false);
<<<<<<< HEAD
    
=======
>>>>>>> e6cb973e62da97af3d8a15ab07715966b6200564

    function savePerson () {
        var name = document.getElementById("name").value,
            age = document.getElementById("age").value,
            gender = document.getElementById("gender").value,
            surname = document.getElementById("surname").value,
            secondname = document.getElementById("secondname").value,
            phone = document.getElementById("phone").value,
            email  = document.getElementById("email").value,
            skype = document.getElementById("skype").value;

        person.set({name: name,
                    surname: surname,
                    secondname: secondname,
                    age: age,
                    gender: gender,
                    phone: phone,
                    email: email,
                    skype: skype});

        toHTML();
		

        save_button.style.display = "none";
        person_table.style.display = "none";
    }

    function toHTML () {
        person_info.append(person_template(person.toJSON()));
<<<<<<< HEAD
		$(".edit_button").click(editPerson);
=======

        edit_button = person_info.find("#edit_button");
        edit_button.click(editPerson);
>>>>>>> e6cb973e62da97af3d8a15ab07715966b6200564
    }

    function editPerson () {
        save_button.style.display = "inline";
        person_table.style.display = "inline";
        person_info.html("");
    }
}*/
var PersonController = Backbone.View.extend({
    model: new Person(),
	
	person_template: _.template($("#person_template").html()),
    
	events: {
        "click .save_button": "savePerson"
    },
    
	savePerson: function () {
        this.model.set({
			name: this.$el.find(".name").val(),
            surname: this.$el.find(".surname").val(),
            secondname: this.$el.find(".secondname").val(),
            age: $(this.el).find(".age").val(),
            gender: $(this.el).find(".gender").val(),
            phone: $(this.el).find(".phone").val(),
            email: $(this.el).find(".email").val(),
            skype: $(this.el).find(".skype").val()
		});
//hash of elements or array
        this.render();
//use add class
        $(this.el).find(".save_button").css("display", "none");
        $(this.el).find(".person_table").css("display", "none");
    },
    
	render: function () {
        $(this.el).find(".person_info").append(this.person_template(this.model.toJSON()));
        $(this.el).find(".edit_button").click(this.editPerson);
    },
    
	editPerson: function () {
        $(".save_button").css("display", "block");
        $(".person_table").css("display", "block");
        $(".person_info").html("");
    }
});
