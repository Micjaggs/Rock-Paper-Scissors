// RPS Selection buttons 
const selectionButtons = document.querySelectorAll('[data-selection]')

// Computer and user selection display in the DOM
const yourChoice = document.getElementById('you')
const computerChoice = document.getElementById('computer')

// Result mapping 
const result = document.querySelector('.results')
const playResult = document.querySelector('.result-score1')
const compResult = document.querySelector('.result-score2')
const tieResult = document.querySelector('.result-score3')


// Round tracking 
let roundCount = 0

// Score tracking
let playerScore = 0
let compScore = 0 
let tieGame = 0 

// playResult.textContent = `${playerScore}`

const choices = ["🪨","🧻","✂️"]

// Function for choice selection by player & random cpu selection
selectionButtons.forEach(button => {
    button.addEventListener('click', eventHandler)
})

// Function to separate the event handler from choice selection function
function eventHandler(e) {
    const computerSelection = choices[Math.floor(Math.random()* choices.length)];
        const selectionButton = e.target.dataset.selection;

        playChoice = selectionButton
        compChoice = computerSelection;

        playGame(playChoice,compChoice) 
        roundCount++;

        playResult.textContent = playerScore
        compResult.textContent = compScore
        tieResult.textContent = tieGame
        

        if (roundCount === 5) {
           if (playerScore > compScore) {
                result.textContent = "Game over, Player wins!"
           }
            else result.textContent = "Game over, Computer wins"

          roundCount = 0; 
          playerScore = 0;
          compScore = 0;
          tieGame = 0;
        }
}

// Function for gameplay logic

function playGame(playChoice, compChoice) {
   

        if (playChoice === compChoice) {
            tieGame++;
            roundCount--;
            result.textContent = "It's a Tie, continue game"
        }
        else if (playChoice == "🪨" && compChoice == "✂️" ||
            playChoice == "🧻" && compChoice == "🪨" ||
            playChoice == "✂️" && compChoice == "🧻") {
                playerScore++;
                result.textContent = "Player wins! " + playChoice + " beats " + compChoice
        }
        else {
            compScore++;
            result.textContent = "Computer wins! " + compChoice + " beats " + playChoice
        }
        }
    



     

