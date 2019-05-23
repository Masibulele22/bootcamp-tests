describe('totalPhoneBill', function(){
	it('This totalPhoneBill function counts the total phone bill for all smses and calls', function(){
		var rewards = 'call, sms, call, sms, sms';
		assert.equal(totalPhoneBill(rewards), 'R7.45');
	})

	it('This totalPhoneBill function counts the total phone bill for all smses', function(){
		var rewards = 'sms, sms, sms';
		assert.equal(totalPhoneBill(rewards), 'R1.95');
	})
	
	it('This totalPhoneBill function counts the total phone bill for all calls', function(){
		var rewards = 'call, call';
		assert.equal(totalPhoneBill(rewards), 'R5.50');
	})

});
