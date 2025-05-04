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
  finalGuess: string[] = [] //array of guesses 
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
        this.finalGuess.push(guessStr); //store it in the array of guesses
        this.remainingGuesses--; //one less guess
        this.check(guessStr); //check if the guess was correct
        console.log(guessStr);

        if (this.remainingGuesses < 1) {
          this.outcome = "Out of guesses, refresh to try again!"; //logging for if there are no more guesses 
        }
        else if (guessStr === this.word) {
          this.outcome = "You guessed correctly!";
        } else {
          this.outcome = `Incorrect! ${this.remainingGuesses} remaining.`;
        }

        this.guess = [];
        this.letters = 0;
      }
    } else if (/^[A-Z]$/.test(key) && this.guess.length < 5) {
      this.guess.push(key);
      this.letters++;
    } else if (key === 'BACKSPACE' && this.guess.length > 0) {
      this.guess.pop();
      this.letters--;
    }
  }
  check(guess: string) {
    let hit: any
    for (let i = 0; i < 5; i++) {
      hit = false;
      if (guess[i] == this.word[i]) {
        console.log("green");
        hit = true;
      }
      else {
        for (let j = 0; j < 5; j++) {
          if (i != j && guess[i] == this.word[j]) {
            console.log("yellow");
            hit = true;
            break;
          }
        }
      }
      if (!hit) {
        console.log("grey");
      }
    }
    this.guess = [];
    this.letters = 0;
    //this.finalGuess = ""
  }
}
