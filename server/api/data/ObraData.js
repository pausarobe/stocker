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

	createObra(id, nombre, fecha, direccion, done, productos) {
		const obra =  new Obra(id, nombre, fecha, direccion, done, productos)
		return obra.save()
	}

	deleteObra(_id) {
		const deleteObra = new Obra(_id)
		return deleteObra.remove()
	}

	done(_id) {
		const done = new Obra(_id)
		return deleteObra.findByIdAndUpdate(_id, {$set: {"done": true}})
	}
}

module.exports = ObraData