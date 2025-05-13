import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-wordle',
  imports: [CommonModule],
  templateUrl: './wordle.component.html',
  styleUrl: './wordle.component.css'
})
export class WordleComponent {
  wordBank = [
    "TRAIN",
    "MISTY",
    "WATER",
    "FIGHT",
    "SHINY",
    "EMBER",
    "NURSE",
    "BERRY",
    "PSYCH",
    "SWIFT",
    "VITAL",
    "ROUTE",
    "BLAZE",
    "DITTO",
    "REPEL",
    "ROCKY",
    "GHOST",
    "STORM",
    "NAVEL",
    "SURGE",
    "WALLY",
    "SNOWY",
    "GRASS",
    "TYPES"]

  word = this.wordBank[Math.floor(Math.random() * 23)]; //gets random index of word bank

  letters = 0
  guess: string[] = [] //current guess
  finalGuess: { letter: string, color: string }[][] = [] //array of guesses 
  outcome = "";
  remainingGuesses = 5;
  guessStr = "" // concatenates the current guess

  logger() {
    console.log(this.word);
  }

  onKeyPress(event: KeyboardEvent): void {
    const key = event.key.toUpperCase(); //switches to upper case
    if (key === 'ENTER' && this.remainingGuesses >= 1) { //submission key
      if (this.guess.length === 5) {
        let guessStr = this.guess.join(''); //joins 5 chars to a string
        //this.finalGuess.push(guessStr); //store it in the array of guesses
        this.remainingGuesses--; //one less guess
        this.check(guessStr); //check if the guess was correct
        console.log(guessStr);

        if (this.remainingGuesses < 1) {
          this.outcome = `Out of guesses, the correct word was ${this.word}`; //logging for if there are no more guesses 
        }
        else if (guessStr === this.word) {
          this.outcome = "You guessed correctly!";
        } else {
          this.outcome = `Incorrect! ${this.remainingGuesses} remaining.`;
        }

        this.guess = []; //reset guess and letters counters
        this.letters = 0;
      }
    } else if (/^[A-Z]$/.test(key) && this.guess.length < 5) { //add letters before submit
      this.guess.push(key);
      this.letters++;
    } else if (key === 'BACKSPACE' && this.guess.length > 0) { //undo letters if backspace
      this.guess.pop();
      this.letters--;
    }
  }


  check(guess: string) {
    const coloredGuess: { letter: string, color: string }[] = []
    let color: any;
    for (let i = 0; i < 5; i++) {
      color = 'grey'; //default outcome
      if (guess[i] == this.word[i]) {
        console.log("green");
        color = 'green'; //update if letter is a match
      }
      else {
        for (let j = 0; j < 5; j++) {
          if (i != j && guess[i] == this.word[j]) {
            console.log("yellow");
            color = 'yellow'; //update if letter exists in word but not at current index
            break;
          }
        }
      }
      coloredGuess.push({ letter: guess[i], color }); //store as colored guess
    }
    this.finalGuess.push(coloredGuess); //push to finalGuess

  }
}
