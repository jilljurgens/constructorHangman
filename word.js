var letter = require("./letter.js");

var words = ["bat", "ball", "swing", "pitcher", "homerun", "single", "double", "triple", "out"];
var randomize = function(){
	return Math.floor(Math.random() * words.length);
};
//var randomWord = words[randomize];

function getWord(){
	var randomNumber = randomize();
	this.word = words[randomNumber];
	//console.log(this.word);
	this.wordSplit = function(){
		var lettersInWord = [];
 			for (var j = 0; j < word.length; j++) { 
			lettersInWord.push("_");
			};
			return lettersInWord;
	};
	this.letters = word.split("").map(function(character){
		return new letter(character); 
	});

	var lettersInArray = [];
		lettersInArray = this.word.split("");
		return lettersInArray;
	//console.log(this.wordSplit());
	// if true, display vhar, if not, display blank _
	// //if visible, display character, else, display _
	// this.visible = false;
	// this.char = function(){
	// 	var lettersInArray = [];
	// 	lettersInArray = this.word.split("");
	// 	return lettersInArray;
	// }	
	// console.log(this.char());
	// // };

//letter.prototype.toSting = function(){};


	
//console.log(this.word);

};
//var wordGuessing = new getWord(words[randomize]);
//console.log(wordGuessing.word);
//getWord();
module.exports = getWord;