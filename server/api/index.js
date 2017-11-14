const express = require('express')
const app = exress()
const bodyParser = require('body-parser')
app.use(bodyParser.json())

require('dotenv').config()

const stocksData = new(require('./StocksData'))

const router = express.Router()

router.route('/')
	.get((req, res) => {
		//lista los tipo de stock
		res.json({
			status: 'OK',
			message: 'Stocks listed successfully',
			data: stocksData.list()
		})
	})


router.route('/:stock')
	.get((req. res) => {
		//lista un stock concreto
		const stock = req.params.stock


	})
	.post((req, res) => {
		//crear nuevo producto del stock concreto
	})
	.put((req, res) => {
		//edita un producto en concreto
	})
	.delete((req, res) => {
		//elimina un producto en concreto
	})

router.route('/obras')
	.get((req, res) => {
		//lista todas las obras
		res.json({
			status: 'OK',
			messsage: 'Obras listed successfully'
			data: obrasData.list()
		})
	})
	.post((req, res) => {
		//crear una obra nueva
	})
	.delete((req, res) => {
		//elimina una obra 
	})

router.route('/obras/:id')
	.get((req, res) => {
		//lista una obra en concreto
		const id = req.params.id
	})



const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect(process.env.DB_URL, { useMongoClient: true })

console.log('Starting API...')

app.listen(process.env.PORT, () => console.log(`API is up on port ${process.env.PORT}`))

process.on('SIGINT', () => {
	console.log('\nStopping API.')

	process.exit()
})