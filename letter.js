function Letter (letter) {
	this.letter = letter;
	this.visible = false;
}
Letter.prototype.toString = function () {
	if (this.visible === false) {
		return "_";
	}
	else {
		return this.letter;
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