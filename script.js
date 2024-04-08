

let playerPoints = 0
let computerPoints = 0
const choices = ["ROCK", "PAPER", "SCISSORS"]
const rounds = 5
let roundWinner = ""

function getComputerChoice(){

    return choices[Math.floor(Math.random()*3)]
}


function playRound(playerSelection, computerSelection){

    if ((playerSelection == "ROCK" && computerSelection == "SCISSORS") || 
        (playerSelection == "SCISSORS" && computerSelection == "PAPER") || 
        (playerSelection == "PAPER" && computerSelection == "ROCK")){
            playerPoints++
            roundWinner = "Player"

    }

    if ((computerSelection == "ROCK" && playerSelection == "SCISSORS") ||
        (computerSelection == "SCISSORS" && playerSelection == "PAPER") ||
        (computerSelection == "PAPER" && playerSelection == "ROCK")){
            computerPoints++
            roundWinner = "Computer"
    }

    if (playerSelection == computerSelection){
        roundWinner = "Tie"
    } 
}


function isGameOver(){

    return (playerPoints + computerPoints >= rounds);
}

function updateCurrentScore(){

    const scoreDisplay = document.getElementById('current-score');
    scoreDisplay.innerText = `Score: Player ${playerPoints} - Computer ${computerPoints}`;
}

function updateFinalScore(){

    let finalMessage;
    if (playerPoints > computerPoints) {
        finalMessage = `Game Over! You won ${playerPoints} to ${computerPoints}.`;
    } else if (computerPoints > playerPoints) {
        finalMessage = `Game Over! Computer won ${computerPoints} to ${playerPoints}.`;
    } else {
        finalMessage = `Game Over! It's a tie: ${playerPoints} to ${computerPoints}.`;
    }
    alert(finalMessage);
}

function restartGame(){
    playerPoints = 0
    computerPoints = 0 
}

function highlightComputerChoice(computerSelection) {

     document.querySelectorAll('#computer-choices button').forEach(button => {
        button.classList.remove('highlight');
    });

    const buttonId = `computer-${computerSelection.toLowerCase()}`;
    const selectedButton = document.getElementById(buttonId);
    
    if (selectedButton) {
        selectedButton.classList.add('highlight');
    } else {
        console.log(`Button with ID ${buttonId} not found.`);
    }
}



document.addEventListener("click", gameSelectionListener);

function gameSelectionListener(event){

    if (event.target.matches("#player-choices button")) { 
        const playerSelection = event.target.id.replace('player-', '').toUpperCase();
        playerClick(playerSelection);
        if (isGameOver()) {
            updateFinalScore();
        }
    }
}

function playerClick(playerSelection){

    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    highlightComputerChoice(computerSelection);
    updateCurrentScore();
}