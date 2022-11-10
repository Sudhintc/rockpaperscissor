let playerScore = 0,computerScore=0;
let roundWinner='';
function getComputerChoice(){
    let computerSelection = Math.floor(Math.random()*3+1);
    if(computerSelection==1){
        computerSelection = "rock";
    }
    else if(computerSelection==2){
        computerSelection = "paper";
    }
    else{
        computerSelection="scissor";
    }
    return computerSelection;
}
function playerChoice(){
    const playerSelection = prompt("enter your choice");
    return playerSelection;
    }
function playRound(playerSelection,computerSelection){
    if (playerSelection === computerSelection) {
        roundWinner = 'tie'
      }
      if (
        (playerSelection === 'rock' && computerSelection === 'scissor') ||
        (playerSelection === 'scissor' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
      ) {
        playerScore++
        roundWinner = 'player'
      }
      if (
        (computerSelection === 'rock' && playerSelection === 'scissor') ||
        (computerSelection === 'scissor' && playerSelection === 'paper') ||
        (computerSelection === 'paper' && playerSelection === 'rock')
      ) {
        computerScore++
        roundWinner = 'computer'
      }
      return roundWinner;
      
}
function game(){
    let playerTurn ='';
    let computerTurn ='';
    let roundWinner = '';
    for(i=0;i<5;i++){
        playerTurn = playerChoice();
        computerTurn = getComputerChoice();
        playRound(playerTurn,computerTurn);
    }
    if(playerScore>computerScore){
        console.log("player wins");
    }
    else{
        console.log("computer wins");
    }
    console.log(playerScore);
    console.log(computerScore);


}
game();
