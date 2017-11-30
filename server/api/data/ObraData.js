const Obra = require('./model/ObraModel')
const Stock = require('./model/StockModel')

class ObraData {
	listObras() {
		return Obra.find().exec()
	}

	retrieve(id) {
		return Obra.findById(id)
			.populate('productos.producto')
	}

	retrieveByName(nombre) {
		return Obra.findOne({ nombre }).populate('productos.producto')
	}

	createObra(nombre, fecha, direccion, done) {
		const obra = new Obra({ nombre, fecha, direccion, done })
		return obra.save()
	}

	deleteObra(_id) {
		return Obra.remove({ _id })
	}

	updateObraDone(_id, done) {
		return Obra.findByIdAndUpdate(_id, { $set: { "done": done } })
	}

	editObra(_id, nombre, fecha, direccion) {
		return Obra.findOneAndUpdate(_id,
			{
				"nombre": nombre,
				"fecha": fecha,
				"direccion": direccion
			})
	}

	updateObraProducts(idObra, stockSelected) {

		const newStockSelected = stockSelected.map((stock) => {
			return { producto: stock._id, stockQuantity: stock.stockQuantity }
		})

		//array de promesas
		const updates = newStockSelected.map(product => Obra.findByIdAndUpdate(idObra,
			{
				$push: { "productos": product }
			}))

		//espera que se acaben todas las promesas
		return Promise.all(updates)
			.then(() => this.retrieve(idObra))
	}

	deleteObraProduct(idObra, idStock) {
		return Obra.findOneAndUpdate(idObra,
			{	
				$pull: { productos: { producto: idStock}}
			},
			{ new: true })
	}

}

module.exports = ObraData