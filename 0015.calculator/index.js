const buttonsEl = document.querySelectorAll("button");
const inputFieldEl = document.querySelector("#result");
inputFieldEl.value = 0;
const operators = ["/", "*", "-", "+"];

for (let i = 0; i < buttonsEl.length; i++) {
  buttonsEl[i].addEventListener("click", () => {
    const buttonValue = buttonsEl[i].textContent;
    switch (buttonValue) {
      case "C":
        clearResult();
        break;
      case "=":
        calculateResult();
        break;
      default:
        appendValue(buttonValue);
        break;
    }
  });
}

function clearResult() {
  inputFieldEl.value = "0";
}

function calculateResult() {
  inputFieldEl.value = eval(inputFieldEl.value);
}

function appendValue(buttonValue) {
  if (inputFieldEl.value === "0" && !operators.includes(buttonValue)) {
    inputFieldEl.value = buttonValue;
  } else if (inputFieldEl.value.length > 0 && inputFieldEl.value != "0") {
    if (operators.includes(buttonValue)) {
      inputFieldEl.value += " " + buttonValue + " ";
    } else {
      inputFieldEl.value += buttonValue;
    }
  }
}
