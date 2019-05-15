describe('totalPhoneBill', function(){
	it('This totalPhoneBill function counts the total phone bill for all smses and calls', function(){
		assert.equal(totalPhoneBill(rewards), totalBill);
	})
});
