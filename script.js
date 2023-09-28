let computerScore = 0;
let playerScore = 0;
let gameCount = 0;

let displayPlayerScore = document.getElementById("playerScore");
let displayComputerScore = document.getElementById("computerScore");
let displayResult = document.getElementById("result");

const resetButton = document.getElementById("reset");
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const playerChoices = document.getElementById("choices");

function generateComputer() {
  const result = ["rock", "scissors", "paper"];
  return result[Math.floor(Math.random() * result.length)];
}

// Event listeners for buttons

paperButton.addEventListener("click", clickPaper);
rockButton.addEventListener("click", clickRock);
scissorsButton.addEventListener("click", clickScissors);
resetButton.addEventListener("click", function () {
  gameCount = 0;
  playerChoices.classList.toggle("hide");
  resetButton.classList.toggle("hide");
});

// Write Event Functions for specific buttons

function clickRock() {
  playerChoice = "rock";
  console.log("rock");
  playRound(generateComputer(), playerChoice);
}

function clickPaper() {
  playerChoice = "paper";
  console.log("paper");
  playRound(generateComputer(), playerChoice);
}

function clickScissors() {
  playerChoice = "scissors";
  console.log("scissors");
  playRound(generateComputer(), playerChoice);
}

function playerPlay() {
  return prompt("Rock, Paper, or Scissors?").toLowerCase();
}

function playRound(computerChoice, playerChoice) {
  if (
    playerChoice !== "rock" &&
    playerChoice !== "paper" &&
    playerChoice !== "scissors"
  ) {
    // This should loop the function over again.
    alert("Invalid Response");
  } else if (playerChoice === computerChoice) {
    alert("It's a tie!");
  } else if (
    (playerChoice == "rock" && computerChoice == "scissors") ||
    (playerChoice == "paper" && computerChoice == "rock") ||
    (playerChoice == "scissors" && computerChoice == "paper")
  ) {
    playerScore += 1;
    displayPlayerScore.innerText = playerScore;
    alert("You win!");
  } else {
    computerScore += 1;
    displayComputerScore.innerText = computerScore;
    alert("You lose!");
  }
  gameCount += 1;
  if (gameCount == 5) {
    gameEndCheck();
  }
}

// function game() {
// for (let i = 1; i <= 5; i++) {
//   playRound(generateComputer(), playerPlay());
// }
function gameEndCheck() {
  console.log("5 games!");
  if (playerScore > computerScore) {
    // alert("Congratulations! A winner is you!");
    displayResult.innerText = "You win!";
  } else if (playerScore < computerScore) {
    // alert("You lose! You should FEEL BAD!");while co
    displayResult.innerText = "You lose!";
  } else {
    // alert("It's a tie game!");
    displayResult.innerText = "It's a tie!";
  }
  playerChoices.classList.toggle("hide");
  resetButton.classList.toggle("hide");
}

// game();

// choices.classList.toggle("hide")
