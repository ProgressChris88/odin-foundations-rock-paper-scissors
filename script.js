function generateComputer() {
  const result = ["rock", "scissors", "paper"];
  return result[Math.floor(Math.random() * result.length)];
}

let playerChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();
let computerChoice = generateComputer();

function game(computerChoice, playerChoice) {
  if (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors") {
    return "Invalid";
  }
  else if (playerChoice === computerChoice) {
    return "Tie";
  }
}


console.log(game(computerChoice, playerChoice));
