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
    it( 'The isFromBellville function should confirm if the entered registration number is true or not', function(){
        assert.equal(isFromBellville("CY"), true);

    });

});