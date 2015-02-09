function Card (info) {
	this.info       = info;
  this.isFaceDown = true;
}

Card.prototype.flip = function() {
  this.isFaceDown = ((this.isFaceDown) ? false : true);
}

module.exports = Card;
