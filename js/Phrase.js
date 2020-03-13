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
        let phrase = document.getElementById('phrase');
        phrase.removeChild(phrase.firstElementChild);
        let newUl = document.createElement('ul');
        phrase.append(newUl);

        //now print the new phrase
        for (let i=0; i<this.phrase.length; i++){
            let li = document.createElement('li');
            li.textContent = this.phrase[i];
            if (this.phrase[i]!==" "){
                li.classList.add('letter');
                li.classList.add('hide');
            } else {
                li.classList.add('space');
            }
            let phraseUl = document.querySelector('#phrase ul');
            phraseUl.appendChild(li);
        }
    }

    checkLetter(keybutton){
        let letters = document.querySelectorAll('.letter');
        let result = null;
        for (let i=0; i<letters.length; i++){
            if (letters[i].textContent.toUpperCase() == keybutton.toUpperCase()){
                result = keybutton;
            }
        }

        console.log("result",result);

        return result; //return either NULL or LETTER
    }


    showMatchedLetter(matchedLetter){
        let letters = document.querySelectorAll('.letter');
        for (let i=0; i<letters.length; i++){
            if (letters[i].textContent.toUpperCase() == matchedLetter.toUpperCase()){
                letters[i].classList.remove("hide");
                letters[i].classList.add("show");
            }
        }
    }
}


