import React, { Component } from 'react'

import '../styles/ObrasX.css'

import Api from '../api/Api'
import ObrasHome from './ObrasHome'



class ObrasX extends Component {
	constructor() {
		super()

		this.state = {
			obras: []
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

		// Api.etc
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
			<p>hola</p>
			</div>
		</div>)
	}

}

export default ObrasX