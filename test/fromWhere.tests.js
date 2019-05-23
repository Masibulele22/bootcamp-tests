describe('fromWhere', function(){
    it("This function test should return Bellville if the inserted numberplate starts with CY", function(){
        assert.equal(fromWhere('CY'), 'Bellville');
    })

    it("This function test should return Paarl if the inserted numberplate starts with CJ", function(){
        assert.equal(fromWhere('CJ'), 'Paarl');
    })
    it("This function test should return Cape Town if the inserted numberplate starts with CA", function(){
        assert.equal(fromWhere('CA'), 'Cape Town');
    })
    it("This function test should return 'Some other place!' if the inserted numberplate is blank", function(){
        assert.equal(fromWhere(' '), 'Some other place!');
    })
    it("This function test should return 'Some other place!' if the inserted numberplate is has jumbled letters", function(){
        assert.equal(fromWhere('vgvghvj'), 'Some other place!');
    })
    it("This function test should return 'Some other place!' if the inserted numberplate starts with mixed case characters", function(){
        assert.equal(fromWhere('cY'), 'Some other place!');
    })
});