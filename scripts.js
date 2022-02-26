//Defaults
let firstOperand = ''
let secondOperand = ''
let currentOperation = null
let resetOutput = false


//Buttons

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.getElementById('equalsBtn');
const deleteButton = document.getElementById('deleteBtn');
const clearButton = document.getElementById('clearBtn');
const decButton = document.getElementById('decimalBtn')
const prevInput = document.getElementById('previousInput');
const currentInput = document.getElementById('currentInput');


//and their Functionality

numberButtons.forEach((button) => 
    button.addEventListener('click', () => appendNum(button.textContent))
)

operationButtons.forEach((button) => 
    button.addEventListener('click', () => chooseOperation(button.textContent))
)

equalsButton.addEventListener('click', evaluate)
deleteButton.addEventListener('click', remove)
clearButton.addEventListener('click', clear)
decButton.addEventListener('click', decimal)


//Functions

function remove(){
    currentInput.textContent = currentInput.textContent.toString().slice(0,-1)
}

function clear() {
    currentInput.textContent = '0'
    prevInput.textContent = ''
    firstOperand = ''
    secondOperand= ''
    currentOperation = null
}

function decimal(){
    if (resetOutput) resetScreen()
    if (currentInput.textContent === '')
        currentInput.textContent = '0'
    if (currentInput.textContent.includes('.')) return
        currentInput.textContent += '.'
}


function appendNum(number){
   if (currentInput.textContent === '0' || resetOutput)
        resetScreen()
    currentInput.textContent += number
}

function resetScreen(){
    currentInput.textContent = ''
    resetOutput = false
}

function evaluate(){
    if (currentOperation === null || resetOutput) return
    if (currentOperation === '÷' && currentInput.textContent === '0'){
        alert("I think not")
        return
    }

    secondOperand = currentInput.textContent
    currentInput.textContent = rounded(
        operate(currentOperation, firstOperand, secondOperand)
    )

    prevInput.textContent = `${firstOperand} ${currentOperation} ${secondOperand} = `
    currentOperation = null
}


function chooseOperation(operator) {
    if (currentOperation !== null) evaluate()
    firstOperand = currentInput.textContent
    currentOperation=operator
    prevInput.textContent = `${firstOperand} ${operator}`
    resetOutput = true
}

function rounded(number){
   return Math.round(number*100)/100
}


function add(a,b) {
	return a + b
};

function subtract(a,b) {
	return a - b
};

function multiply (a,b) {
    return a * b
};

function divide(a,b) {
    return a / b
};


function operate (operator, a, b) {
    a = Number(a)
    b = Number(b)
    switch (operator) {
      case '+':
        return add(a, b)
      case '−':
        return subtract(a, b)
      case '×':
        return multiply(a, b)
      case '÷':
        if (b === 0) return null
        else return divide(a, b)
      default:
        return null
}
}