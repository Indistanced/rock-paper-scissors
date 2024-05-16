"use strict"

let computerScore = 0
let userScore = 0
let choices = ["rock", "paper", "scissors"]
let i = 0

function getComputerChoice(choices) {
    return choices[Math.floor(Math.random() * choices.length)]
}

function getUserChoice(choices) {
    let userInput = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
    if (choices.includes(userInput)) {
        return userInput;
    } else {
        return getUserChoice(choices);
    }
}

function playRound(computerChoice, userChoice, choices) {
    let computerIndex = choices.indexOf(computerChoice);
    let userIndex = choices.indexOf(userChoice);
    // Calculate the difference in indices to determine the winner
    let diff = (userIndex - computerIndex + 3) % 3;
    switch (diff) {
        case 1:
            console.log("User wins!");
            userScore++;
            break;
        case 2:
            console.log("Computer wins!");
            computerScore++;
            break;
        default:
            console.log("It's a draw!");
            break;
    }
}

function playGame() { 
    for (; i < 5; i++) { 
        let computerSelection = getComputerChoice(choices)
        let userSelection = getUserChoice(choices)
        console.log("Computer's choice:", computerSelection);
        console.log("User's choice:", userSelection);
        playRound(computerSelection, userSelection, choices)
        console.log("Computer's score:", computerScore);
        console.log("User's score:", userScore);
    }
}

playGame()