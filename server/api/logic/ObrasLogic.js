const obraData = new (require('../data/ObraData'))

class ObrasLogic {
	listObras() {
		return obraData.listObras()
	}

	name(nombre) {
		return obraData.name(nombre)
	}

	createObra(id, nombre, fecha, direccion, done, productos) {
		return obraData.createObra(id, nombre, fecha, direccion, done, productos)
	}

	deleteObra(_id) {
		return obraData.deleteObra(_id)
	}

	done(_id) {
		return obraData.done(_id)
	}

}

module.exports = ObrasLogic