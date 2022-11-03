const options = {
    ROCK: 0,
    PAPER: 1,
    SCISSORS: 2
};

function getComputerChoice() {
    return choice = Math.floor((Math.random() * 3))
}

function getGameResult(playerChoice, computerChoice) {

    console.log(playerChoice, computerChoice);

    if(playerChoice == computerChoice) {
        return 0;
    }

    switch(playerChoice) {
        case options.ROCK:
            if(computerChoice == options.SCISSORS) {
                return 1;
            }
            else if(computerChoice == options.PAPER) {
                return -1;
            }

        case options.PAPER:
            if(computerChoice == options.ROCK) {
                return 1;
            }
            else if(computerChoice == options.SCISSORS) {
                return -1;
            }

        case options.SCISSORS:
            if(computerChoice == options.PAPER) {
                return 1;
            }
            else if(computerChoice == options.ROCK) {
                return -1;
            }

        default:
            console.error("Something is wrong");
    }

}

function displayComputerChoice(computerChoice) {
    const computerCardImg = document.querySelector(".card--computer").querySelector("img");
    const computerCardTitle = document.querySelector(".card--computer").querySelector("p");

    switch(computerChoice) {
        case options.ROCK:
            computerCardImg.src = "./resources/images/rock.png";
            computerCardTitle.innerText = "Rock"
            break;
        case options.PAPER:
            computerCardImg.src = "./resources/images/paper.png";
            computerCardTitle.innerText = "Paper"
            break;
        case options.SCISSORS:
            computerCardImg.src = "./resources/images/scissors.png";
            computerCardTitle.innerText = "Scissors"
            break;
    
        case -1:
            computerCardImg.src = "./resources/images/none.png";
            computerCardTitle.innerText = ""
            break;

        default:
            console.error("something is wrong");
    }
}

function setInfoTexts(result) {
    const textHuman = document.querySelector('.game__title--human');
    const computerHuman = document.querySelector('.game__title--computer');

    computerHuman.innerText = "VS";

    switch(result) {
        case -1:
            textHuman.innerText = "As expected. You lost."
            break;
        case 0:
            textHuman.innerText = "Just a draw. Try again."
            break;
        case 1:
            textHuman.innerText = "Looks like you got lucky. You won."
            break;
        case 2:
            textHuman.innerText = "Choose your weapon!"
            computerHuman.innerText = "The computer is waiting for you.";
            break;
        default:
            console.error("Something is wrong");
    }
}

function updateScoreboard(result) {
    const humanScore = document.querySelector('.scoreboard__player--human').querySelector('.scoreboard__player__score');
    const computerScore = document.querySelector('.scoreboard__player--computer').querySelector('.scoreboard__player__score');

    switch(result) {
        case -1:
            computerScore.innerText = (Number(computerScore.innerText) + 1).toString();
            break;
        case 0:
            break;
        case 1:
            humanScore.innerText = (Number(humanScore.innerText) + 1).toString();
            break;
        case 2:
            computerScore.innerText = '0';
            humanScore.innerText = '0';
            break;
        default:
            console.error("Something is wrong");
    }
}

function updateEndgameInfo(result) {
    const info = document.querySelector('.endgame__info');

    switch(result) {
        case -1:
            info.innerText = "You're dead"
            break;
        case 1:
            info.innerText = "You have one more chance to live. Run."
            break;
        case 2:
            info.innerText = ""
            break;
        default:
            console.error("Something is wrong");
    }
}

function gameAction() {

    if(!this.classList.contains("selected")){
        this.classList.add("selected");
        const cardsContainer = document.querySelector('.cards-container--human');
        cardsContainer.classList.add("collapsed");


        const playerChoice = Number(this.id);

        const computerChoice = getComputerChoice();
        displayComputerChoice(computerChoice);

        gameResult = getGameResult(playerChoice, computerChoice);
        setInfoTexts(gameResult);
        updateScoreboard(gameResult);

        const humanScore = document.querySelector('.scoreboard__player--human').querySelector('.scoreboard__player__score');
        const computerScore = document.querySelector('.scoreboard__player--computer').querySelector('.scoreboard__player__score');

        if(humanScore.innerText == '5' || computerScore.innerText == '5') {
            const scoreboard = document.querySelector('.scoreboard');
            const mainContainer = document.querySelector('.game__cards-container');
            scoreboard.classList.add('final');
            mainContainer.classList.add('final')

            updateEndgameInfo(gameResult);
        }
    }
    else {
        this.classList.remove("selected");
        const cardsContainer = document.querySelector('.cards-container--human');
        cardsContainer.classList.remove("collapsed");

        displayComputerChoice(-1);
        setInfoTexts(2);
        updateScoreboard(0);
        updateEndgameInfo(2);
    }
    
    
}

const optionBtns = document.querySelectorAll(".card--human");

let gameResult = null;

for(let optionIndex = 0; optionIndex < 3; optionIndex++) {
    optionBtns[optionIndex].addEventListener('click', gameAction)
}

document.querySelector('.endgame__btn').addEventListener('click', () => {

    const cardsContainer = document.querySelector('.cards-container--human');
    const scoreboard = document.querySelector('.scoreboard');
    const mainContainer = document.querySelector('.game__cards-container');
    
    optionBtns.forEach(option => {
        option.classList.remove("selected");
    })

    cardsContainer.classList.remove("collapsed");

    displayComputerChoice(-1);
    setInfoTexts(2);
    updateScoreboard(2);

    scoreboard.classList.remove('final');
    mainContainer.classList.remove('final')
})