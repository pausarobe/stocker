import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Api from '../api/Api'

import Navbar from './Navbar'
import '../styles/StockX.css'

class StockX extends Component {
    constructor() {
        super()

        this.state = {
            products: [],
        }
    }

    componentWillMount() {
        Api.showCategory(this.props.match.params.category)
            .then(products => {
                console.log(products)
                this.setState({products})
            })
            .catch(function (err) {
                console.error (err)
            })
    }

	render() {
        console.log(this.props.match.params.category)
		return(<div>
    <Navbar/>
	<div className="container">
	<h1> Stock de <span className="title">{this.props.match.params.category.toUpperCase()}</span></h1>
	<button type="button" className="btn btn-default">Nuevo producto</button>
    <table className="rwd-table table-striped table-hover">
    <thead>
        <tr>
            <th>Fecha</th>
            <th>Cantidad</th>
            <th>Unidades</th>
            <th>Marca</th>
            <th>Descripción</th>
            <th>Ref</th>
            <th>Ud caja</th>
            <th>Proveedor</th>
            <th>Precio Ud</th>
            <th>Precio Total</th>
            <th>Acciones</th>
        </tr>
    </thead>
        <tbody>
            {
                this.state.products.map((product) => {
                    return (<tr>
                        <td data-th="Fecha">{product.fecha}</td>
                        <td data-th="Cantidad">{product.stock}</td>
                        <td data-th="Unidades">{product.unidad}</td>
                        <td data-th="Marca">{product.marca}</td>
                        <td data-th="Descripción">{product.descripcion}</td>
                        <td data-th="Ref">{product.refProveedor}</td>
                        <td data-th="Ud caja">{product.cajas}</td>
                        <td data-th="Proveedor">{product.proveedor}</td>
                        <td data-th="Precio Ud">{product.precio}</td>
                        <td data-th="Precio Total">{(product.precio * product.stock).toFixed(2)}</td>
                        <td data-th="Acción" className="text-center">
                            <a href="#" className="btn btn-success btn-xs but"><span className="glyphicon glyphicon-plus"></span></a>
                            <a href="#" className="btn btn-primary btn-xs but"><span className="glyphicon glyphicon-pencil"></span></a>
                            <a href="#" className="btn btn-danger btn-xs but"><span className="glyphicon glyphicon-remove"></span></a>
                        </td>                        
                    </tr>)
                })
            }
        </tbody></table>
</div>

<div className="container">
	<div className="row col-md-5">
		<h3 className="text-center">Productos para añadir (prod.descripcion)</h3>
		<div className="col-md-12 left">
			<div>
				<div className="col-md-11">
					<p>Valvula onotubo blanco Escuadra de 35mm de separación entre ejes </p>
				</div>
				<div className="col-md-1">
					<a href="#" className="btn btn-danger btn-xs"><span className="glyphicon glyphicon-remove"></span></a>
                </div>
				<br/>
			</div>
			<div>
				<div className="col-md-11">
					<p>Llave Monotubo 1/2'' NTM</p>
				</div>
				<div className="col-md-1">
					<a href="#" className="btn btn-danger btn-xs"><span className="glyphicon glyphicon-remove"></span></a>
				</div>
				<br/>
			</div>
		</div>
	</div>

	<div className="row col-md-2 text-center center">
		<button className="btn-lg btn-primary glyphicon glyphicon-circle-arrow-right"></button>
	</div>

	<div className="row col-md-5">
		<h3 className="text-center">Obra</h3>
		<div className="col-md-12 right">
			<div className="col-md-8">
				<div className="dropdown">
	  				<button className="btn btn-info dropdown-toggle" type="button" data-toggle="dropdown">Selecciona la obra
	  				<span className="caret"></span></button>
	  				<ul className="dropdown-menu">
    {/*                {
                        this.state.obras.map(obra => {
                            return (<li>{obra.nombre}</li>)
                        })
                    }*/}
	  				</ul>
				</div>
                <p>Obra de:</p>
				<h4>Pedro Picapiedra</h4>
			</div>
			<div className="col-md-4">
				<button type="button" className="btn-success btn-xlarge">Confirmar</button>
			</div>
		</div>
	</div>
</div>
</div>)
	}
}

export default StockX



