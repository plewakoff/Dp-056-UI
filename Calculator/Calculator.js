function Calculator () {
    var facade = new Facade();

    this.action = function (first_operand, second_operand, callBackFunction, operation) {
        facade.action(first_operand, second_operand, callBackFunction, operation);
    };

    return this;
}