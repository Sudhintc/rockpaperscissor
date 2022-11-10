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
    if(playerSelection.toLowerCase()===computerSelection){
        return "no result";
    }
    if(computerSelection=="rock"){
        if(playerSelection=="scissor"){
            return "computer win";
        }
        else if(playerSelection=="paper"){
            return "player wins";
        }
    }
    if(computerSelection=="paper"){
        if(playerSelection=="rock"){
            return "computer wins";
        }
        else if(playerSelection=="scissor"){
            return "player wins";
        }
    }
    if(computerSelection=="scissor"){
        if(playerSelection=="paper"){
            return "computer wins";
        }
        else if(playerSelection=="rock"){
            return "player wins";
        }
    }
}

const playerSelection = prompt("enter your choice");
console.log(playerSelection);
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection,computerSelection));
console.log(computerSelection);
