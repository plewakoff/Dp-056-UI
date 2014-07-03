function Facade () {
    var operations = {
        "add": "add.php",
        "sub": "sub.php",
        "mul": "mul.php",
        "div": "div.php"
    };

    this.action = function (first_operand, second_operand, callBackFunction, operation) {
        $.post(
            operations[operation],
            {
                operand1 : first_operand,
                operand2 : second_operand
            },
            callBackFunction
        );
    };

    return this;
}