describe('isWeekday', function(){
	it('This isWeekday function returns true if it is the day of the week', function(){
		assert.equal(isWeekday('weekDay'), false);
	})
	it('This isWeekday function returns false if it is not the day of the week', function(){
		assert.equal(isWeekday('Saturday'), false);
	})
	it('This isWeekday function returns false if it is not the day of the week', function(){
		assert.equal(isWeekday(' '), false);
	})
});