const Stock = require('./model/StockModel')

class StockData {
	list() {
		return Stock.find().exec()
	}

	listCategories() {
		return Stock.find().distinct('categoria').exec()
	}
}

module.exports = StockData