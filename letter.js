var word = require("./word.js");


function Letter(character){
	this.visible = false;
	this.character = character;
	console.log(this.character);
	this.printWord = function(word){
	//	console.log("what am i" + this.letters.join(" "));
	};
};
	//console.log("Print word" + this.printWord());

Letter.prototype.toString = function() {
	if (this.visible == true){
		return this.character;
	}
	else {
	 	return "_";
	}	
};
Letter.prototype.guess = function (guess) {
	if (this.letter === guess) {
		this.visible = true;
		return true;
	}
	else {
		return false;
	}
};	
module.exports = Letter;