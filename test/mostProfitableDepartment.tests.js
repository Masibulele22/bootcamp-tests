describe('mostProfitableDepartment', function(){
    it('This function should find the most profitable department is outdoor', function(){
        assert.deepEqual(mostProfitableDepartment([{department: 'outdoor', sales: 2505, day: 'Tuesday'},
        {department: 'carpentry', sales: 1540, day: 'Tuesday'}]), 'outdoor');
    })
    it('This function should find the most profitable department is hardware', function(){
        assert.deepEqual(mostProfitableDepartment([{department: 'hardware', sales: 4500, day: 'Monday'},
        {department: 'outdoor', sales: 1500, day: 'Monday'}]), 'hardware');
    })
    it('This function should find the most profitable department is capentry', function(){
        assert.deepEqual(mostProfitableDepartment([{department: 'carpentry', sales: 1540, day: 'Tuesday'},
        {department: 'hardware', sales: 1500, day: 'Wednesday'}]), 'carpentry');
    })
});