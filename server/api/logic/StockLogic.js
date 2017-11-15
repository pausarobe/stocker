const stockData = new (require('../data/StockData'))

class StockLogic {
	listCategories() {
		return stockData.listCategories()
	}

	category(categoria) {
		return stockData.category(categoria)
	}
}

module.exports = StockLogic