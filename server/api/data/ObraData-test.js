require('dotenv').config()

const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect(process.env.DB_URL, { useMongoClient: true })

const obraData = new (require('./ObraData'))
const stockData = new (require('./StockData'))

obraData.createObra('Pedro', '28/11/2017', 'AV. Piedra 33', false)
	.then((obra) => {
		return stockData.category('Accesorios')
			.then((productos) => {
				const stockSelected = productos.map(producto => ({_id: producto._id, stockQuantity: 10 }))
				return obraData.updateObraProducts(obra._id, stockSelected )
					.then(console.log)
			})
	})
	.catch(console.error)

