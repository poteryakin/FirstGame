let humanScore = 0;
let computerScore = 0;

const btns = document.querySelectorAll('button');
let result = document.getElementById("result");
btns.forEach(b => b.addEventListener("click", playRound));

function getComputerChoice() {
    let random_number = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    let str;
    (random_number == 1) ? str = 'Ножницы' : (random_number == 2) ? str = 'Камень' : 
        (random_number == 3) ? str = 'Бумага' : str = '';
    return str.toLowerCase();
}

function getHumanChoice(e) {
    return this.value;
}

function playRound() {
    let humanChoice = this.value;
    let computerChoice = getComputerChoice();
    if (computerScore != 5 || humanScore != 5) {
        if (humanChoice == 'бумага') {
            if (computerChoice == 'камень') {
                ++humanScore;
                result.innerText = `Computer: ${computerScore} vs You: ${humanScore}`;
            }
            else if (computerChoice == 'ножницы') {
                ++computerScore;
                result.innerText = `Computer: ${computerScore} vs You: ${humanScore}`;
            }
            else {
                result.innerText = `Computer: ${computerScore} vs You: ${humanScore}`;
            }
        }
        if (humanChoice == 'ножницы') {
            if (computerChoice == 'камень') {
                ++computerScore;
                result.innerText = `Computer: ${computerScore} vs You: ${humanScore}`;
            }
            else if (computerChoice == 'ножницы') {
                result.innerText = `Computer: ${computerScore} vs You: ${humanScore}`;
            }
            else {
                ++humanScore;
                result.innerText = `Computer: ${computerScore} vs You: ${humanScore}`;
            }
        }
        if (humanChoice == 'камень') {
            if (computerChoice == 'камень') {
                result.innerText = `Computer: ${computerScore} vs You: ${humanScore}`;
            }
            else if (computerChoice == 'ножницы') {
                ++humanScore;
                result.innerText = `Computer: ${computerScore} vs You: ${humanScore}`;
            }
            else {
                ++computerScore;
                result.innerText = `Computer: ${computerScore} vs You: ${humanScore}`;
            }
        }
    }
    if (computerScore == 5 || humanScore == 5) {
        (humanScore == 5) ? result.innerText = `You win` : result.innerText = `You loss`;
        humanScore = 0;
        computerScore = 0;
    }
}
