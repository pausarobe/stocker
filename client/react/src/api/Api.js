import axios from 'axios'
//const axios = require('axios')

const Api = {
	url: 'http://localhost:3002/api/',

	listByCategories: function () {
		return axios.get(this.url + 'stocks/categories')
			.then(res => res.data.data)
	},

	listObras: function () {

		return axios.get(this.url + 'obras')
			.then(res => res.data.data)
	}

}

//module.exports = Api
export default Api