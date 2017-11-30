import React, { Component } from 'react'

import '../styles/ObrasX.css'

import Api from '../api/Api'


class ObrasX extends Component {
	constructor() {
		super()

		this.state = {
			obras: {
				productos: [],
				totalPrizeInObra: 0
			}
		}

	}

	handleClickDelete = (_id) => {
		console.log('Borrando!')

		Api.deleteObraProduct(this.state.obras._id, _id)
			.then(()=> Api.retrieveByName(this.props.match.params.nombre)
				.then(obras => {
					this.setState({obras})
					this.calculateTotal(obras)
				})
				.catch(err => {
					console.error(err)
				})
			)
			.catch(err => {
				console.error(err)
			})

	}

	calculateTotal = (obras) => {
		console.log(obras)
		let totalPrizeInObra = 0
		obras.productos.map(obra => {
			totalPrizeInObra += (obra.producto.precio * obra.stockQuantity)
		})

		this.setState({totalPrizeInObra})
	}

	componentDidMount() {
		Api.retrieveByName(this.props.match.params.nombre)
			.then(obras => {
				this.setState({obras})
				console.log(obras)
				this.calculateTotal(obras)
			})
			.catch(err => {
				console.error(err)
			})
	}

	render() {
		return (<div className="container">
			<h1>obra de <span className="title">{this.props.match.params.nombre.toUpperCase()}</span></h1>
			<div className="snow">
				<p>
				<div className="container">
					<div className="row col-md-6">
						<strong>Nombre:</strong> {this.state.obras.nombre}<br/>
						<strong>Fecha inicio de la obra:</strong> {this.state.obras.fecha}<br/>
						<strong>Dirección:</strong> {this.state.obras.direccion}
					</div>
					<div className="row col-md-6">
						<p className="snow pull-right"><strong className="totalPrize">{this.state.totalPrizeInObra} €</strong></p>
					</div>
				</div>
				</p>
			</div>
			<h3>Productos</h3>
			<table className="rwd-table table-striped table-hover snow">
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
					{this.state.obras.productos.length && 
						this.state.obras.productos.map(product=>{
							return (<tr>
                        <td data-th="Fecha">{product.producto.fecha}</td>
                        <td data-th="Cantidad">{product.stockQuantity}</td>
                        <td data-th="Unidades">{product.producto.unidad}</td>
                        <td data-th="Marca">{product.producto.marca}</td>
                        <td data-th="Descripción">{product.producto.descripcion}</td>
                        <td data-th="Ref">{product.producto.refProveedor}</td>
                        <td data-th="Ud caja">{product.producto.cajas}</td>
                        <td data-th="Proveedor">{product.producto.proveedor}</td>
                        <td data-th="Precio Ud">{product.producto.precio} €</td>
                        <td data-th="Precio Total">{(product.producto.precio * product.stockQuantity).toFixed(2)} €</td>
                        <td data-th="Acción" className="text-center">
                            <button className="btn btn-danger btn-xs but"
                                    type="button" data-toggle="modal" data-target={"#deleteProductModal-" + product.producto._id}>
                                    <span className="glyphicon glyphicon-remove"></span>
                            </button>
                              <div id={"deleteProductModal-" + product.producto._id} className="modal fade" role="dialog">
                                <div className="modal-dialog">
                                  <div className="modal-content">
                                    <div className="modal-header">
                                      <h4 className="modal-title alert alert-danger text-center">ATENCIÓN!</h4>
                                    </div>
                                    <div className="modal-body">
                                      <div>
                                        <p>Estás seguro de borrar este producto?</p>
                                      </div>
                                      <div className="row">
                                          <div className="col-12-xs text-center">
                                              <button onClick={()=>{this.handleClickDelete(product.producto._id)}} className="btn btn-success btn-md but" data-dismiss="modal">Si</button>
                                              <button className="btn btn-danger btn-md but" data-dismiss="modal">No</button>
                                          </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                        </td>                        
                    </tr>)
						})
					}
				</tbody>
			</table>
<div className="botspace">
  <p className="snow pull-right">Total: <strong className="big">{this.state.totalPrizeInObra} €</strong> 
  </p>
</div>
		</div>)
	}

}

export default ObrasX