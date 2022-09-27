var btnCheck = document.querySelector("#check");
var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
var message = document.querySelector("#message");
var notes = [2000, 500, 100, 20, 10, 5, 1];
var noOfNotesDisplay = document.querySelectorAll(".no-of-notes");
btnCheck.addEventListener("click", () => {
  // console.log(billAmount.value, typeof cashGiven.value);
  message.style.display = "none";
  if (billAmount.value == "" || cashGiven.value == "") {
    displayMessage("Please enter data into Bill Amount and Cash Given fields");
  } else if (billAmount.value <= 0) {
    displayMessage("Bill Amount should be greater than 0");
  } else {
    if (Number(cashGiven.value) < Number(billAmount.value)) {
      displayMessage(
        "Cash given should be greater than or equal to the bill amount"
      );
    } else {
      var amountToReturn = cashGiven.value - billAmount.value;
      for (var i = 0; i < notes.length; i++) {
        var noOfNotes = Math.trunc(amountToReturn / notes[i]);
        amountToReturn %= notes[i];
        noOfNotesDisplay[i].innerText = noOfNotes;
      }
    }
  }
});
function displayMessage(messageLanguage) {
  message.style.display = "block";
  message.innerText = messageLanguage;
}
