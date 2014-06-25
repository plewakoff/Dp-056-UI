function Calculator () {
    this.sum = function (first_operand, second_operand) {
        return first_operand + second_operand;
    };

    this.minus = function (first_operand, second_operand) {
        return first_operand - second_operand;
    };

    this.multiplication = function (first_operand, second_operand) {
        return first_operand * second_operand;
    };

    this.division = function (first_operand, second_operand) {
        return first_operand / second_operand;
    };

    return this;
}