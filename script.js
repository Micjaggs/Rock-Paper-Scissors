
const choices = ["rock","paper","scissors"]

let playerChoice = prompt("Make a selection")

function getComputerchoice() {
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
 }

getComputerchoice()

let computerChoice = getComputerchoice()

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
        return console.log("Computer wins! " + computerChoice + " beats " + playerChoice)
    }
}

console.log("Player = ", playerChoice)
console.log("computer = ", computerChoice)

checkWinner(playerChoice, computerChoice)



console.log("game over")


