describe('gauteng number plate' , function(){
    it('should show gauteng reg number' , function(){
        assert.equal(isFromGauteng('DR 45 LR GP'), true);
    }) 
    
    it('should show reg number that are not from gauteng' , function(){


        assert.equal(isFromGauteng('CJ 123 908'), false);
    });

});