let display = document.getElementById("display");
let currentInput = "";

function appendNumber(num) {
    if (currentInput === "0") currentInput = "";
    currentInput += num;
    display.innerText = currentInput;
}

function appendOperator(op) {
    if (op === "%") {
        currentInput += "%";
    } else {
        currentInput += op;
    }
    display.innerText = currentInput;
}

function clearDisplay() {
    currentInput = "";
    display.innerText = "0";
}

function calculate() {
    try {
        let expression = currentInput.replace(/×/g, "*").replace(/÷/g, "/");

        expression = expression.replace(/(\d+(\.\d+)?)%/g, (match, number) => {
            return "(" + number + "/100)";
        });

        let result = eval(expression);
        display.innerText = result;
        currentInput = result.toString();
    } catch {
        display.innerText = "Erreur";
        currentInput = "";
    }
}
