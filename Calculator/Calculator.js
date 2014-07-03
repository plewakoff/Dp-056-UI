function Calculator () {
    var facade = new Facade();

    this.add = function (first_operand, second_operand, callBackFunction) {
        facade.action(first_operand, second_operand, callBackFunction, "add");
    };

    this.sub = function (first_operand, second_operand, callBackFunction) {
        facade.action(first_operand, second_operand, callBackFunction, "sub");
    };

    this.div = function (first_operand, second_operand, callBackFunction) {
        facade.action(first_operand, second_operand, callBackFunction, "div");
    };

    this.mul = function (first_operand, second_operand, callBackFunction) {
        facade.action(first_operand, second_operand, callBackFunction, "mul");
    };

    return this;
}