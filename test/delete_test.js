var Sherlock = require('../models/Sherlock')
const assert = require('assert')
describe('Deleting item', () => {
    var series;
    beforeEach((done) => {
        series = new Sherlock({
            name: 'Rosie'
        })
        series.save().then(() => {
            done();
        })
    })
})
it('Delete item', (done) => {
    Sherlock.findOneAndRemove({ name: 'Rosie' }).then(() => {
        Sherlock.findOne({ name: 'Rosie' }).then((result) => {
            assert(result === null)
            done();
        })
    })
})