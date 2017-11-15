const obrasData = new (require('../data/ObrasData'))

class ObrasLogic {
	listObras() {
		return obrasData.listObras()
	}

	name(nombre) {
		return obrasData.name(nombre)
	}
}

module.exports = ObrasLogic