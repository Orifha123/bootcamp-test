describe('more parameters less repitions' , function(){
    it('should show reg number from paarl' , function(){
        var fromPaarl = isFrom('CJ 98912', 'CJ'); //returns true

    })

        it('should show reg number that are not from paarl' , function(){

        var fromBellville = isFrom('CJ 98912', 'CY'); //returns false
    });

});