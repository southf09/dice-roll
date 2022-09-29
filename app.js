//Query Selectors
const playBtn = document.querySelector('.btn');
const diceOne = document.querySelector('.diceOne');
const diceTwo = document.querySelector('.diceTwo');
const scoreboard = document.querySelector('.scoreboard');


//On refresh, event listener that plays the game
playBtn.addEventListener('click', () => {
    randomRoll();
})


//Dice Rolls
const randomRoll = () => {
    //Player 1 Roll and image change
    const p1Roll = Math.floor(Math.random() * 6 + 1);
    diceOne.setAttribute('src', `/images/dice${p1Roll}.png`);
    //Player 2 Roll and image change
    const p2Roll = Math.floor(Math.random() * 6 + 1);
    diceTwo.setAttribute('src', `/images/dice${p2Roll}.png`);
    //Scoreboard updater
    whoWins(p1Roll, p2Roll);
}


//Decide which roll wins the game
const whoWins = (p1Roll, p2Roll) => {
    if(p1Roll > p2Roll){
        scoreboard.textContent = 'Player 1 Wins!!';
    } else if(p2Roll > p1Roll){
        scoreboard.textContent = 'Player 2 Wins!!';
    } else {
        scoreboard.textContent = 'The game is a tie!!';
    }
}