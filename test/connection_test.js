const mongoose = require('mongoose')
mongoose.Promise = global.Promise

before((done) => {
    mongoose.connect('mongodb://localhost/sherlockDatabase')
    mongoose.connection.once('open', () => {
        console.log('Connected')
        done();
    }).on('error', (error) => {
        console.log('error' + error)
    })
})

beforeEach((done) => {
    mongoose.connection.collections.sherlocks.drop();
    done();
})

