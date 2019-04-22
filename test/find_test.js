var Sherlock = require('../models/Sherlock')
var assert = require('assert')
describe('Finding item', () => {
    var series;
    beforeEach((done) => {
        series = new Sherlock({
            name: 'Rosie Watson'
        })
        series.save().then(() => {
            done();
        })
    })

    it('data found', (done) => {
        Sherlock.findOne({ name: 'Rosie Watson' }).then((result) => {
            assert(result.name === 'Rosie Watson');
            done()
        })
    })
})
