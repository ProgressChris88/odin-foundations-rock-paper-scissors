function computerChoice() {
  const result = ["rock", "scissors", "paper"];
  return result[Math.floor(Math.random() * result.length)];
}

let playerChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();

function game(computerChoice(), playerChoice) {
  if (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors") {
    return "Invalid";
  }
  else if (playerChoice === computerChoice) {
    return "Tie";
  }
}



console.log(playerChoice);
console.log(computerChoice());
console.log(game(computerChoice, playerChoice));
