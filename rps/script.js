let cChoice = ""
let pChoice = ""
let result = ""
let round = 1

let computerScore = 0
let playerScore = 0

function getComputerChoice() {
    let num = Math.random()

    if (num <= 0.33) {
        cChoice = "rock"
    } else if (num <= 0.66) {
        cChoice = "paper"
    } else {
        cChoice = "scissors"
    }
}

function getHumanChoice() {
    input = prompt("Choose");
    pChoice = input.toLowerCase()
}



function playRound() {

    getComputerChoice()
    getHumanChoice()

    if (cChoice == "rock") {
        if (pChoice == "rock") {
            result = "Tie!"
        } else if (pChoice = "paper") {
            result = `I win! ${cChoice} beats ${pChoice}!`;
            computerScore += 1
        } else {
            result = `You win! ${pChoice} beats ${cChoice}!`;
            playerScore += 1
        }
    } else if (cChoice == "paper") {
        if (pChoice == "rock") {
            result = `You win! ${pChoice} beats ${cChoice}!`;
            playerScore += 1
        } else if (pChoice == "paper") {
            result = "Tie!"
        } else {
            result = `I win! ${cChoice} beats ${pChoice}!`;
            computerScore += 1
        }
    } else {
        if (pChoice == "rock") {
            result = `You win! ${pChoice} beats ${cChoice}!`;
            playerScore += 1
        } else if (pChoice == "paper") {
            result = `I win! ${cChoice} beats ${pChoice}!`;
            computerScore += 1
        } else {
            result = "Tie!"
        }
    }

    console.log(`Your Choice: ${pChoice}`);
    console.log(`My Choice: ${cChoice}`);

    console.log(result);
    console.log(`Your Score: ${playerScore}`);
    console.log(`My Score: ${computerScore}`)
}

function playGame() {
    playRound()
    playRound()
    playRound()
    playRound()
    playRound()
}

playGame()


