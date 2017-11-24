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

	createProduct(categoria, fecha, stock, unidad, marca, descripcion, refProveedor, cajas, proveedor, precio) {
		const product = new Stock(categoria, fecha, stock, unidad, marca, descripcion, refProveedor, cajas, proveedor, precio)
		return product.save()
	}

	deleteProduct(categoria, _id) {
		const deleteObra = new Stock(categoria, _id)
		return deleteObra.remove()
	}

	editProduct(categoria, _id, fecha, stock, unidad, marca, descripcion, refProveedor, cajas, proveedor, precio) {
		return Stock.findByIdAndUpdate(_id,
			{
				"categoria": categoria,
				"fecha": fecha,
				"stock": stock,
				"unidad": unidad,
				"marca": marca,
				"descripcion": descripcion,
				"refProveedor": refProveedor,
				"cajas": cajas,
				"proveedor": proveedor,
				"precio": precio
			})
	}

	listAllProducts(idObras) {
		return Stock.find().exec()
	}
}

module.exports = StockData