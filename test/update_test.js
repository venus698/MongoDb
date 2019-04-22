const Sherlock = require('../models/Sherlock')
const assert = require('assert')
describe('Updating Records', () => {
    var series;
    beforeEach((done) => {
        series = new Sherlock({
            name: 'Mary Watson'
        })
        series.save().then(() => {
            done();
        })
    })

    it('updating record', (done) => {
        Sherlock.findOneAndUpdate({ name: 'Mary Watson' }, { name: 'Sherlock Holmes' }, { useFindAndModify: false }).then(() => {
            Sherlock.findById({ _id: series._id }).then((result) => {
                assert(result.name === 'Sherlock Holmes')
                done()
            })
        })
    })
})
