describe('countRegNumbers', function(){
  it('The countRegNumbers function counts registration numbers', function(){
    assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328'), outcomes );
  })

  it('The countRegNumbers function counts an empty string input it will return zero', function(){
    assert.equal(countRegNumber(' '), zero);
  })

});
