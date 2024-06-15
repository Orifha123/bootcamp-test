describe('is a day', function () {
    it('should should print a day', function () {
        assert.equal(isDayName('Saturday'), true);
    })
    it('should print a weekday', function () {

        assert.equal(isDayName('Monday'), true);
    })
        it('should print a month ', function () {
    
        assert.equal(isDayName('January'), false, 'January is not a day');

    });

});