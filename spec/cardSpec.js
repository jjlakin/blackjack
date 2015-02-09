var Card = require('../src/card');

describe('Card', function() {
var card;

	beforeEach(function(){
		var info = {name: 9}
		card = new Card(info);
	});

	it('should have a name', function(){
		expect(card.info.name).toEqual(9)
	});

	it('')

});
