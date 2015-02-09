function Deck (cardInfo, Card) {
	
	this.deck    = [];
	
	this.setDeck = function(cardInfo, Card) {	
		this.deck = cardInfo.map(function(info) {
			return new Card(info);
		});
	}
	
	this.setDeck(cardInfo, Card);	
}

module.exports = Deck;