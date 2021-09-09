const errors = document.getElementById('errors');
class Calculator {

    static addTogether(oneOperand, twoOperand) {
        return oneOperand + twoOperand;
    }

    static subtract(oneOperand, twoOperand) {
        return oneOperand - twoOperand;
    }

    static divide(oneOperand, twoOperand) {
        return oneOperand / twoOperand;
    }

    static multiply(oneOperand, twoOperand) {
        return oneOperand * twoOperand;
    }
}

function getNumber() {
    let operands = [];
    let oneOperand = document.getElementById('oneNumber').value;
    if (checkedNumber(oneOperand) === true) {
        operands.push(Number(oneOperand));
    };

    let twoOperand = document.getElementById('twoNumber').value;
    if (checkedNumber(twoOperand) === true) {
        operands.push(Number(twoOperand));
    };

    console.log(operands);
    return operands;
}

function checkedNumber(num) {
    if (num) {
        return true;
    } else {
        errors.innerHTML = "Введите оба числа";
    }
}

function cleanErrors() {
    errors.innerHTML = "";
}

function cleanInputs() {
    document.getElementById('twoNumber').value = "";
    document.getElementById('oneNumber').value = "";
}

function start(event) {

    let num = getNumber();
    console.log(num);

    if (num[0] !== "" && num[1] !== "") {

        switch (event) {
            case 'addTogether':
                document.getElementById('derivation-add-together').innerHTML = Calculator.addTogether(num[0], num[1]);
                break;

            case 'subtract':
                document.getElementById('derivation-subtract').innerHTML = Calculator.subtract(num[0], num[1]);
                break;

            case 'divide':
                if (num[1] === 0) {
                    errors.innerHTML = "Делить на 0 нельзя";
                } else {
                    document.getElementById('derivation-divide').innerHTML = Calculator.divide(num[0], num[1]);
                }
                break;

            case 'multiply':
                document.getElementById('derivation-multiply').innerHTML = Calculator.multiply(num[0], num[1]);
                break;
        }
    }
}