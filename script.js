// Prompt user to begin game
const choices = ["rock","paper","scissors"]

function getPlayerchoice() {
   let playerChoice = prompt("Make a selection");
    return playerChoice
}

getPlayerchoice()

function getComputerchoice() {
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
 }
 
 getComputerchoice()

const playerChoice = getPlayerchoice()
const computerChoice = getComputerchoice()

function checkWinner(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        return console.log("It's a Tie")
    }
    else if (playerChoice == "rock" && computerChoice == "scissors" ||
        playerChoice == "paper" && computerChoice == "rock" ||
        playerChoice == "scissors" && computerChoice == "paper") {
            return console.log("Player wins!")
    }
    else {
        return console.log("Computer wins!")
    }
}

console.log("Player = ", playerChoice)
console.log("computer = ", computerChoice)

checkWinner(playerChoice, computerChoice)



console.log("game over")






// Create options 3 rock paper scissors
// Allow myself to somehow choose one of those options
// When I choose one of those options, the computer also chooses one of those options randomly
// the options are compared and the winner is decided