const mongoose = require('mongoose')
const Schema = mongoose.Schema
const SherlockSchema = new Schema({
    name: String,
    Char: String
})

const Sherlock = mongoose.model('Sherlock', SherlockSchema)
module.exports = Sherlock