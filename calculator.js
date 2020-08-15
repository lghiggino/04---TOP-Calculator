console.log("can you see the groovy effect between the buttons?");

// Buttons
const previousOperandText = document.querySelector(".previous-OP");
const currentOperandText = document.querySelector(".current-OP");
const numberButtons = document.querySelectorAll(".number");
const operationButtons = document.querySelectorAll(".operation");
const decimalButton = document.querySelector(".decimal");
const signButton = document.querySelector(".sign");
const allClear = document.querySelector(".all-clear");
const clearOne  = document.querySelector(".clear");
const equal = document.querySelector(".equal");

// Variables
let input = "";
let historicValue = "";
let currentValue = "";
let operador = "";


// Event Listeners
numberButtons.forEach(button => {
    button.addEventListener("click", (e) =>{
        input += e.target.id;
        currentValue = input;
        updateDisplay()
    })
})


operationButtons.forEach(button =>{
    button.addEventListener("click", (e) =>{
        switch(true){
            case operador === "*" && input !== "":
            case operador === "/" && input !== "":
            case operador === "+" && input !== "":
            case operador === "-" && input !== "":
            case operador === "%" && input !== "": //REFATORAR ISSO AQUI COMO UMA FUNÇÃO QUE RETORNA TRUE OR FALSE?
                calculate();
                break;

            case operador === "*" && input == "":
            case operador === "/" && input == "":
            case operador === "+" && input == "":
            case operador === "-" && input == "":
            case operador === "%" && input == "":
                return;
        }
        operador = e.target.id;
        historicValue = input;
        currentValue = "";
        input = "";
    })
})

allClear.addEventListener("click", clearAll);
clearOne.addEventListener("click", deleteOne);
equal.addEventListener("click", calculate);
decimalButton.addEventListener("click", addDot);
signButton.addEventListener("click", addMinus);
document.addEventListener("keydown", handleKeyPress);


// Functions
function updateDisplay (){
    previousOperandText.textContent = `${historicValue} ${operador} `;
    currentOperandText.textContent = ` ${currentValue}`;
}

function clearAll(){
    input = "";
    historicValue = "";
    currentValue = "";
    operador = "";
    updateDisplay()
}

function deleteOne(){
    input = input.slice(0, input.length-1);
    currentValue = input;
    updateDisplay();
}

function calculate(){
    let alpha = parseFloat(historicValue);
    let beta = parseFloat(currentValue);
    //console.log(`historicValue é ${alpha}, currentValue é ${beta}, operador é ${operador}`);
    switch(operador){
        case "+":
            historicValue = (alpha + beta);
            input = historicValue;
            currentValue = "";
            operador = "";
            updateDisplay();
        break;

        case "-":
            historicValue = (alpha - beta);
            input = historicValue;
            currentValue = "";
            operador = "";
            updateDisplay();
        break;

        case "*":
            historicValue = (alpha * beta);
            input = historicValue;
            currentValue = "";
            operador = "";
            updateDisplay();
        break;

        case "/":
            if (beta == 0){
                historicValue = "uh! To infinity and beyond!";
                input = 0;
                currentValue = "";
                operador = "";
                updateDisplay();
            }else {
            historicValue = (alpha / beta);
            input = historicValue;
            currentValue = "";
            operador = "";
            }
            updateDisplay();
        break;

        case "%":
            historicValue = ((alpha / 100) * beta).toFixed(3);
            input = historicValue;
            currentValue = "";
            operador = "";
            updateDisplay();
        break;
    }
}

function addDot(){
    if (input.includes(".")){ 
        return;
    }else{
        input += ".";
        currentValue = input;
        updateDisplay();
        }
}

function addMinus(){
    if(input.includes("-")){
        input = input.slice(1);
        currentValue = input;
        updateDisplay();
    } else{
        input = "-"+input;
        currentValue = input;
        updateDisplay();
        }
}

//789+11let key = 0;

function handleKeyPress(e) {
    key = e.key;
    reg = /[\+\-xX\÷0-9\/\*=\.]|Enter|Backspace|Delete|Shift/i; 

    switch (reg.test(key)) {
        case key === "Shift":
            break;
        case key === "*":
        case key === "x":
        case key === "X":
            if(operador == ""){
                operador = "*"
                historicValue = input;
                currentValue = "";
                input = "";
                updateDisplay();
            } else if (operador != ""){
                calculate();
                operador = "*";
                currentValue = "";
                input = ""
            }
            break;
        case key === "+":
            if(operador == ""){
                operador = "+"
                historicValue = input;
                currentValue = "";
                input = "";
                updateDisplay();
            } else if (operador != ""){
                calculate();
                operador = "+";
                currentValue = "";
                input = ""
            }
            break;
        case key === "-":
            if(operador == ""){
                operador = "-"
                historicValue = input;
                currentValue = "";
                input = "";
                updateDisplay();
            }else if (operador != ""){
                calculate();
                operador = "-";
                currentValue = "";
                input = ""
            }
            break;
        case key === "\/":
            if(operador == ""){
                operador = "/"
                historicValue = input;
                currentValue = "";
                input = "";
                updateDisplay();
            }else if (operador != ""){
                calculate();
                operador = "/";
                currentValue = "";
                input = ""
            }
            break;
        case key === "=":
            currentValue = input;
            calculate();
            input = historicValue;
            break;
        case key === "Enter":
            currentValue = input;
            calculate();
            input = historicValue;
            break;
        case key === ".":
            addDot();
            updateDisplay();
            break;
        case key === "Backspace":
            deleteOne();
            updateDisplay();
            break;
        case key === "Delete":
            clearAll();
            break;
        case /[0-9]/.test(key):
            input += key;
            currentValue = input;
            updateDisplay();
            break;
        default:
            break;
    }
}
