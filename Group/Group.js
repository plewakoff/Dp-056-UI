var Group = (function () {
    function Constructor () {
        var students = [],
            name;

        this.setName = function (value) {
            name = value;
        };

        this.getName = function () {
            return name;
        };

        this.addStudent = function (student) {
            students.push(student);
        };

        this.getStudent = function (i) {
            return students[i];
        };

        this.getNumberOfStudents = function () {
            return students.length;
        };

        return this;
    }

    return Constructor;
})();