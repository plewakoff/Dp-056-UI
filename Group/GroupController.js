function GroupController (element) {
    var group =  new Group(),
        group_info = element.find(".group_info"),
        add = element.find(".add"),
        add_div = element.find(".add_div"),
        cancel = element.find(".cancel"),
        add_student = element.find(".add_student"),
        student_name = element.find(".student_name"),
        student_age = element.find(".student_age"),
        student_gender = element.find(".student_gender");

    $(add).on("click", showAddDiv);
    $(cancel).on("click", resetInput);
    $(add_student).on("click", addStudentToGroup)
                  .on("click", toHTML);

    group.setName("Dp-056 JavaScript UI");
    group_info.html(group.getName());

    function showAddDiv () {
        add_div.css("display", "block");
        add.css("display", "none");
    }

    function resetInput () {
        student_name.val("");
        student_age.val("");
        student_gender.val("");
        add_div.css("display", "none");
        add.css("display", "block");
    }

    function addStudentToGroup () {
        var student = new Student();

        student.addAttribute("Name", student_name.val());
        student.addAttribute("Age", student_age.val());
        student.addAttribute("Gender", student_gender.val());

        group.addStudent(student);

        resetInput();
    }

    function toHTML() {
        group_info.html(group.getName());
        for (var i = 0; i < group.getNumberOfStudents(); i++) {
            var student_controller = new StudentController(group.getStudent(i));
            group_info.append(student_controller.toHTML());
        }
    }

    return this;
}