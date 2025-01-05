let humanScore = 0 
let computerScore = 0

const rockBtn = document.querySelector(".rockBtn")
const paperBtn = document.querySelector(".paperBtn")
const scissorsBtn = document.querySelector(".scissorsBtn")
const results = document.querySelector(".results")
const scores = document.querySelector(".scores")
const hmnScore = document.createElement("div")
const compScore = document.createElement("div")
const victor = document.createElement("div")
const buttons = document.querySelectorAll("button")
const resetButton = document.createElement("button")
resetButton.textContent = "Play Again"

scores.textContent = (`Your Score: ${humanScore}  Computer Score: ${computerScore}`)
scores.appendChild(hmnScore)
scores.appendChild(compScore)


rockBtn.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
    console.log("You chose Rock");
});

paperBtn.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
    console.log("You chose Paper");
});

scissorsBtn.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
    console.log("You chose Scissors");
});

resetButton.addEventListener("click", () => {
    buttons.forEach(button => {
        button.disabled = false;
    })
    humanScore = 0;
    computerScore = 0;
    results.textContent = '';
    scores.textContent = (`Your Score: ${humanScore}  Computer Score: ${computerScore}`)
    results.removeChild(resetButton)
})


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
    if(humanChoice == "rock" && computerChoice == "rock"){results.textContent = ("Tie! Rock vs Rock")}
    if(humanChoice == "rock" && computerChoice == "paper"){results.textContent = ("You lose! Paper beats Rock"); computerScore++; scores.textContent = (`Your Score: ${humanScore}  Computer Score: ${computerScore}`)}
    if(humanChoice == "rock" && computerChoice == "scissors"){results.textContent = ("You win! Rock beats Paper"); humanScore++; scores.textContent = (`Your Score: ${humanScore}  Computer Score: ${computerScore}`)}
    if(humanChoice == "paper" && computerChoice == "rock"){results.textContent = ("You win! Paper beats Rock"); humanScore++; scores.textContent = (`Your Score: ${humanScore}  Computer Score: ${computerScore}`)}
    if(humanChoice == "paper" && computerChoice == "paper"){results.textContent = ("Tie! Paper vs Paper")}
    if(humanChoice == "paper" && computerChoice == "scissors"){results.textContent = ("You lose! Scissors beats Paper"); computerScore++; scores.textContent = (`Your Score: ${humanScore}  Computer Score: ${computerScore}`)}
    if(humanChoice == "scissors" && computerChoice == "rock"){results.textContent = ("You lose! Rock beats Scissors"); computerScore++;scores.textContent = (`Your Score: ${humanScore}  Computer Score: ${computerScore}`)}
    if(humanChoice == "scissors" && computerChoice == "paper"){results.textContent = ("You Win! Scissors vs Paper"); humanScore++;scores.textContent = (`Your Score: ${humanScore}  Computer Score: ${computerScore}`)}
    if(humanChoice == "scissors" && computerChoice == "scissors"){results.textContent = ("Tie! Scissors vs Scissors")}

    if (humanScore == 5)
    {
        victor.textContent = "You Win!"
        results.appendChild(victor)
        buttons.forEach(button => {
            button.disabled = true;
        })
        results.appendChild(resetButton)
    }
    else if (computerScore == 5) {
        victor.textContent = "You Lose!"
        results.appendChild(victor)
        buttons.forEach(button => {
            button.disabled = true;
        })
        results.appendChild(resetButton)
    }
}

