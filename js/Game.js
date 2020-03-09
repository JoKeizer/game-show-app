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
        this.activePhrase = '';
    }


    /**
     * Selects random phrase from phrases property
     * @return {Object} Phrase object chosen to be used
     */
    getRandomPhrase() {

        let randomPhrase = Math.floor(Math.random() * Math.floor(this.phrases.length));
        this.activePhrase = this.phrases[randomPhrase];
        // Create a new instance of the Phrase class
        return this.phrases[randomPhrase];
    }


    handleInteraction(event) {

        const match = phrase.checkLetter(event).match;
        const keysOnBoard = Array.from(document.querySelectorAll('.key'));


        if (match) {
            phrase.showMatchedLetter(event);
            //if key key is the same disabled key
            keysOnBoard.forEach(key => {
                if (event.key === key.innerText) {
                    key.disabled = true;
                }
            });
            this.checkForWin();

        } else {
            this.removeLife();
        }
    }

    startGame() {
        //Hide overlay
        document.getElementById("overlay").style.display = "none";

        this.activePhrase = this.getRandomPhrase();
        phrase = new Phrase(this.activePhrase);
        phrase.addPhraseToDisplay();
    }

    removeLife() {
        // Add 1 to the number of missed guesses
        this.missed += 1;

        // Hide the heart
        const hearts = Array.from(document.querySelectorAll('.tries'));

        if (hearts.length > 0) {
            hearts[hearts.length - 1].className = 'hidden';
        }


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

