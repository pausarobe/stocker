const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Stocks = new Schema({
	name: String
})

module.exports = mongoose.model('Stocks', Stocks)