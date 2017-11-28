const Obra = require('./model/ObraModel')
const Stock = require('./model/StockModel')

class ObraData {
	listObras() {
		return Obra.find().exec()
	}

	retrieveByName(nombre) {
		return Obra.find({nombre})
				   .populate('productos.$.producto')
	}

	retrieve(id) {
		return Obra.findById(id)
			.populate('productos.$.producto')

		// return Obra.findById(id)
		// 	.then(obra => {
		// 		return obra.populate('productos.$.producto')
		// 	})
	}

	// name(nombre) {
	// 	return Obra.find({nombre})
	// 		.populate()
	// }

 //  populate({ path: 'fans', select: 'name' }).
 //  populate({ path: 'fans', select: 'email' });

	createObra(nombre, fecha, direccion, done) {
		const obra =  new Obra({nombre, fecha, direccion, done})
		return obra.save()
	}

	deleteObra(_id) {
		const deleteObra = new Obra(_id)
		return deleteObra.remove()
	}

	updateObraDone(_id, done) {
		return Obra.findByIdAndUpdate(_id, {$set: {"done": done}})
	}

	edit(_id, nombre, fecha, direccion) {
		return Obra.findOneAndUpdate(_id, 
			{
				"nombre": nombre,
				"fecha": fecha,
				"direccion": direccion
			})
	}

	updateObraProducts(idObra, stockSelected) {

		const newStockSelected = stockSelected.map((stock)=> {
			return { producto: stock._id, stockQuantity: stock.stockQuantity }
		})

		//array de promesas
		const updates = stockSelected.map(product =>  Obra.findByIdAndUpdate(idObra, 
			{ 
				$push: {"productos":  product}
			}))
		
		//espera que se acaben todas las promesas
		return Promise.all(updates)
			.then(() => this.retrieve(idObra))
	}
} 

module.exports = ObraData