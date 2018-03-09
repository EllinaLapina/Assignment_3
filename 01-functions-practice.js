/*eslint-env browser */

//STEP 1
/*
function halfNumber(number1) {
    "use strict";
    var result = number1 / 2;
    window.console.log("inside halfNumber: " + result);
    return result;
}

var value = halfNumber(5);
window.alert("outside of function: " + value); 
*/


//STEP 2
/*
function squareNumber(number2) {
     "use strict";
    var result = number2 * number2;
    window.console.log("The result of squaring the number " + number2 + " is " + result);
    return result;
    }
squareNumber(3);
*/

//STEP 3
/*
function percentOf(number1, number2) {
  "use strict";
  var result = (number1 / number2) * 100;
    window.console.log(number1 + " is " + result + " % of " + number2);
    return result;
}
percentOf(2, 4);
*/

//STEP 4
/*
function findModulus(number1, number2) {
   "use strict";
   var result = number2 % number1;
    window.console.log(result + " is the modulus of " + number1 + " and " + number2);
    return result;
}
findModulus(3, 10);
*/

//STEP 5

var tech = window.prompt("Which front-end technology do you enjoy most?");
switch (tech) {  
case "html":  
     window.alert("HTML is fun and easy to learn!");  
     break;  
case "css":  
     window.alert("CSS is more difficult to pick up than HTML!"); 
     break;  
default:   
     window.alert("Great, I like that technology too!"); 
}












