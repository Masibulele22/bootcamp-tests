// describe('This test', fuction()) {
//     it(function()) {
//     conditional statement;} 
// };

// describe('The isFromBellville function checks if a number plate comes from bellville' , function(){
//    // in line commment 
//     it('the isFromBellville function should return a bellville registration number' , function(){
      
      
//         assert.equal("CY",isFromBellville("true"));
//         assert.equal(" " ,isFromBellville("false"));
//         // assert.equal("CL", false)
//         // assert.deepEqual([2,2],[2,2]);
//     });

// });



describe('isFromBellville' , function(){
    it( 'The isFromBellville function should pass true if the entered registration number is from Bellville', function(){
        assert.equal(isFromBellville("CY"), true);
    });
    it( 'The isFromBellville function should pass false if the entered mixed case registration number is from Bellville', function(){
        assert.equal(isFromBellville("cY"), false);
    });
    it( 'The isFromBellville function should pass false if the entered mixed case registration number is from Bellville', function(){
        assert.equal(isFromBellville("Cy"), false);
    });
    it( 'The isFromBellville function should pass false if the entered mixed case registration number is from Bellville', function(){
        assert.equal(isFromBellville("cy"), false);
    });
    it( 'The isFromBellville function should pass false if the entered registration number is from another city', function(){
        assert.equal(isFromBellville("CA"), false);
    });
    it( 'The isFromBellville function should pass false if there is an empty string entered', function(){
        assert.equal(isFromBellville(" "), false);
    });
    
});

