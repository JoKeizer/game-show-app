/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// The player’s goal is to guess all the letters in a hidden, random phrase. At the beginning, the player only sees the number of letters and words in the phrase, represented by blank boxes on the screen.
// The player clicks an onscreen keyboard to guess letters in the phrase.
// The letter is disabled on the onscreen keyboard and a player can't select that letter again.
// If the selected letter is in the phrase at least once, the letter and its position in the phrase is highlighted on screen. All instances of the letter are made visible (so if there are 3 A's, all of the A's in the phrase appear at once).
// If the selected letter is not in the phrase, one of the player's hearts in the scoreboard is changed from a "live" heart to a "lost" heart.
// The player keeps choosing letters until they reveal all the letters in the phrase, or they make five incorrect guesses.


// app.js to create a new instance of the `Game` class and add event listeners for the start
// button and onscreen keyboard buttons.

// const phrase = new Phrase();
const game = new Game();

// console.log(`Phrase - phrase: ${phrase.phrase}`);

// game.phrases.forEach((phrase, index) => {
//     console.log(`Phrase ${index} - phrase: ${phrase}`);
// });

// const logPhrase = (phrase) => {
//     console.log(`Phrase - phrase: `, phrase);
// };
//
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());

const randomPhrase = game.getRandomPhrase();
const phrase = new Phrase(randomPhrase);
phrase.addPhraseToDisplay();
