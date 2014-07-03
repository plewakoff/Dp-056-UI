function CalculatorController ($element) {
    var calculator = new Calculator(),
        $inputs = {
            $first_operand : $element.find(".first_operand"),
            $second_operand : $element.find(".second_operand"),
            $result : $element.find(".result")
        },
        $buttons = {
            $sum_button : $element.find(".sum_button"),
            $minus_button : $element.find(".minus_button"),
            $division_button : $element.find(".division_button"),
            $multiple_button : $element.find(".multiple_button")
        },
        operations = {
            "+" : "add",
            "-" : "sub",
            "/" : "div",
            "*" : "mul"
        };

    addEvents();

    function addEvents () {
        $buttons["$sum_button"].click(add);
        $buttons["$minus_button"].click(sub);
        $buttons["$division_button"].click(div);
        $buttons["$multiple_button"].click(mul);
    }

    function add () {
        calculator.add($inputs["$first_operand"].val(), $inputs["$second_operand"].val(), showResult);
    }

    function sub () {
        calculator.sub($inputs["$first_operand"].val(), $inputs["$second_operand"].val(), showResult);
    }

    function div () {
        calculator.div($inputs["$first_operand"].val(), $inputs["$second_operand"].val(), showResult);
    }

    function mul () {
        calculator.mul($inputs["$first_operand"].val(), $inputs["$second_operand"].val(), showResult);
    }

    function showResult (result) {
        $inputs["$result"].val(result);
    }

    return this;
}