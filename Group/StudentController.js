function StudentController (student) {
    this.toHTML = function () {
        return $("<li>" + student.toString() + "</li>");
    };

    return this;
}
