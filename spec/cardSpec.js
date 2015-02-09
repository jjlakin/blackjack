var Card = require('../src/card');

describe('Card', function() {
var card;

	beforeEach(function(){
		var info = {name: 11, suit: 'spades'};
		card = new Card(info);
	});

	it('has a name', function(){
		expect(card.info.name).toEqual(11);
	});

	it('starts face down', function() {
		expect(card.isFaceDown).toBe(true);
	});

	it('can be turned over', function() {
		card.flip();

		expect(card.isFaceDown).toBe(false);
	});

});
