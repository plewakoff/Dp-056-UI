function Facade () {
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

    this.action = function (first_operand, second_operand, callBackFunction, operation) {
        ajax.open("POST", operation + ".php", true);
        ajax.onreadystatechange = function () {
            if(ajax.readyState === 4 && ajax.status === 200) {
                callBackFunction(ajax.responseText);
            }
        };
        ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        ajax.send("operand1=" + first_operand + "&operand2=" + second_operand);
    };

    return this;
}