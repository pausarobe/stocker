import React, { Component } from 'react'

import '../styles/ObrasX.css'

import Api from '../api/Api'


class ObrasX extends Component {
	constructor() {
		super()

		this.state = {
			obras: [],
			products: []
		}

	}

	componentDidMount() {
		Api.name(this.props.match.params.nombre)
			.then(obras => {
				console.log(obras)
				this.setState({obras})
			})
			.catch(err => {
				console.error(err)
			})
		// Api.listAllProducts()
		// 	.then(products => {
		// 		console.log(products)
		// 		this.setState({products})
		// 	})
		// 	.catch(err => {
		// 		console.error(err)
		// 	})

	}

	render() {
		return (<div className="container">
			<h1>obra de <span className="title">{this.props.match.params.nombre.toUpperCase()}</span></h1>
			<div className="snow">
				<p>
					<strong>Nombre:</strong> {this.state.obras.length && this.state.obras[0].nombre}<br/>
					<strong>Fecha inicio de la obra:</strong> {this.state.obras.length && this.state.obras[0].fecha}<br/>
					<strong>Dirección:</strong> {this.state.obras.length && this.state.obras[0].direccion}
				</p>
			</div>
			<h3>Productos</h3>
			<div className="snow">
			<p>
				{
					this.state.obras.map((obra) => {
						return (<div>
							<div>{obra.fecha}</div>
							<div>{obra.direccion}</div>
						</div>)
					})
				}
			</p>
			</div>
		</div>)
	}

}

export default ObrasX