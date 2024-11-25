let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let random_number = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    let str;
    (random_number == 1) ? str = 'Ножницы' : (random_number == 2) ? str = 'Камень' : 
        (random_number == 3) ? str = 'Бумага' : str = '';
    return str.toLowerCase();
}

function getHumanChoice() {
    let human_choice = prompt('Введите ваш выбор', 'Ножницы');
    return human_choice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == 'бумага') {
        if (computerChoice == 'камень') {
            ++humanScore;
            return 'win';
        }
        else if (computerChoice == 'ножницы') {
            ++computerScore;
            return 'los';
        }
        else {
            return 'draw';
        }
    }
    if (humanChoice == 'ножницы') {
        if (computerChoice == 'камень') {
            ++computerScore;
            return 'loss';
        }
        else if (computerChoice == 'ножницы') {
            return 'draw';
        }
        else {
            ++humanScore;
            return 'win';
        }
    }
    if (humanChoice == 'камень') {
        if (computerChoice == 'камень') {
            return 'draw';
        }
        else if (computerChoice == 'ножницы') {
            ++humanScore;
            return 'win';
        }
        else {
            ++computerScore;
            return 'loss';
        }
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    let resultHuman = humanScore;
    let resultComputer = computerScore;
    humanScore = 0;
    computerScore = 0;
    return `Result: Computer - ${resultComputer} and You - ${resultHuman}`; 
}
