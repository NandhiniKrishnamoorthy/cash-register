// JavaScript source code
const totalBill = document.querySelector("#bill-amount");
const totalCash = document.querySelector("#cash-given");
const calculateButton = document.querySelector("#calculate-button");
const errorMessage = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll("#no-of-notes");

const notes = [2000, 500, 100, 20, 10, 5, 1];


calculateButton.addEventListener("click", function calculateAmount() {
    errorMessage.style.display = "none";
    if (totalBill.value && totalCash.value) {
        if (totalBill.value > 0 && totalCash.value) {
            debugger;
            let billAmount = Number(totalBill.value);
            let cashGiven = Number(totalCash.value);
            if (cashGiven > billAmount) {
                const remainingAmount = cashGiven - billAmount;
                calculateChangeToReturn(remainingAmount);
            }
            else if (cashGiven === billAmount) {
                displayMessage("No Cash to return");
            }
            else {
                displayMessage("Cash amount should be greater than bill amount");
            }
        }
        else {
            displayMessage("Please enter positive amount");
        }
    }
    else {
        displayMessage("Please enter the values");
    }
    
});

function calculateChangeToReturn(cash) {    
    for (let i = 0; i < notes.length; i++) {        
        const count = Math.trunc(cash / notes[i]);
        cash = cash % notes[i];
        noOfNotes[i].innerText = count;
    }
}

function displayMessage(msg) {
    errorMessage.style.display = "block";
    errorMessage.innerText = msg;
    for (let i = 0; i < notes.length; i++) {        
        noOfNotes[i].innerText = 0;
    }
}
