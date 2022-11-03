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
            computerCardImg.src = "/resources/images/rock.png";
            computerCardTitle.innerText = "Rock"
            break;
        case options.PAPER:
            computerCardImg.src = "/resources/images/paper.png";
            computerCardTitle.innerText = "Paper"
            break;
        case options.SCISSORS:
            computerCardImg.src = "/resources/images/scissors.png";
            computerCardTitle.innerText = "Scissors"
            break;
    
        case -1:
            computerCardImg.src = "/resources/images/none.png";
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

const optionBtns = document.querySelectorAll(".card--human");

let gameResult = null;


for(let optionIndex = 0; optionIndex < 3; optionIndex++) {
    optionBtns[optionIndex].addEventListener('click', gameAction)
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

        console.log(gameResult);   

    }
    else {
        this.classList.remove("selected");
        const cardsContainer = document.querySelector('.cards-container--human');
        cardsContainer.classList.remove("collapsed");

        displayComputerChoice(-1);
        setInfoTexts(2);
    }
    
    
}