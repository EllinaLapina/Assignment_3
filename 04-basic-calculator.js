/*eslint-env browser */
/*eslint no-constant-condition: ["error", { "checkLoops": false }]*/


    var firstNumber;
    var secondNumber;
    var operation; 

while (true) {
    firstNumber = parseInt(window.prompt("Enter the first number."));
    secondNumber = parseInt(window.prompt("Enter the second number."));
    operation = window.prompt("Choose an operation: add, subtract, multiply, divide");
    
    if ((operation === "add") || (operation === "subtract") || (operation === "multiply") || (operation === "divide")) { 
      break;
    } 
        window.alert("This is not a correct operator.");
    }

function calculate(first, second, operator) {
  "use stirct";
    var result;
   switch (operator) {
    case "add":
        result = first + second;
        break;
    case "subtract":
        result = first - second;
        break;
    case "multiply":
        result = first * second;
        break;
    case "divide":
        result = first / second;
        break;
} 
    return result;
}




var final = calculate(firstNumber, secondNumber, operation);
window.document.write(final);
