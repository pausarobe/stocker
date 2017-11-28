require('dotenv').config()

const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect(process.env.DB_URL, { useMongoClient: true })

const obraData = new (require('./ObraData'))
const stockData = new (require('./StockData'))

obraData.createObra('Pedro', new Date(), 'AV. Piedra 33', false)
	.then((obra) => {
		return stockData.createProduct('Accesorios', new Date(), 10, 'unidad', 'marca', 'descripcion', 'refProveedor', 10, 'proveedor', 10)
			.then(() => {
				return stockData.category('Accesorios')
					.then((productos) => {
						const stockSelected = productos.map(producto => ({ _id: producto._id, stockQuantity: 10 }))
						return obraData.updateObraProducts(obra._id, stockSelected)
							.then(updatedObra => {
								console.log(JSON.stringify(updatedObra))
							})
					})
			})
	})
	.catch(console.error)