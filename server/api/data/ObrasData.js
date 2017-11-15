const Obras = require('./model/ObrasModel')

class ObrasData {
	listObras() {
		return Obras.find().exec()
	}

	name(nombre) {
		return new Promise((resolve, reject) => {
			if (!nombre)
				throw new Error('nombre no especificado')

			Obras.find({nombre})
				.then(resolve)
				.catch(reject)
		})
	}
}

module.exports = ObrasData