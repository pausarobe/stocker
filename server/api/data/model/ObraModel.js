const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ObraSchema = new Schema({
	nombre: String,
	fecha: Date,
	direccion: String,
	done: Boolean,
	productos: [{
	   producto: { type: Schema.ObjectId, ref: "Stock" },
	   stockQuantity: Number
	}]
})

module.exports = mongoose.model('Obra', ObraSchema)