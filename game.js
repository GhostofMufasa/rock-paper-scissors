function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice() {
    const userInput = prompt("Enter your choice (rock, paper, or scissors): ");
    return userInput.toLowerCase();
}


function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("It's a tie!")
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "paper" && computerChoice === "rock") || 
        (humanChoice === "scissors" && computerChoice === "paper") 
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        return "human";
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        return "computer";
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1}`);
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        let roundWinner = playRound(humanChoice, computerChoice);

        if (roundWinner === "human") {
            humanScore++;
        } else if (roundWinner === "computer") {
            computerScore++
        }
        console.log(`Score: You ${humanScore} - ${computerScore} Computer`);
    }
    
        if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
        } else if (computerScore > humanScore) {
        console.log("You lost the game. Better luck next time!");
        } else {
        console.log("It's a tie game!");
    }
}

playGame();