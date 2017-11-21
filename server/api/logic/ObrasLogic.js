const obraData = new (require('../data/ObraData'))

class ObrasLogic {
	listObras() {
		return obraData.listObras()
	}

	name(nombre) {
		return obraData.name(nombre)
	}

	createObra(nombre, fecha, direccion, done, productos) {
		return obraData.createObra(nombre, fecha, direccion, done, productos)
	}

	deleteObra(_id) {
		return obraData.deleteObra(_id)
	}

	done(_id, done) {
		return obraData.updateObraDone(_id, done)
	}

	noDone(_id, done) {
		return obraData.updateObraDone(_id, done)
	}

	edit(_id, nombre, fecha, direccion) {
		return obraData.edit(_id, nombre, fecha, direccion)
	}

}

module.exports = ObrasLogic