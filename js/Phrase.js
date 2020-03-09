/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase;
    }

    /**
     * Display phrase on game board
     */


    addPhraseToDisplay() {
        const board = document.getElementById('phrase');
        const letters = [...this.phrase];

        letters.forEach(letter => {
            const li = document.createElement('li');

            if (letter === ' ') {
                li.className = 'hide space';

            } else {
                li.className = `hide letter ${letter}`;
                li.textContent = letter;
            }

            board.firstElementChild.appendChild(li)
        });
    }

    checkLetter(event) {
        let letter;
        if (event.type === 'click') {
            letter = event.target.textContent;
        } else if (event.type === 'keypress') {
            letter = event.key
        }

        // Spread the phrase into individual characters
        const characters = [...this.phrase];

        const indexes = characters.reduce((indexes, char, i) => {
            if (char === letter) {
                indexes.push(i);
            }
            return indexes;
        }, []);

        return {
            match: indexes.length > 0,
            indexes: indexes
        }
    }

    showMatchedLetter(event) {

        // Matching indexes array from the checkLetter() method
        const indexes = this.checkLetter(event).indexes;

        // An array of the characters from the board
        const boardChars = Array.from(document.getElementById('phrase').firstElementChild.children);

        // Loops over each character element from the board
        boardChars.forEach((char, i) => {

            // Loops over the matching indexes array
            indexes.forEach(index => {

                // If the matching index is the same as the character index, then change the class name to 'show letter'
                if (index === i) {
                    char.classList = 'show letter';
                }
            });
        });
    }

}


