const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ObraSchema = new Schema({
	//id: Number,
	nombre: String,
	fecha: Date,
	direccion: String,
	done: Boolean,
	productos: [{
	   idProduct: { type: Schema.ObjectId, ref: "Stock" },
	   stockQuantity: Number
	}]
})

module.exports = mongoose.model('Obra', ObraSchema)