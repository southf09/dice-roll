//Query Selectors
const playBtn = document.querySelector('.btn');
const diceOne = document.querySelector('.diceOne');
const diceTwo = document.querySelector('.diceTwo');


//On refresh, event listener that plays the game
playBtn.addEventListener('click', () => {
    randomRoll();
})


//Dice roll for Player 1
// const randomOne = () => {
//     let p1Roll = Math.floor(Math.random() * 6 + 1);
//     diceOne.setAttribute('src', `/images/dice${p1Roll}.png`);
// }

// //Dice roll for Player 2
// const randomTwo = () => {
//     let p2Roll = Math.floor(Math.random() * 6 + 1);
//     diceTwo.setAttribute('src', `/images/dice${p2Roll}.png`);
// }

const randomRoll = () => {
    //Player 1 Roll and image change
    const p1Roll = Math.floor(Math.random() * 6 + 1);
    diceOne.setAttribute('src', `/images/dice${p1Roll}.png`);
    //Player 2 Roll and image change
    const p2Roll = Math.floor(Math.random() * 6 + 1);
    diceTwo.setAttribute('src', `/images/dice${p2Roll}.png`);
}


//Update dice images
//setAttribute



//Update header & add flag image
//innerText / innerHTML