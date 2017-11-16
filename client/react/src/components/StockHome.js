import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Api from '../api/Api'

import Navbar from './Navbar'
import '../styles/StockHome.css'

class StockHome extends Component {
	constructor() {
		super()

		this.state = {
			categorias: []
		}
	}

	//componentDidMount renderiza directamente al cargar la pagina
	componentWillMount() {
		Api.listByCategories()
			.then(categorias => {
				console.log(categorias)
				this.setState({categorias})
			})
			.catch(function (err) {
				console.error(err)
			})
	}

	render() {
		return(<div>
			<Navbar/>
			<div className="container">
				{
					this.state.categorias.map((categoria) => {
					return <Link to={`/stock/${categoria}`}><button className="button raise">{categoria}</button></Link>
					})
				}
			</div>
		</div>)
	}
}

export default StockHome