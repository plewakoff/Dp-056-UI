function CalculatorController (element) {
    var calculator = new Calculator(),
        inputs = {
            first_operand : element.getElementsByClassName("first_operand")[0],
            second_operand : element.getElementsByClassName("second_operand")[0],
            result : element.getElementsByClassName("result")[0]
        },
        buttons = {
            sum_button : element.getElementsByClassName("sum_button")[0],
            minus_button : element.getElementsByClassName("minus_button")[0],
            division_button : element.getElementsByClassName("division_button")[0],
            multiple_button : element.getElementsByClassName("multiple_button")[0]
        },
        operations = {
            "+" : "add",
            "-" : "sub",
            "/" : "div",
            "*" : "mul"
        };

    (function addEvents () {
        var key;
        for (key in buttons) {
            buttons[key].addEventListener("click", action, false);
        }
    })();

    function action (e) {
        calculator.action(inputs["first_operand"].value, inputs["second_operand"].value, showResult, operations[e.toElement.value]);
    }

    function showResult (result) {
        inputs["result"].value = result;
    }

    return this;
}