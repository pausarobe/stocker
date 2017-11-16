const obrasData = new (require('../data/ObrasData'))

class ObrasLogic {
	listObras() {
		return obrasData.listObras()
	}

	name(nombre) {
		return obrasData.name(nombre)
	}

	createObra(id, nombre, fecha, direccion, done, productos) {
		return obrasData.createObra(id, nombre, fecha, direccion, done, productos)
	}
}

module.exports = ObrasLogic