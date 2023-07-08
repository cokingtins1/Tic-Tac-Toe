// Constants must be defined before new Calculator
const numberButtons = document.querySelectorAll('[data-number]') //select all buttons with data attribut "data-number"
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')


class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear() //call clear function when new calculator is created
    
    }

    clear(){
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined

    }

    delete(){
        if(currentOperandTextElement !=='') {
            return
        }
        else{
        this.currentOperand = this.currentOperand.toString().slice(0,-1)}
    }

    appendNumber(number){
        if (number ==='.' && this.currentOperand.includes('.')) return //prevent user from adding multiple periods
        
        this.currentOperand = this.currentOperand.toString() + number.toString() //add number as string instead of adding together (11 vs 2)
    }

    chooseOperation(operation){
        // Check if previous operand exists
        if (this.currentOperand ==='') return
        if (this.previousOperand !== ''){
            this.compute
        }
        
        this.operation = operation
        this.previousOperand = this.currentOperand.toString() + ' ' + operation.toString()
        this.currentOperand = ''

    }

    compute (){
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        switch (this.operation) {
            case '+': 
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case '*':
                computation = prev * current
                break
            case '/':
                computation = prev / current
                break
            default:
                return
        }
        
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
    }

    getDisplayNumber(number){
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigits)) {
            integerDisplay = ''
        } else {
            integerDisplay = integerDigits.toLocaleString('en', {
                maximumFractionDigits: 0})
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else{
                return integerDisplay
            }
    }  

    updateDisplay(){
        this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand)
        this.previousOperandTextElement.innerText = this.previousOperand

    }
}

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement) //with blank calculator, previous and current are nothing ('')

// Add event listener to obtain button value when clicked
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

allClearButton.addEventListener('click', () => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', () => {
    calculator.delete()
    calculator.updateDisplay()
})

equalsButton.addEventListener('click', () => {
    calculator.compute()
    calculator.updateDisplay()
    
})

