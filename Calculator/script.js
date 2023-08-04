const displayValue = document.getElementById("displayValue")
let tempValue = 0;
let tempValueV2 = 0;
let operationCharacter = "";
function buttonOnclick(number) {
    displayValue.textContent += number
}
function operation(operationSign) {
    tempValue = displayValue.textContent
    displayValue.textContent = ""
    operationCharacter = operationSign
}  
function equals() {
    tempValueV2 = displayValue.textContent
    const number1 = parseFloat(tempValue)
    const number2 = parseFloat(tempValueV2)
    switch (operationCharacter) {
        case "+":
          displayValue.textContent = number1 + number2;
          break;
        case "-":
          displayValue.textContent = number1 - number2;
          break;
        case "x":
          displayValue.textContent = number1 * number2;
          break;
        case "/":
          displayValue.textContent = number1 / number2;
          break;
        default:
          break;
      }


}
function deleteDisplay() {
    tempValue = 0;
    displayValue.textContent = ""
}
function clearDisplay() {
    displayValue.textContent = ""
}
 


