var Card = require('../src/card');

describe('Card', function() {
var card;

	beforeEach(function(){
		var info = {name: 11, suit: 'spades'};
		card = new Card(info);
	});

	it('should have a name', function(){
		expect(card.info.name).toEqual(11);
	});

	it('should have a value', function(){
		expect(card.info.value).toEqual(10);
	});

});
