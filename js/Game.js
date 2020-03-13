/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

//
// The handleInteraction method should disable the current letter, but I'm not seeing that here. Inside your if statement, I'm seeing a few issues. First, the adding of "wrong" and "chosen" classes to the key should be happening here. Second, when the letter matches, the "if" part of should call checkForWin, and then depending on what that returns, gameOver should be called here.
//
//     So, based on that, the checkForWin should truly just be checking to see if the game has been won, and should return a true or false.
//
//     Your removeLife and gameOver methods look good.

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            "yellow",
            "whiskey",
            "vacation",
            "hello world",
            "friends for life"
        ];
        this.phraseObj; //the phrase Object
    }


    /**
     * Selects random phrase from phrases property
     * @return {Object} Phrase object chosen to be used
     */
    getRandomPhrase() {

        let randomPhrase = Math.floor(Math.random() * Math.floor(this.phrases.length));
        this.phraseObj = this.phrases[randomPhrase];
        // Create a new instance of the Phrase class
        return this.phrases[randomPhrase];
    }


    handleInteraction(button){
        console.log(button)
        let match = this.phraseObj.checkLetter(button);
        let returnValue = false;
        if (match!=null){ //checkLetter returned a letter
            this.phraseObj.showMatchedLetter(button);
            this.checkForWin();
            returnValue = true;
        } else { //checkletter returned null, no match
            this.removeLife();
        }
        return returnValue;
    }

    removeLife() {
        let scoreboard = document.querySelector('#scoreboard ol');
        this.missed++;
        scoreboard.removeChild(scoreboard.firstElementChild);
        let lostHeartLi = document.createElement('li');
        lostHeartLi.className = "tries";
        let lostHeartImg = document.createElement('img');
        lostHeartImg.src = "images/lostHeart.png";
        lostHeartLi.appendChild(lostHeartImg);
        scoreboard.appendChild(lostHeartLi);
        if (this.missed==5){
            this.gameOver(false);
        }

    }

    checkForWin() {
        let shown = document.querySelectorAll('.show');
        let letters = document.querySelectorAll('.letter');
        if (shown.length == letters.length){
            this.gameOver(true);
        }
    }

    //clear keyboard for replay
    clearKeyboard(){
        let keyboardLetters = document.querySelectorAll('#qwerty button');
        for (let i=0; i<keyboardLetters.length; i++){
            keyboardLetters[i].disabled = false;
            keyboardLetters[i].classList.remove('chosen', 'wrong');
        }
    }

    //clear scoreboard for replay
    clearScoreboard(){
        for (let i=0; i<5; i++){
            let scoreboard = document.querySelector('#scoreboard ol');
            scoreboard.removeChild(scoreboard.firstElementChild);
            let lostHeartLi = document.createElement('li');
            lostHeartLi.className = "tries";
            let lostHeartImg = document.createElement('img');
            lostHeartImg.src = "images/liveHeart.png";
            lostHeartImg.classList.add('animated', 'pulse', 'infinite');
            lostHeartLi.appendChild(lostHeartImg);
            scoreboard.appendChild(lostHeartLi);
        }
    }

    gameOver(gameWon){
        let overlay = document.getElementById('overlay');
        let title = document.querySelector('#overlay .title');
        let startButton = document.querySelector('#btn__reset');
        if (gameWon){
            overlay.className = "win";
            title.textContent = "You Win!";
            startButton.textContent = "Play Again!"
            overlay.style.display = 'flex';
        } else {
            overlay.className = "lose";
            title.textContent = "You Lost!";
            startButton.textContent = "Play Again!";
            overlay.style.display = 'flex';
        }
    }


    startGame() {

        this.clearKeyboard();
        this.clearScoreboard();
        restartKeysPressed();

        let randomPhrase = this.getRandomPhrase();
        this.phraseObj = new Phrase(randomPhrase);
        this.phraseObj.addPhraseToDisplay();
    }


}


function restartKeysPressed(){
    keysPressed = "";
}
