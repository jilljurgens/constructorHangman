var getWord = require("./word.js");
var letter = require("./letter.js");
var inquirer = require("inquirer");



var myWord = getWord();
	console.log(myWord);

var lives = 10;

var blankWord = letter(myWord);
console.log("where is this" + blankWord);
//var lettersInWord = myWord.split("");

inquirer.prompt([
  {
    name: "letter",
    message: "Please guess a letter"
  }
  ]).then(function(answer) {
 	console.log(answer.letter);
 	
 	var inWord = false;
 	for (var i = 0; i < lettersInArray.length; i++) {
  		if (answer.letter == lettersInArray[i]) {
  			inWord = true;
  			//how to replace letter	
  			//lettersInWord[i] = answer.letter;
  			console.log(blankWord.join());
 		 };
 		if (inWord === false && i==lettersInWord.length -1){
			lives--; 
		};
		if (lives === 0){
			console.log("Out of guesses! New word");
			//resetGame();
		};
	};
});

