const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Productos = new Schema({
	idProd: Date(),
	fecha: String,
	cantidad: Number,
	ud: String,
	marca: String,
	descripcion: String,
	ref: String,
	udCaja: Number,
	provedor: String,
	precioUd: Number,
	precioTotal: Number,
	accion: {
		add: Boolean,
		delete: Boolean
	}
})

module.exports = mongoose.model('Productos', Productos)