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

function changeChoicesImgs(playerChoice, computerChoice) {
    const humanCardImg = document.querySelector(".player-card--human").querySelector("img");
    const computerCardImg = document.querySelector(".player-card--computer").querySelector("img");

    switch(playerChoice) {
        case options.ROCK:
            humanCardImg.src = "/resources/images/rock.png";
            break;
        case options.PAPER:
            humanCardImg.src = "/resources/images/paper.png";
            break;
        case options.SCISSORS:
            humanCardImg.src = "/resources/images/scissors.png";
            break;
    }

    switch(computerChoice) {
        case options.ROCK:
            computerCardImg.src = "/resources/images/rock.png";
            break;
        case options.PAPER:
            computerCardImg.src = "/resources/images/paper.png";
            break;
        case options.SCISSORS:
            computerCardImg.src = "/resources/images/scissors.png";
            break;
    }
}



const optionBtns = document.querySelectorAll(".player-option");

let gameResult = null;

// ROCK
optionBtns[0].addEventListener('click', () => {

    const playerChoice = options.ROCK;
    const computerChoice = getComputerChoice();
    
    changeChoicesImgs(playerChoice, computerChoice);
    gameResult = getGameResult(playerChoice, computerChoice);

    console.log(gameResult);    
})

// PAPER
optionBtns[1].addEventListener('click', () => {

    const playerChoice = options.PAPER;
    const computerChoice = getComputerChoice();
    
    changeChoicesImgs(playerChoice, computerChoice);
    gameResult = getGameResult(playerChoice, computerChoice);

    console.log(gameResult);   

})

// SCISSORS
optionBtns[2].addEventListener('click', () => {

    const playerChoice = options.SCISSORS;
    const computerChoice = getComputerChoice();
    
    changeChoicesImgs(playerChoice, computerChoice);
    gameResult = getGameResult(playerChoice, computerChoice);

    console.log(gameResult);     

})

