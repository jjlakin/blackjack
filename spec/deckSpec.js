var Deck = require('../src/deck');

describe('Deck', function(){

	function CardDouble(info) {
		this.info = info;
	}

	var card;

	beforeEach(function() {
	});

	it('initializes with card objects', function() {
		card1 = new CardDouble({name: 10, suit: 'spades'});
		card2 = new CardDouble({name: 11, suit: 'spades'});

		var cardInfo = [{name: 10, suit: 'spades'}, {name: 11, suit: 'spades'}]
		var deck     = new Deck(cardInfo, CardDouble);

		expect(deck.deck).toEqual([card1, card2])
	});

}); 