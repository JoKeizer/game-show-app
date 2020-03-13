/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


let gameObj;
let phrase = null;

let pressedKeys = [];
const start = document.getElementById('btn__reset');
const keyBoardBtns = document.getElementById('qwerty');
let qwertyButtons = document.querySelectorAll('#qwerty button');

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


function markButton(e=null, buttonPressed){
    let returnValue = gameObj.handleInteraction(buttonPressed);
    if (e!=null){
        if (returnValue){
            e.target.classList.add('chosen');
        } else {
            e.target.classList.add('wrong');
        }
        e.target.setAttribute('disabled','true');
    } else {
        for (let i=0; i<qwertyButtons.length; i++){
            if(qwertyButtons[i].innerHTML == buttonPressed){
                if (returnValue){
                    qwertyButtons[i].classList.add('chosen');
                } else {
                    qwertyButtons[i].classList.add('wrong');
                }
            }
        }
    }
}

// When a keyboard button is clicked

keyBoardBtns.addEventListener('click', (e) => {
    if (e.target.tagName == "BUTTON"){
        let clickedLetter = e.target.innerHTML;
        markButton(e, clickedLetter);
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
    gameObj = new Game();
    gameObj.startGame();
});