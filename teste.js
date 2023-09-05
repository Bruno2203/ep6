const previousOperationsText = document.querySelector("#previous-operation")
const currentOperationsText = document.querySelector("#current-operation")
const button = document.querySelectorAll("#button_conteiner button")

class calculator{
    constructor(previousOperationsText, currentOperationsText) {
        this.previousOperationsText = previousOperationsText
        this.currentOperationsText = currentOperationsText
        this.currentOperation = ""    
    }
    //add umdigito para fazer alguma coisa
    addDigit(digit) {

        this.currentOperation = digit
        this.updateScreen()
    }

    //altera valores da tela da calculadora
    updateScreen() {
        this.currentOperationsText.innertext += this.currentOperation;
    }
}

const calc = new calculator(previousOperationsText, currentOperationsText);

buttons.forEach((btn) =>{
    btn.addEventListener("click", (e) => {
        const value = e.target.innertext

        if(+value >= 0 || value ==="."){
            calc.addDigit(value)
        } else{
            console.log("Op: "+ value)
        }
    })
})