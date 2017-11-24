const Obra = require('./model/ObraModel')
const Stock = require('./model/StockModel')

class ObraData {
	listObras() {
		return Obra.find().exec()
	}

	name(nombre) {
		return Obra.find({nombre})
				   .populate('productos.$.idProduct')
	}

	// name(nombre) {
	// 	return Obra.find({nombre})
	// 		.populate()
	// }

 //  populate({ path: 'fans', select: 'name' }).
 //  populate({ path: 'fans', select: 'email' });

	createObra(nombre, fecha, direccion, done, productos) {
		const obra =  new Obra(nombre, fecha, direccion, done, productos)
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
		stockSelected = stockSelected.map((stock)=> {
			delete stock.descripcion 
			return stock
		})
		return stockSelected.map(product =>  Obra.findByIdAndUpdate(idObra, 
			{ 
				$push: {"productos":  product}
			}))
	}
} 

module.exports = ObraData