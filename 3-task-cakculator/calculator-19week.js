//const result = document.getElementById('result');
// const number1 = document.getElementById('oneNumber');
// const number2 = document.getElementById('twoNumber');
const errors = document.getElementById('errors');

class Calculator {
    // constructor(number1, number2) {
    //     this.oneNumber = number1;
    //     this.twoNumber = number2;
    // }

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
    // if (checkedNumber(oneOperand) === false) {
    //     return false;
    // };
    operands.push(Number(oneOperand));

    let twoOperand = document.getElementById('twoNumber').value;
    //checkedNumber(twoOperand);
    operands.push(Number(twoOperand));
    return operands;
}

// function checkedNumber(num) {
//     if (!num) {
//         errors.innerHTML = "Введите оба числа";

//     }
//     return false;
// }

function cleanErrors() {
    errors.innerHTML = "";
}

//checkedNumber(5, true);


function start(event) {

    let num = getNumber();
    console.log(num);

        switch (event) {
            case 'addTogether':
                document.getElementById('derivation-add-together').innerHTML = Calculator.addTogether(num[0], num[1]);
                break;

            case 'subtract':
                document.getElementById('derivation-subtract').innerHTML = Calculator.subtract(num[0], num[1]);
                break;

            case 'divide':
                document.getElementById('derivation-divide').innerHTML = Calculator.divide(num[0], num[1]);
                break;

            case 'multiply':
                document.getElementById('derivation-multiply').innerHTML = Calculator.multiply(num[0], num[1]);
                break;
        }
}