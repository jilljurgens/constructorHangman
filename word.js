var Letter = require("./letter.js")

function Word (word) {
	this.letters = word.split("").map(function(letter){
		return new Letter(letter);
	});
}
Word.prototype.toString = function () {
	return this.letters.join(" ");
}
Word.prototype.chooseLetter = function (letter) {
	//console.log(this.letters);
	var guessValid =  this.letters.map(function(data) {
		//console.log(data);
		return data.guess(letter);
	})	.includes(true);
	console.log(this + "");
	//console.log(guessValid);
	return guessValid;
}
Word.prototype.entireWord = function() {
	return this.letters.every(function(data){
		return data.shown;
	});
}
module.exports = Word;