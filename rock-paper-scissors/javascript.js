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
    let roundResult;
    let computerSelection;
    const buttonRock = document.querySelector('.rock');
    const buttonPaper = document.querySelector('.paper');
    const buttonScissors = document.querySelector('.scissors');
    const currentResult = document.querySelector('.currentResult');
    const playerChoice = document.querySelector('.playerChoice');
    const computerChoice = document.querySelector('.computerChoice');

    buttonRock.addEventListener("click",function(e){
        computerSelection = getComputerChoice();
        roundResult = (playRound("Rock",computerSelection));
        playerChoice.innerHTML = "Rock";
        computerChoice.innerHTML = computerSelection;
        if(roundResult[0] == 'P'){
            pCounter++;
        }else if(roundResult[0] == 'C'){
            cCounter++;
        }else{
            dCounter++;
        }

        console.log("pCounter: " + pCounter + ", cCounter: " + cCounter + ", dCounter: " + dCounter);
        if(pCounter == 5){
            alert("Player Won");
            return "The Player Won";
        }else if(cCounter == 5){
            alert("Computer Won");
            return "The Computer Won";
        }else{
            console.log("Actual Count --> pCounter: " + pCounter + ", cCounter: " + cCounter + ", dCounter: " + dCounter);
            currentResult.innerHTML = "Actual Count --> Player score: " + pCounter + ", Computer score: " + cCounter + ", Draw results: " + dCounter;
        }
    });
    buttonPaper.addEventListener("click",function(e){
        computerSelection = getComputerChoice();
        roundResult = (playRound("Paper",computerSelection));
        playerChoice.innerHTML = "Paper";
        computerChoice.innerHTML = computerSelection;
        if(roundResult[0] == 'P'){
            pCounter++;
        }else if(roundResult[0] == 'C'){
            cCounter++;
        }else{
            dCounter++;
        }

        console.log("pCounter: " + pCounter + ", cCounter: " + cCounter + ", dCounter: " + dCounter);
        if(pCounter == 5){
            alert("Player Won");
            return "The Player Won";
        }else if(cCounter == 5){
            alert("Computer Won");
            return "The Computer Won";
        }else{
            console.log("Actual Count --> pCounter: " + pCounter + ", cCounter: " + cCounter + ", dCounter: " + dCounter);
            currentResult.innerHTML = "Actual Count --> Player score: " + pCounter + ", Computer score: " + cCounter + ", Draw results: " + dCounter;
        }
    });
    buttonScissors.addEventListener("click",function(e){
        computerSelection = getComputerChoice();
        roundResult = (playRound("Scissors",computerSelection));
        playerChoice.innerHTML = "Scissors";
        computerChoice.innerHTML = computerSelection;
        if(roundResult[0] == 'P'){
            pCounter++;
        }else if(roundResult[0] == 'C'){
            cCounter++;
        }else{
            dCounter++;
        }

        console.log("pCounter: " + pCounter + ", cCounter: " + cCounter + ", dCounter: " + dCounter);
        if(pCounter == 5){
            buttonRock.disabled = true;
            buttonPaper.disabled = true;
            buttonScissors.disabled = true;
            currentResult.innerHTML = "Final Count --> Player score: " + pCounter + ", Computer score: " + cCounter + ", Draw results: " + dCounter;
            return "The Player Won";
        }else if(cCounter == 5){
            buttonRock.disabled = true;
            buttonPaper.disabled = true;
            buttonScissors.disabled = true;
            currentResult.innerHTML = "Final Count --> Player score: " + pCounter + ", Computer score: " + cCounter + ", Draw results: " + dCounter;
            return "The Computer Won";
        }else{
            console.log("Actual Count --> pCounter: " + pCounter + ", cCounter: " + cCounter + ", dCounter: " + dCounter);
            currentResult.innerHTML = "Actual Count --> Player score: " + pCounter + ", Computer score: " + cCounter + ", Draw results: " + dCounter;
        }
    });
}

game();