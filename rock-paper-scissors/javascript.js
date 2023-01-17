function getComputerChoice(){
    let randomRes = Math.floor(Math.random() * 3);
    if(randomRes == 0){
        return "Paper";
    }else if(randomRes == 1){
        return "Scissors";
    }else{
        return "Rock";
    }
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    console.log(playerSelection);
    console.log(computerSelection);
    if((playerSelection == "PAPER" && computerSelection == "ROCK") || 
       (playerSelection == "ROCK" && computerSelection == "SCISSORS") || 
       (playerSelection == "SCISSORS" && computerSelection == "PAPER")){
        return "Player Won! " + playerSelection + " beats " + computerSelection;
    }else if((computerSelection == "PAPER" && playerSelection == "ROCK") ||
             (computerSelection == "ROCK" && playerSelection == "SCISSORS") ||
             (computerSelection == "SCISSORS" && playerSelection == "PAPER")){
                return "Computer Won! " + computerSelection + " beats " + playerSelection;
    }else{
        return "Draw!";
    }
}

function game(){
    let i = 0;
    let pCounter = 0;
    let cCounter = 0;
    let dCounter = 0;
    let playerChoice;
    let roundResult;
    for(i = 0; i < 5; i++){
        playerChoice = prompt("Select one: Rock, Paper or Scissors");[]
        roundResult = playRound(playerChoice,getComputerChoice());
        console.log(roundResult);
        if(roundResult[0] == 'P'){
            pCounter++;
        }else if(roundResult[0] == 'C'){
            cCounter++;
        }else{
            dCounter++;
        }
    }
    console.log("pCounter: " + pCounter + ", cCounter: " + cCounter + ", dCounter: " + dCounter);
    if(pCounter > cCounter){
        return "The Player Won";
    }else if(pCounter < cCounter){
        return "The Computer Won";
    }else{
        return "Draw";
    }
}

console.log(game());