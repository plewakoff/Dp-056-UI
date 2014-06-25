function GroupController (DOM_element) {
    var group =  new Group(),
        add = document.getElementById("add"),
        add_div = document.getElementById("add_div"),
        cancel = document.getElementById("cancel"),
        add_student = document.getElementById("add_student"),
        student_name = document.getElementById("student_name"),
        student_age = document.getElementById("student_age"),
        student_gender = document.getElementById("student_gender");

    add.addEventListener("click", showAddDiv, false);
    cancel.addEventListener("click", resetInput, false);
    add_student.addEventListener("click", addStudentToGroup, false);
    add_student.addEventListener("click", toHTML, false);

    group.setName("Dp-056 JavaScript UI");
    DOM_element.innerHTML = group.getName() + ":</br>";

    function showAddDiv () {
        add_div.style.display = "inline";
        add.style.display = "none";
    }

    function resetInput () {
        student_name.value = "";
        student_age.value = "";
        student_gender.value = "";
        add_div.style.display = "none";
        add.style.display = "inline";
    }

    function addStudentToGroup () {
        var student = new Student();

        student.addAttribute("Name", student_name.value);
        student.addAttribute("Age", student_age.value);
        student.addAttribute("Gender", student_gender.value);

        group.addStudent(student);

        resetInput();
    }

    function toHTML() {
        DOM_element.innerHTML = group.getName() + ":</br>";
        for (var i = 0; i < group.getNumberOfStudents(); i++) {
            var student_controller = new StudentController(group.getStudent(i));
            DOM_element.appendChild(student_controller.toHTML());
        }
    }

    return this;
}