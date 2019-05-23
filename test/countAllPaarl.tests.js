describe('countAllPaarl', function(){
  it('This countAllPaarl function counts all numberplates from Paarl', function(){
    assert.equal(countAllPaarl(str), 3);
  })
  it('This function should return an empty result if an empty string is passed', function(){
    assert.equal(countAllPaarl(" "), " ");
  })
});