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