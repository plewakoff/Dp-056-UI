function CalculatorController (element) {
    var calculator = new Calculator(),
        inputs = {
            first_operand : element.find(".first_operand"),
            second_operand : element.find(".second_operand"),
            result : element.find(".result")
        },
        buttons = {
            sum_button : element.find(".sum_button"),
            minus_button : element.find(".minus_button"),
            division_button : element.find(".division_button"),
            multiple_button : element.find(".multiple_button")
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
            buttons[key].click(action);
        }
    })();

    function action (e) {
        calculator.action(inputs["first_operand"].val(), inputs["second_operand"].val(), showResult, operations[e.toElement.value]);
    }

    function showResult (result) {
        inputs["result"].val(result);
    }

    return this;
}