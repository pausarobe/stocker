const stockData = new (require('../data/StockData'))

class StockLogic {
	listCategories() {
		return stockData.listCategories()
	}

	category(categoria) {
		return stockData.category(categoria)
	}

	createProduct(id, categoria, unidad, marca, descripcion, refProveedor, cajas, proveedor, precio, stock, fecha) {
		return stockData.createProduct(id, categoria, unidad, marca, descripcion, refProveedor, cajas, proveedor, precio, stock, fecha)
	}
}

module.exports = StockLogic