const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');
let roundWinner='';
let playerScore = 0,computerScore=0;
rock.addEventListener('click',()=>game('rock'));
paper.addEventListener('click',()=>game('paper'));
scissor.addEventListener('click',()=>game('scissor'));

function game(playerSelection){
    if(playerScore==5||computerScore==5) {
        rock.removeEventListener('click',()=>game('rock'));
        paper.removeEventListener('click',()=>game('paper'));
        playerScore=0,computerScore=0;
        return;
    }
    let computerSelection=getComputerChoice();
    let winner = playRound(playerSelection,computerSelection);
    console.log(playerScore);
    console.log(computerScore)
    if(playerScore==5) {
        alert("player wins");
        return ;
    }
    if(computerScore==5){
        alert("computer wins");
    }
}


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
// function game(){
//     let playerTurn ='';
//     let computerTurn ='';
//     let roundWinner = '';
//     for(i=0;i<5;i++){
//         playerTurn = playerChoice();
//         computerTurn = getComputerChoice();
//         playRound(playerTurn,computerTurn);
//     }
//     if(playerScore>computerScore){
//         console.log("player wins");
//     }
//     else{
//         console.log("computer wins");
//     }
//     console.log(playerScore);
//     console.log(computerScore);


// }
// game();

