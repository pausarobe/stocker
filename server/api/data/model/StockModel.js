const mongoose = require('mongoose')
const Schema = mongoose.Schema

const StockSchema = new Schema({
	categoria: String,
	unidad: String,
	marca: String,
	descripcion: String,
	refProveedor: String,
	cajas: Number,
	proveedor: String,
	precio: Number,
	stock: Number,
	fecha: Date.parse()
})

module.exports = mongoose.model('Stock', StockSchema)