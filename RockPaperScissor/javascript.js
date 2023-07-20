let playerScore = 0;
let computerScore = 0;

function playRound (playerSelection) {
let refinedComputer = getComputerDecision();
   if(playerSelection == "scissor" && refinedComputer == "paper") {
      playerScore++;
      console.log("player score:" + playerScore)
      playGame();
   }
   else if (playerSelection == "scissor" && refinedComputer == "scissor") {
   }
   else if (playerSelection == "scissor" && refinedComputer == "rock") {
       computerScore++;
       console.log(computerScore)

       playGame();

   }

   else if (playerSelection == "rock" && refinedComputer == "scissor") {
      playerScore++;
      console.log("player score:" + playerScore)
      playGame();
   }

   else if (playerSelection == "rock" && refinedComputer == "paper") {
      computerScore++;
      console.log(computerScore)
      playGame();
   }

   else if (playerSelection == "rock" && refinedComputer == "rock") {}

   else if (playerSelection == "paper" && refinedComputer == "scissor") {
      computerScore++;
      console.log(computerScore)
      playGame();

   }
   else if (playerSelection == "paper" && refinedComputer == "paper") {
   }
   else if (playerSelection == "paper" && refinedComputer == "rock") {
       playerScore++;
       console.log("player score:" + playerScore)

       playGame();

       return console.log("congratulations you won this round")
   }

   else {
      alert("wtf happened for you to break it")
   }
}
function getComputerDecision() {
   let computerDecisionNumber = Math.floor(Math.random() * 3) + 1;
   let computerDecision = "";
   if (computerDecisionNumber == 1) {
      computerDecision = "scissor";
      return computerDecision;
   }
   else if (computerDecisionNumber == 2) {
      computerDecision = "rock";
      return computerDecision;
   }
   else {
      computerDecision = "paper";
      return computerDecision;
   }
}

function playGame() {

   if(playerScore == 5) {
      alert("you win gg!")
   } 
   else if (computerScore == 5) {
      alert("you lose noob")
   }



}

const createDivButton = document.getElementById("createNewDiv")
createDivButton.addEventListener("click", function() {
   const newDiv = document.createElement("div");
   newDiv.textContent = "This is a new div!";
   document.body.appendChild(newDiv)




})









