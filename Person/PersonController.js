function PersonController () {
    var save_button = document.getElementById("save_button"),
        person_info = $("#person_info"),
        person_table = document.getElementById("person_table"),
        person = new Person(),
        person_template = _.template($("#person_template").html());

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

        person.addAttribute("name", name);
        person.addAttribute("surname", surname);
        person.addAttribute("secondname", secondname);
        person.addAttribute("age", age);
        person.addAttribute("gender", gender);
        person.addAttribute("phone", phone);
        person.addAttribute("email", email);
        person.addAttribute("skype", skype);

        toHTML();
		

        save_button.style.display = "none";
        person_table.style.display = "none";
    }

    function toHTML () {
        person_info.append(person_template(person.toJSON()));
		$(".edit_button").click(editPerson);
    }

    function editPerson () {
        save_button.style.display = "inline";
        person_table.style.display = "inline";
        person_info.html("");
    }
}