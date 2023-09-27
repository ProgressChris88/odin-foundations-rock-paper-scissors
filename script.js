let computerScore = 0;
let playerScore = 0;

let displayPlayerScore = document.getElementById("playerScore");
let displayComputerScore = document.getElementById("computerScore");
let displayResult = document.getElementById("result");

function generateComputer() {
  const result = ["rock", "scissors", "paper"];
  return result[Math.floor(Math.random() * result.length)];
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
}

function game() {
  for (let i = 1; i <= 5; i++) {
    playRound(generateComputer(), playerPlay());
  }
  if (playerScore > computerScore) {
    alert("Congratulations! A winner is you!");
    displayResult.innerText = "You win!";
  } else if (playerScore < computerScore) {
    alert("You lose! You should FEEL BAD!");
    displayResult.innerText = "You lose!";
  } else {
    alert("It's a tie game!");
    displayResult.innerText = "It's a tie!";
  }
}

game();
