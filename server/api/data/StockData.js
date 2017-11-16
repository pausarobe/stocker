const Stock = require('./model/StockModel')

class StockData {
	list() {
		return Stock.find().exec()
	}

	listCategories() {
		return Stock.find().distinct('categoria').exec()
	}

	category(categoria) {
		return new Promise((resolve, reject) => {
			if (!categoria)
				throw new Error('categoria no especificada')

			Stock.find({categoria})
				.then(resolve)
				.catch(reject)
		})
	}

	createProduct(id, categoria, unidad, marca, descripcion, refProveedor, cajas, proveedor, precio, stock, fecha) {
		const product = new Stock(id, categoria, unidad, marca, descripcion, refProveedor, cajas, proveedor, precio, stock, fecha)

		return product.save()
	}
}

module.exports = StockData