const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Obras = new Schema({
	idObra: Date(),
	nombre: String,
	fecha: String,
	direccion: String,
	accion: {
		done: Boolean,
		delete: Boolean
	},
	productos: [String]
})

module.exports = mongoose.model('Obras', Obras)