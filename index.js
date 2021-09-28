// JavaScript source code
const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const calculateButton = document.querySelector("#calculate-button");
const errorMessage = document.querySelector("#error-message");


calculateButton.addEventListener("click", function calculateAmount() {
    errorMessage.style.display = "none";    
    if (billAmount.value > 0) {
        debugger;
        if (cashGiven.value >= billAmount.value) {            
            const remainingAmount = cashGiven.value - billAmount.value;
            calculateChangeToReturn(remainingAmount);            
        } else {
            displayMessage("Cash amount should be greater than bill amount");
        }
    }
    else {
        displayMessage("Please enter positive bill amount");
    }
});

function calculateChangeToReturn(cash) {
    console.log(cash);
}

function displayMessage(msg) {
    errorMessage.style.display = "block";
    errorMessage.innerText = msg;
}
