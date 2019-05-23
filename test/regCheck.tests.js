describe('regCheck' , function(){

	it('The regCheck function will confirm true if the numberplate matches with the location input', function(){
		assert.equal(regCheck("ML 22 3 GP","GP"), true);
	});
	
	it('The regCheck function will confirm false if the numberplate input passes an empty string', function(){
		assert.equal(regCheck(" "), false);
	});
});