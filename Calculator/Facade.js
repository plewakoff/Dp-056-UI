function Facade () {
    this.action = function (first_operand, second_operand, callBackFunction, operation) {
        $.post(
            operation + ".php",
            {
                operand1 : first_operand,
                operand2 : second_operand
            },
            callBackFunction
        );
    };

    return this;
}