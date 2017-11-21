import axios from 'axios'
//const axios = require('axios')

const Api = {
	url: 'http://localhost:3002/api',
	//url: 'https://floating-plateau-73977.herokuapp.com/api',

	listByCategories: function () {
		return axios.get(this.url + '/stocks')
			.then(res => res.data.data)
	},

	showCategory: function (categoria) {
		return axios.get(this.url + '/stocks/' + categoria)
			.then(res => res.data.data)
	},

	deleteProduct: function (categoria, _id) {
		return axios.delete(this.url + '/stocks/' + categoria + '/' + _id)
			.then(res => res.data.data)
	},

	createProduct: function (categoria, fecha, stock, unidad, marca, descripcion, refProveedor, cajas, proveedor, precio) {
		return axios.post(this.url + '/stocks/' + categoria, {fecha, stock, unidad, marca, descripcion, refProveedor, cajas, proveedor, precio})
			.then(res => res.data.data)
	},

	editProduct: function (categoria, _id, fecha, stock, unidad, marca, descripcion, refProveedor, cajas, proveedor, precio) {
		return axios.put(this.url + '/stocks/' + categoria + '/' + _id, {fecha, stock, unidad, marca, descripcion, refProveedor, cajas, proveedor, precio})
			.then(res => res.data.data)
	},

	listObras: function () {
		return axios.get(this.url + '/obras')
			.then(res => res.data.data)
	},

	deleteObra: function (_id) {
		return axios.delete(this.url + '/obras/' + _id)
			.then(res => res.data.data)
	},

	done: function (_id) {
		return axios.patch(this.url + '/obras/' + _id, {done: true})
			.then(res => res.data.data)
	},

	noDone: function (_id) {
		return axios.patch(this.url + '/obras/' + _id, {done: false})
			.then(res => res.data.data)
	},

	createObra: function(nombre, fecha, direccion, done, productos) {
		return axios.post(this.url + '/obras', {nombre, fecha, direccion, done, productos})
			.then(res => res.data.data)
	},

	edit: function(_id, nombre, fecha, direccion) {
		return axios.put(this.url + '/obras/' + _id, {nombre, fecha, direccion})
			.then(res => res.data.data)
	}

}

//module.exports = Api
export default Api