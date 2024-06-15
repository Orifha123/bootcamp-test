describe('CapeTown registration number' , function(){
    it('it should shows capetown plate number' , function(){
        assert.equal(isFromCapeTown('CA 123 908'), true);
    })

    it('it should shows non capetown plate number' , function(){

        assert.equal(isFromCapeTown('CJ 123 908'), false);
    });

});