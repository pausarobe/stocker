const mongoose = require('mongoose')
const Schema = mongoose.Schema

const StockSchema = new Schema({
	id: Number,
	categoria: String,
	unidad: String,
	marca: String,
	descripcion: String,
	refProveedor: String,
	cajas: Number,
	proveedor: String,
	precio: Number,
	stock: Number,
	fecha: Date
})

module.exports = mongoose.model('Stock', StockSchema)