function CalculatorController (element) {
    var calculator = new Calculator(),
        inputs =
        {
            first_operand : element.getElementsByClassName("first_operand")[0],
            second_operand : element.getElementsByClassName("second_operand")[0],
            result : element.getElementsByClassName("result")[0]
        },
        buttons =
        {
            sum_button : element.getElementsByClassName("sum_button")[0],
            minus_button : element.getElementsByClassName("minus_button")[0],
            division_button : element.getElementsByClassName("division_button")[0],
            multiple_button : element.getElementsByClassName("multiple_button")[0]
        };

    buttons["sum_button"].addEventListener("click", sum, false);
    buttons["minus_button"].addEventListener("click", minus, false);
    buttons["division_button"].addEventListener("click", division, false);
    buttons["multiple_button"].addEventListener("click", multiple, false);

    function sum () {
        inputs["result"].value = calculator.sum(+inputs["first_operand"].value, +inputs["second_operand"].value);
    }

    function minus () {
        inputs["result"].value = calculator.minus(inputs["first_operand"].value, inputs["second_operand"].value);
    }

    function division () {
        inputs["result"].value = calculator.division(inputs["first_operand"].value, inputs["second_operand"].value);
    }

    function multiple () {
        inputs["result"].value = calculator.multiplication(inputs["first_operand"].value, inputs["second_operand"].value);
    }

    return this;
}