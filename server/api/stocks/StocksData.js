const fs = require('fs')

class StocksData {
	constructor() {
		this.file = require('path').join(__dirname, 'stocks.json')

		this.stocks = require('./stocks.json')
	}

	list() {
		return this.stocks
	}
}