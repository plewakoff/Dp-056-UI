var Poni = (function () {
    //private static
    var oxygen = 100;

    //private static
    function breath () {
        oxygen++;
    }

    function Constructor () {
        //private
        var name;

        //private
        function resetName() {
            name = "";
        }

        //public
        this.getName = function () {
            return name;
        };

        return this;
    }

    //public static
    Constructor.prototype.speed = 25;

    Constructor.prototype.run = function () {
        oxygen--;
        breath();
    };

    Constructor.eat = function () {
        this.run();
    };

    return Constructor;
})();