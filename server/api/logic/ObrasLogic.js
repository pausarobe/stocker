const obraData = new (require('../data/ObraData'))

class ObrasLogic {
	listObras() {
		return obraData.listObras()
	}

	createObra(nombre, fecha, direccion, done, productos) {
		return obraData.createObra(nombre, fecha, direccion, done, productos)
	}

	deleteObra(_id) {
		return obraData.deleteObra(_id)
	}

	updateObraDone(_id, done) {
		return obraData.updateObraDone(_id, done)
	}

	noDone(_id, done) {
		return obraData.updateObraDone(_id, done)
	}

	editObra(_id, nombre, fecha, direccion) {
		return obraData.editObra(_id, nombre, fecha, direccion)
	}

	updateObraProducts(idObra, stockSelected) {
		return obraData.updateObraProducts(idObra, stockSelected)
	}
	
	retrieveByName(nombre) {
		return obraData.retrieveByName(nombre)
	}

	deleteObraProduct(idObra, idStock) {
		return obraData.deleteObraProduct(idObra, idStock)
	}
}

module.exports = ObrasLogic