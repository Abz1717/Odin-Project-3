

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

}

function updateCurrentScore(){

}

function updateFinalScore(){

}




function playerClick(playerSelection){

    const computerSelection = getComputerChoice();

}