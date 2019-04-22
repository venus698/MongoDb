var Sherlock = require('../models/Sherlock')
var assert = require('assert')
describe('Saving Records', () => {
    it('Saving data to database', (done) => {
        var series = new Sherlock({
            name: 'John Watson'
        })
        series.save().then(() => {
            assert(series.isNew === false)
            done();
        })
    })

})