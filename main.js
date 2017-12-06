var Word = require("./word.js");
var letter = require("./letter.js");
var inquirer = require("inquirer");

var words = ["bat", "ball", "swing", "pitcher", "homerun", "single", "double", "triple", "out", ];
//debugger;
//var myWord = Word();


//var lettersInWord = myWord.split("");


function Hangman () {
	this.start = function () {
		this.lives = 10;
		this.pickWord();
	}
	this.pickWord = function () {
		var randomize = words[Math.floor(Math.random()*words.length)];
		this.currentWord = new Word(randomize);
		// console.log(this.currentWord);
		this.userGuess();
	}
	this.userGuess = function () {
		inquirer.prompt([
			    {
			      type: "input",
			      message: "Choose a letter",
			      name: "letter"
			    }
			    ])
		  	.then((answer) => {
			    var guessCorrect = this.currentWord.chooseLetter(answer.letter);
			    if (guessCorrect === false) {
			    	this.lives--;
			    	console.log("You have " +this.lives + " lives left");
			    }
			    if (this.lives === 0) {
			    	return inquirer.prompt([
						    {
						      type: "confirm",
						      message: "Would you like to play again?",
						      name: "yes",
						      default: true
						    }
						    ])
		  				.then((answer) => {
		  					if (answer.yes === true) {
		  						this.start();
		  					}
		  				});
			    }
			    if (this.currentWord.entireWord() === false) {
			    	this.userGuess();
			    }
			    else {
			    	console.log("You Win")
			    	//do a prompt to ask if they want to play again
			    	this.start();
			    }
		  	});
	}
}
module.exports = Hangman;