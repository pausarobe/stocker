import axios from 'axios'
//const axios = require('axios')

const Api = {
	// url: 'http://localhost:3002/api',
	url: 'https://floating-plateau-73977.herokuapp.com/api',

	listByCategories: function () {
		return axios.get(this.url + '/stocks')
			.then(res => res.data.data)
	},

	showCategory: function (categoria) {
		return axios.get(this.url + '/stocks/' + categoria)
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
		return axios.patch(this.url + '/obras/' + _id)
			.then(res => res.data.data)
	}


	// createObra: function () {
	// 	return axios.post(this.url + '/obras')
	// 		.then(res => res.data.data) // ??
	// }

	// createProduct: function () {
	// 	return axios.post(this.url + '/stocks/' + categoria)
	// 		.then(res => res.data.data) // ??
	// }

}

//module.exports = Api
export default Api