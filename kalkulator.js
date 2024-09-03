function appendNumber(number) {
    let display = document.getElementById('display');
    display.value += number;
}

function appendOperator(operator) {
    let display = document.getElementById('display');
    display.value += operator;
}

function clearAll() {
    let display = document.getElementById('display');
    display.value = '';
}

function clearEntry() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

function toggleSign() {
    let display = document.getElementById('display');
    if (display.value.charAt(0) === '-') {
        display.value = display.value.slice(1);
    } else {
        display.value = '-' + display.value;
    }
}

function appendDot() {
    let display = document.getElementById('display');
    if (!display.value.includes('.')) {
        display.value += '.';
    }
}
