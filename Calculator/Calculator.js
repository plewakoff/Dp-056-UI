function Calculator () {
    var ajax = getAjax();

    function getAjax () {
        var ajax;
        if(XMLHttpRequest) {
            ajax = new XMLHttpRequest();
        } else {
            ajax = new ActiveXObject();
        }

        return ajax;
    }

    this.sum = function (first_operand, second_operand, func) {
        ajax.open("POST", "add.php", true);
        ajax.onreadystatechange = function () {
            if(ajax.readyState === 4 && ajax.status === 200) {
                func(ajax.responseText);
            }
        };
        ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        ajax.send("operand1=" + first_operand + "&operand2=" + second_operand);
    };

    this.minus = function (first_operand, second_operand, func) {
        ajax.open("POST", "sub.php", true);
        ajax.onreadystatechange = function () {
            if(ajax.readyState === 4 && ajax.status === 200) {
                func(ajax.responseText);
            }
        };
        ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        ajax.send("operand1=" + first_operand + "&operand2=" + second_operand);
    };

    this.multiplication = function (first_operand, second_operand, func) {
        ajax.open("POST", "mul.php", true);
        ajax.onreadystatechange = function () {
            if(ajax.readyState === 4 && ajax.status === 200) {
                func(ajax.responseText);
            }
        };
        ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        ajax.send("operand1=" + first_operand + "&operand2=" + second_operand);
    };

    this.division = function (first_operand, second_operand, func) {
        ajax.open("POST", "div.php", true);
        ajax.onreadystatechange = function () {
            if(ajax.readyState === 4 && ajax.status === 200) {
                func(ajax.responseText);
            }
        };
        ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        ajax.send("operand1=" + first_operand + "&operand2=" + second_operand);
    };

    return this;
}