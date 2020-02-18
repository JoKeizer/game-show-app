/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */


// Phrase.js to create a Phrase class to handle the creation of phrases.

// This method adds letter placeholders to the display when the game starts. Each letter is
// presented by an empty box, one list item for each letter. See the example_phrase_html.txt file
// for an example of what the render HTML for a phrase should look like when the game starts,
//     including any `id` or `class` attributes needed. When the player correctly guesses a letter, the
// empty box is replaced with the matched letter (see the `showMatchedLetter()` method below).
// Make sure the phrase displayed on the screen uses the `letter` CSS class for letters and the
//     `space` CSS class for space.

class Phrase {
    constructor(phrase) {
        this.phrase = phrase;
    }

    /**
     * Display phrase on game board
     */
    addPhraseToDisplay() {
        console.log("addPhraseToDisplay running");

        const board = document.getElementById('phrase');
        const letters = [...this.phrase];

        letters.forEach(letter => {
            const li = document.createElement('li');

            if(letter === ' ') {
                li.className = 'hide space';

            } else {
                li.className = `hide letter ${letter}`;
                li.textContent = letter;
            }

            board.firstElementChild.appendChild(li)
        })
    };
}


