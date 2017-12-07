import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Api from '../api/Api'

import '../styles/StockHome.css'


class StockHome extends Component {
	constructor() {
		super()

		this.state = {
			categorias: []
		}
	}

	componentWillMount() {
		Api.listByCategories()
			.then(categorias => {
				this.setState({categorias})
			})
			.catch(function (err) {
				console.error(err)
			})
	}

	render() {
		return(<div>
			<div className="container">
				{
					this.state.categorias.map((categoria) => {
						return <Link to={`/stock/${categoria}`}><button className="button raise">{categoria}<br/><i className="material-icons">input</i></button></Link>
					})
				}
			</div>
		</div>)
	}
}

export default StockHome