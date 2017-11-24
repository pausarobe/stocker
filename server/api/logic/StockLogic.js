const stockData = new (require('../data/StockData'))

class StockLogic {
	listCategories() {
		return stockData.listCategories()
	}

	category(categoria) {
		return stockData.category(categoria)
	}

	createProduct(categoria, fecha, stock, unidad, marca, descripcion, refProveedor, cajas, proveedor, precio) {
		return stockData.createProduct(categoria, fecha, stock, unidad, marca, descripcion, refProveedor, cajas, proveedor, precio)
	}

	deleteProduct(categoria, _id) {
		return stockData.deleteProduct(categoria, _id)
	}

	editProduct(categoria, _id, fecha, stock, unidad, marca, descripcion, refProveedor, cajas, proveedor, precio) {
		return stockData.editProduct(categoria, _id, fecha, stock, unidad, marca, descripcion, refProveedor, cajas, proveedor, precio)
	}

	listAllProducts(idObra) {
		return stockData.listAllProducts(idObra)
	}
}

module.exports = StockLogic