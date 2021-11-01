function computerPlay() {
    var random = Math.floor(Math.random() * 3);
    if (random === 0) {
        return "Rock";
    } else if (random === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    }

    // check for rock
    if (playerChoice === "Rock") {
        if (computerChoice === "Paper") {
            return "You lose! Paper beats Rock.";
        } else {
            return "You win! Rock beats Scissors.";
        }
    }

    // check for paper
    if (playerChoice === "Paper") {
        if (computerChoice === "Scissors") {
            return "You lose! Scissors beats Paper.";
        } else {
            return "You win! Paper beats Rock.";
        }
    }

    // check for scissors
    if (playerChoice === "Scissors") {
        if (computerChoice === "Rock") {
            return "You lose! Rock beats Scissors.";
        } else {
            return "You win! Scissors beats Paper.";
        }
    }
}

const playerSelection = "Rock";
const computerSelection = computerPlay();
const result = playRound(playerSelection, computerSelection);
console.log(result);