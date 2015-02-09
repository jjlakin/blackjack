function Deck () {

	this.spades = [];
	this.hearts = [];

}

SUITS = ['spades', 'hearts'];

Deck.prototype.newDeck = function() {
	for(var i = 1; i < 14; i++){
		this.spades.push(i);
		this.hearts.push(i);
	}
};

Deck.prototype.deal = function(testSuit) {
	
	// var suit = SUITS[Math.floor((Math.random() * 2))];
	var suit = 'spades'
	var numberInSuit = Math.floor((Math.random() * (this[suit].length) - 1) + 1);
	var card = this[suit].splice(numberInSuit,1);
	return suit + card
};

Deck.prototype.deal = function(first_argument) {
	// body...
};

module.exports = Deck;