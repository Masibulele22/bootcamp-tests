describe('findItemsOver20', function(){
    it('This function should find items with quantities over 20', function(){
        assert.deepEqual(findItemsOver20(itemList), [{name : 'pears', qty : 37},
        {name : 'bananas', qty : 27}]);
    })
    it('This function should return an empty array if the quantities under 20', function(){
        assert.deepEqual(findItemsOver20([{name : 'pears', qty : 12},
        {name : 'bananas', qty : 13}]),[])
    })
});