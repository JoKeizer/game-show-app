/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


// Game.js to create a Game class methods for starting and ending the game, handling
// interactions, getting a random phrase, checking for a win, and removing a life from the
// scoreboard.


class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = '';
        this.phrase = this.createPhrase();

    }

    /**
     * Creates phrases for use in game
     * @return {array} An array of phrases that could be used in the game
     */
    createPhrases() {
        return [
            "yellow",
            "whiskey",
            "vacation",
            "Hello world",
            "friends for life"
        ];
    };


    /**
     * Selects random phrase from phrases property
     * @return {Object} Phrase object chosen to be used
     */
    getRandomPhrase() {
        let number = Math.floor(Math.random() * Math.floor(this.phrases.length));
        return this.phrases[number];
    }

    // Create a new instance of the Phrase class
    createPhrase() {

        // Get a random phrase
        const randomPhrase = this.getRandomPhrase();

        // Create a new instance of the Phrase class
        return new Phrase(randomPhrase);
    }

    startGame() {
        //Hide overlay
        document.getElementById("overlay").style.display = "none";

        console.log("running")
        // Add the random phrase to the board
        this.phrase.addPhraseToDisplay();
    }
}

