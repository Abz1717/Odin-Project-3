

let playerPoints = 0
let computerPoints = 0
const choices = ["ROCK", "PAPER", "SCISSORS"]
const rounds = 5
let resultMessage = ""
let RoundPoints = 0


// computer choice 
function getComputerChoice(){

    return choices[Math.floor(Math.random()*3)]
}


// playing one round
function playRound(playerSelection, computerSelection){


    if ((playerSelection == "ROCK" && computerSelection == "SCISSORS") || 
        (playerSelection == "SCISSORS" && computerSelection == "PAPER") || 
        (playerSelection == "PAPER" && computerSelection == "ROCK")){
            playerPoints++
            RoundPoints++
            resultMessage = "Player wins the round!";


    }

    if ((computerSelection == "ROCK" && playerSelection == "SCISSORS") ||
        (computerSelection == "SCISSORS" && playerSelection == "PAPER") ||
        (computerSelection == "PAPER" && playerSelection == "ROCK")){
            computerPoints++
            RoundPoints++
            resultMessage = "Computer wins the round!";
    }

    if (playerSelection == computerSelection){
        resultMessage = "It's a tie, try again!";
    } 

    updateRoundResult(resultMessage);
}

//function to display round result
function updateRoundResult(message){
    const resultDisplay = document.getElementById('currentResult');
    const messageParagraph = document.createElement('p');

    messageParagraph.innerText = message;
    resultDisplay.appendChild(messageParagraph);


}


function isGameOver(){

    return (playerPoints + computerPoints >= rounds);
}

// score tally
function updateCurrentScore(){

    const scoreDisplay = document.getElementById('current-score');
    scoreDisplay.innerText = `Score: Player ${playerPoints} - Computer ${computerPoints}`;
}

function updateRound(){
    const RoundDisplay = document.getElementById('current-round');
    RoundDisplay.innerText = `Round : ${RoundPoints}`
}

// final result
function updateFinalScore(){

    let finalMessage;
    if (playerPoints > computerPoints) {
        finalMessage = `Game Over! You won ${playerPoints} to ${computerPoints}.`;
    } else if (computerPoints > playerPoints) {
        finalMessage = `Game Over! Computer won ${computerPoints} to ${playerPoints}.`;
    } else {
        finalMessage = `Game Over! It's a tie: ${playerPoints} to ${computerPoints}.`;
    }

    const finalMessageDisplay = document.getElementById('currentResult');
    const messageParagraph = document.createElement('p');

    messageParagraph.innerText = finalMessage;
    finalMessageDisplay.appendChild(messageParagraph);


}

document.getElementById('restartBtn').addEventListener('click', restartGame);

// restart game function
function restartGame(){
    playerPoints = 0;
    computerPoints = 0;
    RoundPoints = 0; 
    resultMessage = "Who will win?";

    updateCurrentScore();
    updateRound();
    
    const resultDisplay = document.getElementById('currentResult');
    resultDisplay.innerHTML = ''; 

    document.querySelectorAll("#player-choices button").forEach(button => button.disabled = false);
}

// highlight computers choice 
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


function highlightPlayerChoice(playerSelection) {

    document.querySelectorAll('#player-choices button').forEach(button => {
       button.classList.remove('highlight');
   });

   const buttonId = `player-${computerSelection.toLowerCase()}`;
   const selectedButton = document.getElementById(buttonId);
   
   if (selectedButton) {
       selectedButton.classList.add('highlight');
   } else {
       console.log(`Button with ID ${buttonId} not found.`);
   }
}

document.addEventListener("click", gameSelectionListener);

function gameSelectionListener(event){

    if (isGameOver()) {
        console.log("Game is over. Please restart to play again.");
        document.querySelectorAll("#player-choices button").forEach(button => button.disabled = true);
        return; 
    }
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
    updateRound();

}