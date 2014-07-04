function PersonController () {
    var save_button = document.getElementById("save_button"),
        edit_button = document.getElementById("edit_button"),
        person_info = $("#person_info"),
        person_table = document.getElementById("person_table"),
        person = new Person(),
        person_template = _.template($("#person_template").html());

    save_button.addEventListener("click", savePerson, false);
    edit_button.addEventListener("click", editPerson, false);

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
        person_info.style.display = "inline";
        edit_button.style.display = "block";
    }

    function toHTML () {
        var person_hash = {},
            key;

        person_info.innerHTML = "";
        person_hash = person.toJSON();

        person_info.append(person_template(person_hash));

        /*for (key in person_hash) {
            var div = document.createElement("div"),
                br = document.createElement("br");

            div.innerHTML = key + ": " + person_hash[key];

            person_info.appendChild(div);
            person_info.appendChild(br);
        }*/
    }

    function editPerson () {
        save_button.style.display = "inline";
        person_table.style.display = "inline";
        person_info.html("");
        edit_button.style.display = "none";
    }
}