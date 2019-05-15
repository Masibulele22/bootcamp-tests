describe('countAllFromTown', function(){
  it('This countAllFromTown function counts all numberplates from Stellenbosch', function(){
    assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'), fromStellies);
  })
});