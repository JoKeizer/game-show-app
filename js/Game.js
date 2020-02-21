/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            "yellow",
            "whiskey",
            "vacation",
            "hello world",
            "friends for life"
        ]
        this.activePhrase = '';
        this.phrase = this.createPhrase();

    }
    

    /**
     * Selects random phrase from phrases property
     * @return {Object} Phrase object chosen to be used
     */
    getRandomPhrase() {
        let number = Math.floor(Math.random() * Math.floor(this.phrases.length));
        return this.phrases[number];
    }

    /**
     * Creates phrases for use in game
     * @return {array} An array of phrases that could be used in the game
     */
    
    createPhrase() {
        const randomPhrase = this.getRandomPhrase();

        // Create a new instance of the Phrase class
        return new Phrase(randomPhrase);
    }

    handleInteraction(event) {
        // Returns true if the letter matches a letter in the phrase
        const match = this.phrase.checkLetter(event).match;
        console.log("match", match)

        if (match) {
            console.log(match, "true")
            this.phrase.showMatchedLetter(event);
            this.checkForWin();

        } else {
            console.log(match, "false")
            this.removeLife();
        }
    }

    startGame() {
        //Hide overlay
        document.getElementById("overlay").style.display = "none";

        console.log("running")
        // Add the random phrase to the board
        this.phrase.addPhraseToDisplay();
    }

    removeLife() {
        // Add 1 to the number of missed guesses
        this.missed += 1;

        // Hide the heart
        const hearts = Array.from(document.querySelectorAll('.tries'));
        console.log('hearts' ,hearts);

        if (hearts.length > 0) {
            hearts[hearts.length - 1].className = 'hidden';
            console.log('hearts' ,hearts);
        }

        console.log(this.missed, 'missed')

        // If the player has 5 missed guesses, call gameOver()
        if (this.missed === 5) {
            this.gameOver();
        }

    }

    checkForWin() {
        //logic how many letters on the board are show
        const totalLetters = Array.from(document.querySelectorAll('.letter'));
        const shownLetters = Array.from(document.querySelectorAll('.show'));

        if(totalLetters.length === shownLetters.length) {
            this.gameOver();
        }
    }

    showOverlay(message, overlayClass) {
        const overlay = document.getElementById('overlay');
        overlay.className = overlayClass;
        overlay.style.display = 'flex';
        
        const msg = document.getElementById('game-over-message');
        msg.textContent = message;

        const btn = document.getElementById('btn__reset');
        btn.textContent = 'Play Again';
    }

    gameOver() {
        if(this.missed === 5) {
            this.showOverlay('Game Over', 'lose')
        } else if(this.missed < 5) {
            this.showOverlay('You win', 'win')
        }
    }
}

