const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const rockIcon = "✊";
const paperIcon = "✋";
const scissorIcon = "✌️";
let roundWinner = "";
let playerScore = 0,
  computerScore = 0;
rock.addEventListener("click", () => game("rock", rockIcon));
paper.addEventListener("click", () => game("paper", paperIcon));
scissor.addEventListener("click", () => game("scissor", scissorIcon));

const playerPoint = document.getElementById("playerScore");
const computerPoint = document.getElementById("computerScore");
const result = document.querySelector(".result");
const info = document.querySelector(".info");
const playerSign = document.getElementById("player-sign");
const computerSign = document.getElementById("computer-sign");

const gameOverModal = document.getElementById("game-over-modal");
const gameOverResult = document.getElementById("game-over-result");
const close = document.querySelector(".close");
const playAgain = document.getElementById("play-again-btn");

playAgain.addEventListener("click", () => {
  location.reload();
});
close.addEventListener("click", () => {
  gameOverModal.style.display = "none";
});

function game(playerSelection, icon) {
  if (playerScore == 5 || computerScore == 5) {
    rock.removeEventListener("click", () => game("rock"));
    paper.removeEventListener("click", () => game("paper"));
    (playerScore = 0), (computerScore = 0);
    return;
  }
  playerSign.textContent = icon;
  let computerSelection = getComputerChoice();
  let winner = playRound(playerSelection, computerSelection);
  playerPoint.textContent = "Player: " + playerScore;
  computerPoint.textContent = "Computer: " + computerScore;
  if (playerScore == 5) {
    gameOverResult.textContent = "win!";
    gameOverModal.style.display = "block";
    return;
  }
  if (computerScore == 5) {
    gameOverResult.textContent = "lose!";
    gameOverModal.style.display = "block";
    return;
  }
}

function getComputerChoice() {
  let computerSelection = Math.floor(Math.random() * 3 + 1);
  if (computerSelection == 1) {
    computerSelection = "rock";
    computerSign.textContent = rockIcon;
  } else if (computerSelection == 2) {
    computerSelection = "paper";
    computerSign.textContent = paperIcon;
  } else {
    computerSelection = "scissor";
    computerSign.textContent = scissorIcon;
  }
  return computerSelection;
}
function playRound(playerSelection, computerSelection) {
  let message = "";
  let roundDetails = "";

  if (playerSelection === computerSelection) {
    roundWinner = "tie";
    message = "Game tied";
    roundDetails = "Tie";
  }
  if (
    (playerSelection === "rock" && computerSelection === "scissor") ||
    (playerSelection === "scissor" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    playerScore++;
    roundWinner = "player";
    message = "You Won";
    roundDetails = `${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`;
  }
  if (
    (computerSelection === "rock" && playerSelection === "scissor") ||
    (computerSelection === "scissor" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "rock")
  ) {
    computerScore++;
    roundWinner = "computer";
    message = "You Lost";
    roundDetails = `${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`;
  }

  result.textContent = message;
  info.textContent = roundDetails;

  return roundWinner;
}
