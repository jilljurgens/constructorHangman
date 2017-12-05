var word = require("./word.js");


function letter(character){
	this.visible = false;
	this.character = character;
	console.log(this.character);
	this.printWord = function(word){
		console.log(this.letters.join(" "));
	}

	//console.log(this.printWord());

letter.prototype.toString = function() {
	if (this.visible == true){
		return this.character;
	}
	else {
	//	return ;
	}	
};
};	
module.exports = letter;