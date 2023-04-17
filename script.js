'use strict';

// player 0
var player0 = document.querySelector('.player--0');
const score0 = document.getElementById('score--0');
const currentscore0 = document.getElementById('current--0');

// player 1
var player1 = document.querySelector('.player--1');
const score1 = document.getElementById('score--1');
const currentscore1 = document.getElementById('current--1')

// buttons + dice
const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


// erklærer disse variabler uden at sætte deres værdi
let scores, currentScore, activePlayer, playing;

// new game function
var resetGame = function () {

    // starting code
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    
    score0.textContent = 0;
    score1.textContent = 0;
    currentscore0.textContent = 0;
    currentscore1.textContent = 0;
    
    diceElement.classList.add('hidden');
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    player0.classList.add('player--active');
    player1.classList.remove('player--active');

}
// call the function so when page is reload, all the scores is set to default values 0.
resetGame();



// switch player function
const switchPlayer = function() {

    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');

}

// rolling dice functionality
btnRoll.addEventListener('click', function() {

    if (playing) {
        // 1. generating a random number from 1-6
        const dice = Math.trunc(Math.random() * 6) + 1;

        // 2. displays dice and hold-button
        diceElement.classList.remove('hidden');

        // her erstatter vi src koden til at være "dice-{tal mellem 1-6}" og på den måde får vi en random terning for hver klik.
        diceElement.src = `images/dice-${dice}.png`;

        // 3. check if dice is not 1
        if(dice !== 1) {
            // add dice to current score.
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } 
        else {
            switchPlayer();  
        } 
    }
   
});


btnHold.addEventListener('click', function () {
    
    if(playing) {   
        // 1. add current score to active players score
        scores[activePlayer] += currentScore;

        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        // 2. check if score == 100 
        if(scores[activePlayer] >= 100) {
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            diceElement.classList.add('hidden');
        } else {
            switchPlayer();
        }
    }

}); 



btnNew.addEventListener('click', resetGame); 
