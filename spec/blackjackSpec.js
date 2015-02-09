var Deck = require('../src/deck');


describe('Deck', function(){

	beforeEach(function() {
		deck = new Deck();
		deck.newDeck();
	});

	it('when refreshed should have 13 spades', function(){	
		expect(deck.spades.length).toEqual(13);
	});

	it('when refreshed should have 13 hearts', function(){
		expect(deck.hearts.length).toEqual(13);
	});

	it('should deal a card', function(){
		
		expect(deck.deal('spades')).toEqual(String);
	});

	it('should deal a card', function(){
		deck.deal();
		expect(deck.spades.length).toEqual(12);
	});

}); 