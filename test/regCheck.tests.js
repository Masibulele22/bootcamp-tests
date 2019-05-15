describe('regCheck' , function(){

	it('The regCheck function checks if the number plate matches with the location', function(){
		assert.equal(regCheck("ML 22 3 GP","GP"), true);
	});
});