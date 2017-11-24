const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ObraSchema = new Schema({
	//id: Number,
	nombre: String,
	fecha: Date,
	direccion: String,
	done: Boolean,
	productos: [{
	   producto: { type: Schema.ObjectId, ref: "Stock" },
	   cantidad: Number
	}]
})

module.exports = mongoose.model('Obra', ObraSchema)