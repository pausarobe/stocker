const stockData = new (require('../data/StockData'))

class StockLogic {
	listCategories() {
		return stockData.listCategories()
	}
}

module.exports = StockLogic