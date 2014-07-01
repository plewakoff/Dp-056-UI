var StudentController = (function () {
    function Constructor (student) {
        this.toHTML = function () {
            var il = document.createElement("il");

            il.innerHTML = student.toString() + "</br>";

            return il;
        };

        return this;
    }

    return Constructor;
})();