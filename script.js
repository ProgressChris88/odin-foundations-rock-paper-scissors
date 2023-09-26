function generateComputer() {
  const result = ["rock", "scissors", "paper"];
  return result[Math.floor(Math.random() * result.length)];
}


function playerPlay() {
  return prompt("Rock, Paper, or Scissors?").toLowerCase();
}


function playRound(computerChoice, playerChoice) {
  if (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors") {
    alert("Invalid Response");
  }
  else if (playerChoice === computerChoice) {
    alert("It's a tie!");
  }
  else if ((playerChoice == "rock" && computerChoice == "scissors") ||
  (playerChoice == "paper" && computerChoice == "rock") ||
  (playerChoice == "scissors" && computerChoice == "paper")) {
    alert("You win!");
  }
  else {
     alert("You lose!");
  }
}


function game() {
  for (let i = 1; i <= 4; i++) {
    playRound(generateComputer(), playerPlay());
  }
}

game();
