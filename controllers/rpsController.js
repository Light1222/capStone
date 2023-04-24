

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function getPcChoice(options){
    let choiceIndex = getRandomInt(3);
    return options[choiceIndex];
}

function pickWinner(playerChoice, pcChoice) {
    if (playerChoice === pcChoice) {
        return 'draw';
    }
    if (playerChoice === 'rock') {
        if (pcChoice === 'paper') {
            return 'PC'
        }
        if (pcChoice === 'scissors') {
            return 'Player'
        }
    }
    if (playerChoice === 'paper') {
        if (pcChoice === 'scissors') {
            return 'PC'
        }
        if (pcChoice === 'rock') {
            return 'Player'
        }
    }
    if (playerChoice === 'scissors') {
        if (pcChoice === 'rock') {
            return 'PC'
        }
        if (pcChoice === 'paper') {
            return 'Player'
        }
    }
}
