let playerScore = 0;
let computerScore = 0;


function game() {
    for (let i = 0; i < 5; i++) {
        let player = prompt("Enter Your Choice (Rock, Paper or Scissors): ");
        let computer = computerPlay();
        console.log(playRound(player, computer));
    }
    console.log(playerScore);
    console.log(computerScore);
}

function computerPlay() {
    let options = ["Rock", "Paper", "Scissors"];
    let choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == "rock" && computerSelection == "Paper") {
        computerScore += 1;
        return "You Lose! Paper beats Rock.";
    }
    else if (playerSelection.toLowerCase() == "paper" && computerSelection == "Rock") {
        playerScore += 1;
        return "You Win! Paper beats Rock."
    }
    else if (playerSelection.toLowerCase() == "rock" && computerSelection == "Scissors") {
        playerScore += 1;
        return "You Win! Rock beats Scissors.";
    }
    else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "Rock") {
        computerScore += 1;
        return "You Lose! Rock beats Scissors."
    }
    else if (playerSelection.toLowerCase() == "paper" && computerSelection == "Scissors") {
        computerScore += 1;
        return "You Lose! Scissors beats Paper.";
    }
    else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "Paper") {
        playerScore += 1;
        return "You Win! Scissors beats Paper."
    }
    else if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        return "It's a Draw.";
    }
}

game();
