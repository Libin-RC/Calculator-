let input = '';

function clickButton(value) {
    if (value === '.' && input.includes('.')) return;
    input += value;
    updateInput();
}

function clearInput() {
    input = '';
    updateInput();
}

function calculate() {
    try {
        input = eval(input);
    } catch {
        input = 'Error';
    }
    updateInput();
}

function updateInput() {
    document.getElementById("inp").value = input;
}
