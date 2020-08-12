console.log("calma e paciencia. Teste hipóteses. Erros são oportunidades de crescimento")

const previousOperandText = document.querySelector(".previous-OP");
const currentOperandText = document.querySelector(".current-OP");

const numberButtons = document.querySelectorAll(".number");
const operationButtons = document.querySelectorAll(".operation");
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
        if (currentValue.includes(".") && e.target.id === "."){
            return // não está desabiltinado o botão, mas escondendo os pontos multiplos
        }
        currentValue = input;
        updateDisplay()
    })
})

operationButtons.forEach(button =>{
    button.addEventListener("click", (e) =>{
        operador = e.target.id
        historicValue = input
        currentValue = ""
        input = ""
    })
})

allClear.addEventListener("click", clearAll);
clearOne.addEventListener("click", deleteOne)
equal.addEventListener("click", calculate)

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
    input = input.slice(0, input.length-1) // não funciona!!!
    currentValue = input;
    updateDisplay()
}

function calculate(e){
    console.log(e.target.id)
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
            historicValue = (alpha / beta);
            input = historicValue;
            currentValue = "";
            operador = "";
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



