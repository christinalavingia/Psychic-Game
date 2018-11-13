//Generates the list of options for the computer's guesses

var computerOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Sets our variables

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var playerGuess = [];
var computerGuess = [];

//This code will generate a random letter and store it for the computer guess
window.onload = function() {
    var computerGuess = computerOptions [Math.floor(Math.random() * computerOptions.length)];
}

document.onkeyup = function(event) {
    var playerGuess = event.key;
    playerGuess.push(playerGuess);


//Handles correct guesses
    if ((playerGuess === computerGuess) && (guessesLeft > 0)) {
        wins++;
        guessesLeft = 9;
        lettersGuessed.length = 0;
        var computerGuess = computerOptions [Math.floor(Math.random() * computerOptions.length)];

    } else if (playerGuess !== computerGuess) && (guessesLeft > 0) {
        guessesLeft--;

    } else {
        losses++;
        lettersGuessed.length = 0;
        guessesLeft = 9;
        var computerGuess = computerOptions [Math.floor(Math.random() * computerOptions.length)];
    }

    var html = "<p>Guess what letter I'm thinking of ...</p>" +
                "<p>Wins: " + wins + "</p>" +
                "<p>Losses: " + losses + "</p>" +
                "<p>Guesses Left: " + guessesLeft + "</p>" +
                "<p> Your Guesses So Far: " + playerGuess + "</p>";

    document.querySelector("#game").innerHTML = html;
}



