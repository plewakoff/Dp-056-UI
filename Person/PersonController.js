/*function PersonController () {
    var person = new Person(),
        save_button = document.getElementById("save_button"),
        person_info = $("#person_info"),
        person_table = document.getElementById("person_table"),
        person_template = _.template($("#person_template").html()),
        edit_button;

    save_button.addEventListener("click", savePerson, false);

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

        edit_button = person_info.find("#edit_button");
        edit_button.click(editPerson);
    }

    function editPerson () {
        save_button.style.display = "inline";
        person_table.style.display = "inline";
        person_info.html("");
    }
}*/
var PersonController = Backbone.View.extend({
    model: new Person(),
    el: "#person",
    events: {
        "click .save_button": "savePerson"
    },
    save_button: $(this.el).find(".save_button"),
    savePerson: function () {
        this.model.set({name: $(this.el).find(".name").val(),
            surname: $(this.el).find(".surname").val(),
            secondname: $(this.el).find(".secondname").val(),
            age: $(this.el).find(".age").val(),
            gender: $(this.el).find(".gender").val(),
            phone: $(this.el).find(".phone").val(),
            email: $(this.el).find(".email").val(),
            skype: $(this.el).find(".skype").val()});

        this.render();

        $(this.el).find(".save_button").css("display", "none");
        $(this.el).find(".person_table").css("display", "none");
    },
    render: function () {
        var person_template = _.template($("#person_template").html());
        $(this.el).find(".person_info").append(person_template(this.model.toJSON()));
        $(this.el).find(".edit_button").click(this.editPerson);
    },
    editPerson: function () {
        $(this.el).find(".save_button").css("display", "block");
        $(this.el).find(".person_table").css("display", "block");
        $(this.el).find(".person_info").html("");
    }
});