//Generates the list of options for the computer's guesses
var computerOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Sets our variables for keeping track fo score
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var playerGuessArray = [];
var playerGuess;

//Generates a random letter and stores it for the computer guess
window.onload = function() {
    var computerGuess = computerOptions [Math.floor(Math.random() * computerOptions.length)];
    console.log(computerGuess);

//Logs playerGuess
 document.onkeyup = function(event) {
    var playerGuess = event.key;
    playerGuessArray.push(playerGuess);
    var displayPlayerGuess = document.getElementById("lettersGuessed");
    displayPlayerGuess.innerHTML += playerGuess;
    var displayGuessesLeft = document.getElementById("guessesLeft");
    displayGuessesLeft.innerHTML = guessesLeft;

// Handles correct guesses
    if ((playerGuess === computerGuess) && (guessesLeft > 0)) {
        wins++;
        guessesLeft = 9;
        playerGuessArray.length = 0;
        var displayWins = document.getElementById("wins");
        displayWins.innerHTML = wins;
        computerGuess = computerOptions [Math.floor(Math.random() * computerOptions.length)];

    } else if ((playerGuess !== computerGuess) && (guessesLeft > 0)) {
        guessesLeft--;

    } else {
        losses++;
        guessesLeft = 9;
        playerGuessArray.length = 0;
        var displayLosses = document.getElementById("losses");
        displayLosses.innerHTML = losses;
        computerGuess = computerOptions [Math.floor(Math.random() * computerOptions.length)];
        console.log(losses);
        console.log(computerGuess);
        
        }

    }

}
 
