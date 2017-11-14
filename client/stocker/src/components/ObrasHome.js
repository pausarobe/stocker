import React, { Component } from 'react'

import Navbar from './Navbar'

import '../styles/ObrasHome.css'

class ObrasHome extends Component {
	render() {
		return (<div>
			<Navbar/>
			<div className="container">
	<h1>Obras en curso</h1>
	<button type="button" className="btn btn-default">Nueva Obra</button>

	<table className="rwd-table table-striped table-hover">
		<thead>
			<tr>
				<th>Nombre</th>
				<th>Fecha</th>
				<th>Dirección</th>
				<th>Acciones</th>
			</tr>
		</thead>
			<tr>
				<td data-th="Nombre">Pedro Picapiedra</td>
				<td data-th="Fecha">13/11/2017</td>
				<td data-th="Dirección">Av. Piedradura 3</td>
				<td data-th="Acciones">
					<button href="#" className="btn btn-primary btn-xs"><span className="glyphicon glyphicon-ok"></span> Done</button>
					<button href="#" className="btn btn-danger btn-xs"><span className="glyphicon glyphicon-remove"></span> Delete</button>
				</td>
			</tr>
			<tr>
				<td data-th="Nombre">Batman</td>
				<td data-th="Fecha">15/10/1986</td>
				<td data-th="Dirección">Batcueva, 3º 1ª</td>
				<td data-th="Acciones">
					<button href="#" className="btn btn-primary btn-xs"><span className="glyphicon glyphicon-ok"></span> Done</button>
					<button href="#" className="btn btn-danger btn-xs"><span className="glyphicon glyphicon-remove"></span> Delete</button>
				</td>
			</tr>
			<tr>
				<td data-th="Nombre">Darth Vader</td>
				<td data-th="Fecha">12/05/2069</td>
				<td data-th="Dirección">Estrella de la muerte, 2º intento</td>
				<td data-th="Acciones">
					<button href="#" className="btn btn-primary btn-xs"><span className="glyphicon glyphicon-ok"></span> Done</button>
					<button href="#" className="btn btn-danger btn-xs"><span className="glyphicon glyphicon-remove"></span> Delete</button>
				</td>
			</tr>
	</table>


	<h1>Obras terminadas</h1>
</div>
		</div>)
	}
}

export default ObrasHome