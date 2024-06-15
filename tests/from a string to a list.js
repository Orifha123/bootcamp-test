describe('from a string to a list', function () {
    it('should show you a list of number plates', function () {
        var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
        assert.equal(regCount, 3);
    })
    it('should show you a list of number plates', function () {

       var regCount = countRegNumber('CA 182736')
       assert.equal(regCount, 1);
       
    });

});