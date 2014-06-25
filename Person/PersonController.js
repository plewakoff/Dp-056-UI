function PersonController () {
    var save_button = document.getElementById("save_button"),
        edit_button = document.getElementById("edit_button"),
        person_info = document.getElementById("person_info"),
        person_table = document.getElementById("person_table"),
        person = new Person();

    save_button.addEventListener("click", savePerson, false);
    edit_button.addEventListener("click", editPerson, false);

    function savePerson () {
        var name = document.getElementById("name").value,
            age = document.getElementById("age").value,
            gender = document.getElementById("gender").value,
            surname = document.getElementById("surname").value,
            patronymic = document.getElementById("patronymic").value,
            phone = document.getElementById("phone").value,
            email  = document.getElementById("email").value,
            skype = document.getElementById("skype").value;

        person.addAttribute("Name", name);
        person.addAttribute("Surname", surname);
        person.addAttribute("Patronymic", patronymic);
        person.addAttribute("Age", age);
        person.addAttribute("Gender", gender);
        person.addAttribute("Phone", phone);
        person.addAttribute("Email", email);
        person.addAttribute("Skype", skype);

        toHTML();

        save_button.style.display = "none";
        person_table.style.display = "none";
        person_info.style.display = "inline";
        edit_button.style.display = "inline";
    }

    function toHTML () {
        var person_hash = {},
            key;

        person_info.innerHTML = "";
        person_hash = person.toJSON();

        for (key in person_hash) {
            var div = document.createElement("div"),
                br = document.createElement("br");

            div.innerHTML = key + ": " + person_hash[key];

            person_info.appendChild(div);
            person_info.appendChild(br);
        }
    }

    function editPerson () {
        save_button.style.display = "inline";
        person_table.style.display = "inline";
        person_info.style.display = "none";
        edit_button.style.display = "none";
    }
}