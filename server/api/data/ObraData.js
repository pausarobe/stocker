const Obra = require('./model/ObraModel')

class ObraData {
	listObras() {
		return Obra.find().exec()
	}

	name(nombre) {
		return new Promise((resolve, reject) => {
			if (!nombre)
				throw new Error('nombre no especificado')

			Obra.find({nombre})
				.then(resolve)
				.catch(reject)
		})
	}

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
}

module.exports = ObraData