/*eslint-env browser */
/*eslint no-constant-condition: ["error", { "checkLoops": false }]*/


while (true) {
   var usersChoice = window.prompt("Choose rock, paper or scissors.");
   if ((usersChoice === "rock") || (usersChoice === "paper") || (usersChoice === "scissors")) {
       break;
   }
    window.alert("You didn't choose rock, paper or scissors. Do it again.")
} 

var compChoice = Math.floor(Math.random()* 3)+1;

if (compChoice === 1) {
    compChoice = "rock";
} else if (compChoice === 2) {
    compChoice = "paper";
} else {
    compChoice = "scissors";
}
 window.document.write("Users's : " + usersChoice + " vs Computer's: " + compChoice + "<br>");

if ((compChoice === "rock" && usersChoice === "scissors") || (compChoice === "scissors" && usersChoice === "paper") || (compChoice === "paper" && usersChoice === "rock")) {
    window.document.write("Computer won!");
    
} else if ((usersChoice === "rock" && compChoice === "scissors") || (usersChoice === "scissors" && compChoice === "paper") || (usersChoice === "paper" && compChoice === "rock")) {
    window.document.write("You won!");
    
} else if (usersChoice === compChoice) {
    window.document.write("It's a tie!");  
} 


