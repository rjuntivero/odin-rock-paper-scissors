let humanScore = 0 
let computerScore = 0

function getComputerChoice() {
    let choice = Math.floor(Math.random() *3 + 1)
    switch(choice)
    {
        case 1:
            choice = "rock";
            break;
        case 2:
            choice = "paper";
            break;
        case 3: 
            choice = "scissors";
            break;
        default:
        break;
    } 
    return choice
}

function getHumanChoice() {
    let choice = prompt("Please make a choice")
    return choice
}

function playRound(humanChoice,computerChoice){
    humanChoice = humanChoice.toLowerCase()
    if(humanChoice == "rock" && computerChoice == "rock"){console.log("Tie! Rock vs Rock")}
    if(humanChoice == "rock" && computerChoice == "paper"){console.log("You lose! Paper beats Rock"); computerScore++;}
    if(humanChoice == "rock" && computerChoice == "scissors"){console.log("You win! Rock beats Paper"); humanScore++;}
    if(humanChoice == "paper" && computerChoice == "rock"){console.log("You win! Paper beats Rock"); humanScore++;}
    if(humanChoice == "paper" && computerChoice == "paper"){console.log("Tie! Paper vs Paper")}
    if(humanChoice == "paper" && computerChoice == "scissors"){console.log("You lose! Scissors beats Paper"); computerScore++;}
    if(humanChoice == "scissors" && computerChoice == "rock"){console.log("You lose! Rock beats Scissors"); computerScore++;}
    if(humanChoice == "scissors" && computerChoice == "paper"){console.log("You Win! Scissors vs Paper"); humanScore++;}
    if(humanChoice == "scissors" && computerChoice == "scissors"){console.log("Tie! Scissors vs Scissors")}
}

function playGame() {
    for (i = 0; i < 5; i++)
    {
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()
        playRound(humanSelection,computerSelection)
    }
}

playGame()
console.log("Your Score: " + humanScore + " Computer Score: " + computerScore)