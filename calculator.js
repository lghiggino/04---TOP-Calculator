console.log("calma e paciencia. Teste hipóteses. Erros são oportunidades de crescimento")
console.log("hello")

const previousOperandText = document.querySelector(".previous-OP");
const currentOperandText = document.querySelector(".current-OP");

const numberButtons = document.querySelectorAll(".number");
const operationButtons = document.querySelectorAll(".operation");
const decimalButton = document.querySelector(".decimal");
const signButton = document.querySelector(".sign");
const allClear = document.querySelector(".all-clear");
const clearOne  = document.querySelector(".clear");
const equal = document.querySelector(".equal");

let input = "";
let historicValue = "";
let currentValue = "";
let operador = "";



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
            case operador === "*":
            case operador === "/":
            case operador === "+":
            case operador === "-":
            case operador === "%":
                calculate();
                break;
        }
        operador = e.target.id
        historicValue = input
        currentValue = ""
        input = ""
    })
})

allClear.addEventListener("click", clearAll);
clearOne.addEventListener("click", deleteOne)
equal.addEventListener("click", calculate)
decimalButton.addEventListener("click", addDot);
signButton.addEventListener("click", addMinus);
signButton.addEventListener("mouseover")

//functions
function updateDisplay (){
    previousOperandText.textContent = `${historicValue} ${operador}`
    currentOperandText.textContent = `${currentValue}`
}

function clearAll(){
    input = "";
    historicValue = "";
    currentValue = "";
    operador = "";
    updateDisplay()
}

function deleteOne(){
    input = input.slice(0, input.length-1) 
    currentValue = input;
    updateDisplay()
}

function calculate(){
    let alpha = parseFloat(historicValue);
    let beta = parseFloat(currentValue);
    console.log(alpha,beta)
    switch(operador){
        case "+":
            historicValue = (alpha + beta);
            input = historicValue;
            currentValue = "";
            operador = "";
            updateDisplay()
        break;

        case "-":
            historicValue = (alpha - beta);
            input = historicValue;
            currentValue = "";
            operador = "";
            updateDisplay()
        break;

        case "*":
            historicValue = (alpha * beta);
            input = historicValue;
            currentValue = "";
            operador = "";
            updateDisplay()
        break;

        case "/":
            if (beta == 0){
                historicValue = "uh! Thats infity for you."
                input = 0;
                currentValue = "";
                operador = "";
                updateDisplay
            }else {
            historicValue = (alpha / beta);
            input = historicValue;
            currentValue = "";
            operador = "";
            }
            updateDisplay()
        break;

        case "%":
            historicValue = ((alpha / 100) * beta).toFixed(3);
            input = historicValue;
            currentValue = "";
            operador = "";
            updateDisplay()
        break;
    }
}

function addDot(){
    if (input.includes(".")){ 
        return 
    }else{
        input += ".";
        }
}

function addMinus(){
    if(input.includes("-")){
        input = input.slice(1);
        updateDisplay();
    } else{
        input = "-"+input
        currentValue = input;
        updateDisplay();
        }
}

