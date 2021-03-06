import React, { Component } from 'react'

import Api from '../api/Api'

import '../styles/StockX.css'

class StockX extends Component {
    constructor() {
        super()

        this.state = {
            products: [],
            obras: [],
            fecha: '',
            stock: '',
            unidad: '',
            marca: '',
            descripcion: '',
            refProveedor: '',
            cajas: '',
            proveedor: '',
            precio: '',
            nombre: '',
            stockQuantity: 0,
            stockSelected: [],
            idObra: '',
            stockBase: 0,
            totalPrize: 0
        }
    }

    handleClickDelete = (categoria, _id) => {
        Api.deleteProduct(categoria, _id)
            .then(() => Api.showCategory(this.props.match.params.category)
                .then(products => {
                    this.setState({products})
                    this.calculateTotal(products)
                })
                .catch(err => {
                    console.error(err)
                })
            )
            .catch(err=> {
                console.error(err)
            })
    }

    handleClickCreate = (categoria, fecha, stock, unidad, marca, descripcion, refProveedor, cajas, proveedor, precio) => {
        Api.createProduct(categoria, fecha, stock, unidad, marca, descripcion, refProveedor, cajas, proveedor, precio)
            .then(() => Api.showCategory(this.props.match.params.category)
                .then(products => {
                    this.setState({products})
                    this.calculateTotal(products)
                })
                .catch(err => {
                    console.error(err)
                })
            )
            .catch(err=> {
                console.error(err)
            })            
    }

    handleClickEditProduct = (categoria, _id, fecha, stock, unidad, marca, descripcion, refProveedor, cajas, proveedor, precio) => {
        Api.editProduct(categoria, _id, fecha, stock, unidad, marca, descripcion, refProveedor, cajas, proveedor, precio)
            .then(() => Api.showCategory(this.props.match.params.category)
                .then(products => {
                    this.setState({products})
                    this.calculateTotal(products)
                })
                .catch(err => {
                    console.error(err)
                })
            )
            .catch(err=> {
                console.error(err)
            }) 
    }

    handleClickObraId = (_id, nombre) => {
        this.setState({nombre: nombre, idObra: _id})
    }

    handleClickConfirm = () => {
        Api.updateObraProducts(this.state.idObra, this.state.stockSelected)
            .then(() => this.loadData())

        const newStock = this.state.stockBase - this.state.stockQuantity

        Api.updateProductQuantity(this.state.stockSelected[0]._id, newStock)
            .then(() => this.loadData())
    }

    handleClickConfirmStock = (_id, descripcion, stock) => {
        this.setState({stockBase: stock})

        const select = {
            _id,
            descripcion: descripcion,
            stockQuantity: this.state.stockQuantity
        }

        this.setState(prevState => {
            return {
                stockSelected: prevState.stockSelected.concat(select)
            }
        })
    }

    handleClickRemoveProduct = (id) => {
        const selected = this.state.stockSelected.filter((item)=> item.id !== id)

        this.setState({stockSelected: selected})
    }

    onChangeQuantityStock = event => {
        event.preventDefault()

        this.setState({stockQuantity: parseInt(event.target.value)})
    }

    onChangeFecha = event => {
        event.preventDefault()

        this.setState({fecha: event.target.value})
    }

    onChangeCantidad = event => {
        event.preventDefault()

        this.setState({stock: event.target.value})
    }

    onChangeUnidades = event => {
        event.preventDefault()

        this.setState({unidad: event.target.value})
    }

    onChangeMarca = event => {
        event.preventDefault()

        this.setState({marca: event.target.value})
    }

    onChangeDescripcion = event => {
        event.preventDefault()

        this.setState({descripcion: event.target.value})
    }

    onChangeRef = event => {
        event.preventDefault()

        this.setState({refProveedor: event.target.value})
    }

    onChangeUdCaja = event => {
        event.preventDefault()

        this.setState({cajas: event.target.value})
    }

    onChangeProveedor = event => {
        event.preventDefault()

        this.setState({proveedor: event.target.value})
    }

    onChangePrecioUd = event => {
        event.preventDefault()

        this.setState({precio: event.target.value})
    }

    calculateTotal = products => {
        let totalPrize = 0

        products.map(product => {
            totalPrize += (product.precio * product.stock)
        })

        this.setState({totalPrize})
    }

    loadData = () => {
        Api.showCategory(this.props.match.params.category)
            .then(products => {
                this.setState({products})
                this.calculateTotal(products)
            })
            .catch(function (err) {
                console.error (err)
            })

        Api.listObras()
            .then(obras => {
                this.setState({obras})
            })
            .catch(err => {
                console.error(err)
            })
    }

    componentWillMount() {
        this.loadData()
    }

    render() {
        return(<div>
            <div className="container">
                <h1><p><span className="title">{this.props.match.params.category.toUpperCase()}</span></p></h1>
                <button type="button" className="btn btn-default" data-toggle="modal" data-target="#newProduct">Nuevo Producto</button>
                <div id="newProduct" className="modal fade" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title">Nuevo Producto</h4>
                            </div>
                            <div className="modal-body">
                                <form className="form-horizontal" data-toggle="validator" role="form">
                                    <div className="form-group">
                                        <label className="col-sm-2 control-label" for="fecha">Fecha</label>
                                        <div className="col-sm-10">
                                            <input id="fecha" className="form-control" type="date" name="fecha" onChange={this.onChangeFecha}/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-sm-2 control-label" for="cantidad">Cantidad</label>
                                        <div className="col-sm-10">
                                            <input id="cantidad" className="form-control" type="number" name="stock" placeholder="CANTIDAD" onChange={this.onChangeCantidad}/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-sm-2 control-label" for="unidades">Unidades</label>
                                        <div className="col-sm-10">
                                            <select id="unidades" className="form-control" type="text" name="unidad" placeholder="UNIDADES" onChange={this.onChangeUnidades}>
                                                <option>Litros</option>
                                                <option>Metros</option>
                                                <option>Metros 2</option>
                                                <option>Kilos</option>
                                                <option>Ud</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-sm-2 control-label" for="marca">Marca</label>
                                        <div className="col-sm-10">
                                            <input id="marca" className="form-control" type="text" name="marca" placeholder="MARCA" onChange={this.onChangeMarca}/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-sm-2 control-label" for="descripcion">Descripción</label>
                                        <div className="col-sm-10">
                                            <textarea id="descripcion" className="form-control" type="text" rows="4" name="descripcion" placeholder="DESCRIPCIÓN" onChange={this.onChangeDescripcion}/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-sm-2 control-label" for="ref">Nº Ref</label>
                                        <div className="col-sm-4">
                                            <input id="ref" className="form-control" type="text" name="refProveedor" placeholder="Nº DE REFERENCIA" onChange={this.onChangeRef}/>
                                        </div>
                                        <label className="col-sm-2 control-label" for="caja">Ud caja</label>
                                        <div className="col-sm-4">
                                            <input id="caja" className="form-control" type="number" name="cajas" placeholder="UD POR CAJA" onChange={this.onChangeUdCaja}/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-sm-2 control-label" for="proveedor">Proveedor</label>
                                        <div className="col-sm-10">
                                            <input id="proveedor" className="form-control" type="text" name="proveedor" placeholder="PROVEEDOR" onChange={this.onChangeProveedor}/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-sm-2 control-label" for="precio">Precio</label>
                                        <div className="col-sm-10">
                                            <input id="precio" className="form-control" type="number" name="precio" placeholder="PRECIO POR UNIDAD" onChange={this.onChangePrecioUd}/>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Cerrar</button>
                                <button type="submit" className="btn btn-default signbuttons" data-dismiss="modal" onClick={()=>{
                                    this.handleClickCreate(
                                        this.props.match.params.category,
                                        this.state.fecha,
                                        this.state.stock,
                                        this.state.unidad,
                                        this.state.marca,
                                        this.state.descripcion,
                                        this.state.refProveedor,
                                        this.state.cajas,
                                        this.state.proveedor,
                                        this.state.precio
                                    )}}>GUARDAR
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
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
                            <th className="minAncho">Precio Ud</th>
                            <th className="minAncho">Precio Total</th>
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
                                    <td data-th="Precio Ud">{(product.precio).toFixed(2)} €</td>
                                    <td data-th="Precio Total">{(product.precio * product.stock).toFixed(2)} €</td>
                                    <td data-th="Acción" className="text-center">
                                        <button className="btn btn-success btn-xs but" type="button" data-toggle="modal" data-target={"#udProductModal-" + product._id}>
                                            <span className="glyphicon glyphicon-plus"></span>
                                        </button>
                                        <div id={"udProductModal-" + product._id} className="modal fade" role="dialog">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                        <h4 className="modal-title">Cantidad de producto a traspasar</h4>
                                                    </div>
                                                    <div className="modal-body">
                                                        <form>
                                                            <div className="form-group">
                                                                <input className="form-control" type="number" placeholder="NÚMERO" onChange={this.onChangeQuantityStock}/>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-default" data-dismiss="modal">Cerrar</button>
                                                        <button type="submit" className="btn btn-default signbuttons" data-dismiss="modal" onClick={() => {
                                                            this.handleClickConfirmStock(
                                                                product._id,
                                                                product.descripcion,
                                                                product.stock
                                                            )}}>CONFIRMAR CANTIDAD
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="btn btn-primary btn-xs but" type="button" data-toggle="modal" data-target={"#editProductModal-" + product._id}>
                                            <span className="glyphicon glyphicon-pencil"></span>
                                        </button>
                                        <div id={"editProductModal-" + product._id} className="modal fade" role="dialog">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                        <h4 className="modal-title">Edita tu producto</h4>
                                                    </div>
                                                    <div className="modal-body">
                                                        <form className="form-horizontal" role="form">
                                                            <div className="form-group">
                                                                <label className="col-sm-2 control-label" for="textinput">Fecha</label>
                                                                <div className="col-sm-10">
                                                                    <input className="form-control" type="date" name="fecha" onChange={this.onChangeFecha}/>
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="col-sm-2 control-label" for="textinput">Cantidad</label>
                                                                <div className="col-sm-10">
                                                                    <input className="form-control" type="text" name="stock" placeholder="CANTIDAD" onChange={this.onChangeCantidad}/>
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="col-sm-2 control-label" for="textinput">Unidades</label>
                                                                <div className="col-sm-10">
                                                                    <input className="form-control" type="text" name="unidad" placeholder="UNIDADES" onChange={this.onChangeUnidades}/>
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="col-sm-2 control-label" for="textinput">Marca</label>
                                                                <div className="col-sm-10">
                                                                    <input className="form-control" type="text" name="marca" placeholder="MARCA" onChange={this.onChangeMarca}/>
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="col-sm-2 control-label" for="textinput">Descripción</label>
                                                                <div className="col-sm-10">
                                                                    <textarea className="form-control" type="text" name="descripcion" placeholder="DESCRIPCIÓN" onChange={this.onChangeDescripcion}/>
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="col-sm-2 control-label" for="textinput">Nº Ref</label>
                                                                <div className="col-sm-4">
                                                                    <input className="form-control" type="text" name="refProveedor" placeholder="Nº DE REFERENCIA" onChange={this.onChangeRef}/>
                                                                </div>
                                                                <label className="col-sm-2 control-label" for="textinput">Ud caja</label>
                                                                <div className="col-sm-4">
                                                                    <input className="form-control" type="text" name="cajas" placeholder="UNIDADES POR CAJA" onChange={this.onChangeUdCaja}/>
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="col-sm-2 control-label" for="textinput">Proveedor</label>
                                                                <div className="col-sm-10">
                                                                    <input className="form-control" type="text" name="proveedor" placeholder="PROVEEDOR" onChange={this.onChangeProveedor}/>
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="col-sm-2 control-label" for="textinput">Precio</label>
                                                                <div className="col-sm-10">
                                                                    <input className="form-control" type="text" name="precio" placeholder="PRECIO POR UNIDAD" onChange={this.onChangePrecioUd}/>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-default" data-dismiss="modal">Cerrar</button>
                                                        <button type="submit" className="btn btn-default signbuttons" data-dismiss="modal" onClick={()=>{
                                                            this.handleClickEditProduct(
                                                                this.props.match.params.category,
                                                                product._id,
                                                                this.state.fecha,
                                                                this.state.stock,
                                                                this.state.unidad,
                                                                this.state.marca,
                                                                this.state.descripcion,
                                                                this.state.refProveedor,
                                                                this.state.cajas,
                                                                this.state.proveedor,
                                                                this.state.precio)
                                                            }}>GUARDAR CAMBIOS
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="btn btn-danger btn-xs but" type="button" data-toggle="modal" data-target={"#deleteProductModal-" + product._id}>
                                            <span className="glyphicon glyphicon-remove"></span>
                                        </button>
                                        <div id={"deleteProductModal-" + product._id} className="modal fade" role="dialog">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h4 className="modal-title alert alert-danger text-center">ATENCIÓN!</h4>
                                                    </div>
                                                    <div className="modal-body">
                                                        <div>
                                                            <p>Estás seguro de borrar el producto de <span className="obraName">{product.marca}</span> ?
                                                            <br/>- {product.descripcion}</p>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-12-xs text-center">
                                                                <button className="btn btn-success btn-md but" data-dismiss="modal" onClick={()=>{
                                                                    this.handleClickDelete(
                                                                        this.props.match.params.category, 
                                                                        product._id)
                                                                    }}>Si
                                                                </button>
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
            </div>

            <div className="container">  
                <p className="snow pull-right">Total: <strong className="totalPrize">{(this.state.totalPrize).toFixed(2)} €</strong></p>
            </div>

            <div className="container botspace">
                <div className="row col-md-7">
                    <h3 className="text-center">Productos para añadir</h3>
                    {
                        this.state.stockSelected.map(product => {
                            return (<p className="snow">
                                <div className="col-md-11">
                                    <span><strong className="big">{product.stockQuantity}</strong> - {product.descripcion}</span>
                                </div>
                                <div className="col-md-1">
                                    <button onClick={()=>{this.handleClickRemoveProduct(product.id)}} type="button" className="btn btn-danger btn-xs"><span className="glyphicon glyphicon-remove"></span></button>
                                </div>
                                <br/>
                            </p>)
                        })
                    }
                </div>
                <div className="row col-md-5">
                    <h3 className="text-center">Selecciona la obra</h3>
                    <div className="col-md-9">
                        <div className="btn-group">
                            <p className="snow"><strong className="obraSelected">{this.state.nombre}</strong>
                                <button type="button" className="btn btn-default dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="caret"></span>
                                </button>
                                <ul className="dropdown-menu pull-right">
                                    {
                                        this.state.obras.filter(obra => {
                                            return obra.done === false
                                        }).map(obra => {
                                            return (<li onClick={()=>{this.handleClickObraId(obra._id, obra.nombre)}}><a>{obra.nombre}</a></li>)
                                        })
                                    }     
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <button onClick={()=>{this.handleClickConfirm()}} type="button" className="btn btn-default btn-xlarge" data-toggle="modal" data-target="#confirm">Confirmar</button>
                        <div id="confirm" className="modal fade" role="dialog">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        <h4 className="modal-title">CONFIRMADO!</h4>
                                    </div>
                                    <div className="modal-body">
                                        <p>Productos enviados satisfactoriamente</p>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-default" data-dismiss="modal">Cerrar</button>
                                        <button onClick={()=>{this.handleClickRemoveProduct()}} type="submit" className="btn btn-default signbuttons" data-dismiss="modal">Aceptar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    }
}

export default StockX