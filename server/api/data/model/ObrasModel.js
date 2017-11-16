const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ObrasSchema = new Schema({
	id: Number,
	nombre: String,
	fecha: Date,
	direccion: String,
	done: Boolean,
	productos: [{
		id: Number,
		cantidad: Number
	}]
})

module.exports = mongoose.model('Obras', ObrasSchema)