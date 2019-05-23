describe('transportFee', function(){
    it("This function should return R20 in the morning", function(){
        assert.equal(transportFee('morning'), 'R20');
    })
    it("This function should return R10 in the afternoon", function(){
        assert.equal(transportFee('afternoon'), 'R10');    
    })
    it("This function should return free during nightshift", function(){
        assert.equal(transportFee('nightshift'), 'free');
    })
    
});