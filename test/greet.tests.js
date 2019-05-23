describe('greet' , function(){
  it('The greeting function should pass a greeting if the entered name is Masibulele' , function(){
  assert.equal(greet("Masibulele"), "Hello Masibulele");
  });
  it('The greeting function should pass a greeting if the entered name is Elam' , function(){
    assert.equal(greet("Elam"), "Hello Elam");
  });
  it('The greeting function should pass a greeting if the entered name is Janine' , function(){
    assert.equal(greet("Janine"), "Hello Janine");
  });

});