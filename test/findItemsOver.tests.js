describe('findItemsOver', function(){
    it('This function finds items over a certain threshold', function(){
        assert.deepEqual(findItemsOver(shop, threshold), results);
    })
    it('This function should return no results if the passed string is empty', function(){
        assert.deepEqual(findItemsOver(' ', " "), empty);
    })
});