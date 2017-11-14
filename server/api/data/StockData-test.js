require('dotenv').config()

const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect(process.env.DB_URL, { useMongoClient: true })

const stockData = new (require('./StockData'))

stockData.listCategories()
	.then(console.log)
	.catch(console.error)