function Calculator () {
    var ajax = getAjax(),
        result;

    function getAjax () {
        var ajax;
        if(XMLHttpRequest) {
            ajax = new XMLHttpRequest();
        } else {
            ajax = new ActiveXObject();
        }

        return ajax;
    }

    this.sum = function (first_operand, second_operand) {
        ajax.open("POST", "add.php", false);
        ajax.onreadystatechange = function () {
            if(ajax.readyState === 4 && ajax.status === 200) {
                result = ajax.responseText;
            }
        };
        ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        ajax.send("operand1=" + first_operand + "&operand2=" + second_operand);
        return result;
    };

    this.minus = function (first_operand, second_operand) {
        ajax.open("POST", "sub.php", false);
        ajax.onreadystatechange = function () {
            if(ajax.readyState === 4 && ajax.status === 200) {
                result = ajax.responseText;
            }
        };
        ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        ajax.send("operand1=" + first_operand + "&operand2=" + second_operand);
        return result;
    };

    this.multiplication = function (first_operand, second_operand) {
        ajax.open("POST", "mul.php", false);
        ajax.onreadystatechange = function () {
            if(ajax.readyState === 4 && ajax.status === 200) {
                result = ajax.responseText;
            }
        };
        ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        ajax.send("operand1=" + first_operand + "&operand2=" + second_operand);
        return result;
    };

    this.division = function (first_operand, second_operand) {
        ajax.open("POST", "div.php", false);
        ajax.onreadystatechange = function () {
            if(ajax.readyState === 4 && ajax.status === 200) {
                result = ajax.responseText;
            }
        };
        ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        ajax.send("operand1=" + first_operand + "&operand2=" + second_operand);
        return result;
    };

    return this;
}