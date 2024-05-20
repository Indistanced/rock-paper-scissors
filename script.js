"use strict"

const rockBtn = document.createElement('button')
rockBtn.textContent = 'ROCK'
rockBtn.className = 'button'

const paperBtn = document.createElement('button')
paperBtn.textContent = 'PAPER'
paperBtn.className = 'button'

const scissorsBtn = document.createElement('button')
scissorsBtn.textContent = 'SCISSORS'
scissorsBtn.className = 'button'

const container = document.querySelector('body')
const buttons = [rockBtn, paperBtn, scissorsBtn]

buttons.forEach(button => {
    if (button.classList.contains('button')) {
        container.appendChild(button)
    }
})

const aDiv = document.createElement('div')
aDiv.style.height = '200px'
aDiv.style.width = '500px'
aDiv.style.border = '1px solid black'
container.appendChild(aDiv)


function getComputerChoice(choices) {
    return choices[Math.floor(Math.random() * choices.length)]
}

let computerScore = 0
let userScore = 0
let userChoice = ""
let choices = ["rock", "paper", "scissors"]

rockBtn.addEventListener('click', () => {
    userChoice = choices[0]
})

paperBtn.addEventListener('click', () => {
    userChoice = choices[1]
})

scissorsBtn.addEventListener('click', () => {
    userChoice = choices[2]
})

function playRound(computerSelection, userSelection, choices) {
    let computerIndex = choices.indexOf(computerSelection)
    let userIndex = choices.indexOf(userSelection)
    // Calculate the difference in indices to determine the winner
    let diff = (userIndex - computerIndex + 3) % 3
    switch (diff) {
        case 1:
            aDiv.innerText += "User wins! \n"
            userScore++
            break
        case 2:
            aDiv.innerText += "Computer wins! \n"
            computerScore++
            break
        default:
            aDiv.innerText += "It's a draw! \n"
            break
    }
    aDiv.innerText += `Computer's score: ${computerScore} \n`
    aDiv.innerText += `User's score: ${userScore} \n`
}

function announceWinner(computerScore, userScore) { 
    switch(true) {
        case computerScore > userScore:
            aDiv.innerText += "Computer wins overall! \n"
            break
        case computerScore < userScore:
            aDiv.innerText += "User wins overall! \n"
            break
        default:
            aDiv.innerText += "It's a draw overall! \n"
            break
    }
}

buttons.forEach(button => {
    if (button.classList.contains('button')) {
        button.addEventListener('click', () => {
            userChoice = button.textContent.toLowerCase()
            let computerChoice = getComputerChoice(choices)
            aDiv.innerText = ""
            aDiv.innerText += `Computer's choice: ${computerChoice} \n`
            aDiv.innerText += `User's choice: ${userChoice} \n`
            playRound(computerChoice, userChoice, choices)
            
            if (computerScore === 5 || userScore === 5) {
                announceWinner(computerScore, userScore)
                computerScore = 0
                userScore = 0
            }
            
        }) 
    }       
})
