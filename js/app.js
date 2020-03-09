/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


let game = null;
let phrase = null;

let pressedKeys = [];
const start = document.getElementById('btn__reset');
const keyBoardBtns = document.getElementById('qwerty');

//reset game
function resetDisplay() {

    //clear message
    const msg = document.getElementById('game-over-message');
    msg.textContent = '';


    //clear board
    const board = document.getElementById('phrase');
    const listItems = Array.from(document.querySelector('#phrase ul').childNodes);

    if(listItems.length > 0) {
        listItems.forEach(listItem => board.firstElementChild.removeChild(listItem));
    }

    //enable keys
    const keys = Array.from(document.querySelectorAll('.key'));
    keys.forEach(key => key.disabled = false);

    //reset hears
    const hiddenLifes = Array.from(document.querySelectorAll('.hidden'));
    hiddenLifes.forEach(heart => heart.className = 'tries');

    //reset the keys in the pressedKeys to empty array
    pressedKeys = [];

    //hide start screen
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none'
}


function markButton(event) {
    if(event.type === 'click') {
        event.target.disabled = true;
        game.handleInteraction(event);
    }
}

// When a keyboard button is clicked
keyBoardBtns.addEventListener('click', function() {
    // If a button is clicked, call the markButton() function
    if (event.target.tagName === 'BUTTON') {
        markButton(event);
    }
});

//when a key from the keyboard is pressed
document.addEventListener('keypress', function(event) {
    // letter only
    const filter = /[a-zA-Z]+/;
    if (filter.test(event.key) && event.key !== 'Enter') {
        markButton(event);
    }
});

//start Game on button click
start.addEventListener('click', function() {
    resetDisplay();
    game = new Game();
    game.startGame();
});