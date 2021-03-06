import React, { Component } from 'react'

import Api from '../api/Api'
import { Link } from 'react-router-dom'

import '../styles/ObrasHome.css'

class ObrasHome extends Component {
    constructor() {
        super()

        this.state = {
            obras: [],
            nombre: '',
            fecha: '',
            direccion: '',
            done: '',
        }
    }

    handleClickDone = (_id) => {
        Api.updateObraDone(_id)
            .then(() => Api.listObras()
                .then(obras => {
                    this.setState({obras})
                })
                .catch(err => {
                    console.error(err)
                })
            )
            .catch(err => {
                console.error(err)
            })
    }

    handleClickNoDone = (_id) => {
        Api.noDone(_id)
            .then(() => Api.listObras()
                .then(obras => {
                    this.setState({obras})
                })
                .catch(err => {
                    console.error(err)
                })
            )
            .catch(err => {
                console.error(err)
            })
    }

    handleClickEdit = (_id, nombre, fecha, direccion) => {
        Api.editObra(_id, nombre, fecha, direccion)
            .then(() => Api.listObras()
                .then(obras => {
                    this.setState({obras})
                })
                .catch(err => {
                    console.error(err)
                })
            )
            .catch(err => {
                console.error(err)
            })      
    }

    handleClickDelete = (_id) => {
        Api.deleteObra(_id)
            .then(() => Api.listObras()
                .then(obras => {
                    this.setState({obras})
                })
                .catch(err => {
                    console.error(err)
                })
            )
            .catch(err => {
                console.error(err)
            })
    }

    handleClickCreate = (nombre, fecha, direccion) => {
        const done = false

        Api.createObra(nombre, fecha, direccion, done)
            .then(() => Api.listObras()
                .then(obras => {
                    this.setState({obras})
                })
                .catch(err => {
                    console.error(err)
                })
            )
            .catch(err => {
                console.error(err)
            })
    }

    onChangeNombre = event => {
        event.preventDefault()

        this.setState({nombre: event.target.value})
    }

    onChangeFecha = event => {
        event.preventDefault()

        this.setState({fecha: event.target.value})
    }

    onChangeDireccion = event => {
        event.preventDefault()

        this.setState({direccion: event.target.value})
    }

    componentWillMount() {
        Api.listObras()
            .then(obras => {
                console.log(obras)
                this.setState({obras})
            })
            .catch(function (err) {
                console.error(err)
            })
    }

	render() {
		return(<div className="background-image">
        <div className="container botspace">
        <h1><p>Obras en curso</p></h1>
        <button type="button" className="btn btn-default" data-toggle="modal" data-target="#myModal">Nueva Obra</button>

        <div id="myModal" className="modal fade" role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                        <h4 className="modal-title">Nueva Obra</h4>
                    </div>
                    <div className="modal-body">
                        <form className="form-horizontal" data-toggle="validator" role="form">
                            <div className="form-group">
                                <label className="col-sm-2 control-label" for="obra">Nombre</label>
                                <div className="col-sm-10">
                                    <input id="obra" className="form-control" type="text" name="nombre" placeholder="NOMBRE OBRA" onChange={this.onChangeNombre} pattern="pau" required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-sm-2 control-label" for="fecha">Fecha</label>
                                <div className="col-sm-10">
                                    <input id="fecha" className="form-control" type="date" name="fecha" onChange={this.onChangeFecha} required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-sm-2 control-label" for="direccion">Dirección</label>
                                <div className="col-sm-10">
                                    <input id="direccion" className="form-control" type="text" name="direccion" placeholder="DIRECCIÓN" onChange={this.onChangeDireccion} required/>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Cerrar</button>
                        <button type="submit" className="btn btn-default signbuttons" data-dismiss="modal" 
                            onClick={()=>{this.handleClickCreate(
                                this.state.nombre, 
                                this.state.fecha, 
                                this.state.direccion)
                            }}>CREAR OBRA
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <table className="rwd-table table-striped table-hover snow">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Fecha</th>
                    <th>Dirección</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.obras.filter(obra => {
                        return obra.done === false
                    }).map(obra => { 
                        return (<tr>
                            <td data-th="Nombre"><Link to={`/obras/${obra.nombre}`}>{obra.nombre}</Link></td>
                            <td data-th="Fecha">{obra.fecha}</td>
                            <td data-th="Dirección">{obra.direccion}</td>
                            <td data-th="Acciones">
                                <button className="btn btn-info btn-xs but" onClick={()=>{this.handleClickDone(obra._id)}}>
                                    <span className="glyphicon glyphicon-ok"></span> Finalizada
                                </button>
                                <button className="btn btn-primary btn-xs but" type="button" data-toggle="modal" data-target={"#editModal-" + obra._id}>
                                    <span className="glyphicon glyphicon-pencil"></span> Edit
                                </button>
                                <div id={"editModal-" + obra._id} className="modal fade" role="dialog">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                <h4 className="modal-title">Editar Obra</h4>
                                            </div>
                                            <div className="modal-body">
                                                <form className="form-horizontal" role="form">
                                                    <div className="form-group">
                                                        <label className="col-sm-2 control-label" for="textinput">Nombre</label>
                                                        <div className="col-sm-10">
                                                            <input className="form-control" type="text" name="nombre" placeholder="NOMBRE OBRA" onChange={this.onChangeNombre} required/>
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="col-sm-2 control-label" for="textinput">Fecha</label>
                                                        <div className="col-sm-10">
                                                            <input className="form-control" type="date" name="fecha" onChange={this.onChangeFecha} required/>
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="col-sm-2 control-label" for="textinput">Dirección</label>
                                                        <div className="col-sm-10">
                                                            <input className="form-control" type="text" name="direccion" placeholder="DIRECCIÓN" onChange={this.onChangeDireccion} required/>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-default" data-dismiss="modal">Cerrar</button>
                                                <button type="submit" className="btn btn-default signbuttons" data-dismiss="modal" 
                                                    onClick={()=>{this.handleClickEdit(
                                                        obra._id, 
                                                        this.state.nombre, 
                                                        this.state.fecha, 
                                                        this.state.direccion)
                                                    }}>GUARDAR CAMBIOS
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button className="btn btn-danger btn-xs but" type="button" data-toggle="modal" data-target={"#deleteModal-" + obra._id}>
                                    <span className="glyphicon glyphicon-remove"></span> Borrar
                                </button>
                                <div id={"deleteModal-" + obra._id} className="modal fade" role="dialog">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h4 className="modal-title alert alert-danger text-center">ATENCIÓN!</h4>
                                            </div>
                                            <div className="modal-body">
                                                <div>
                                                    <p>Estás seguro de borrar la obra de <span className="obraName">{obra.nombre}</span>?</p>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12-xs text-center">
                                                        <button onClick={()=>{this.handleClickDelete(obra._id)}} className="btn btn-success btn-md but" data-dismiss="modal">Si</button>
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

        <h1><p>Obras terminadas</p></h1>

        <table className="rwd-table table-striped table-hover snow">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Fecha</th>
                    <th>Dirección</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.obras.filter(obra => {
                        return obra.done === true
                    }).map((obra) => {
                        return (<tr>
                            <td data-th="Nombre">{obra.nombre}</td>
                            <td data-th="Fecha">{obra.fecha}</td>
                            <td data-th="Dirección">{obra.direccion}</td>
                            <td data-th="Acciones">
                                <button onClick={()=>{this.handleClickNoDone(obra._id)}} className="btn btn-info btn-xs but">
                                    <span className="glyphicon glyphicon-arrow-up"></span> Up
                                </button>
                                <button className="btn btn-danger btn-xs but" type="button" data-toggle="modal" data-target={"#deleteModal-" + obra._id}>
                                    <span className="glyphicon glyphicon-remove"></span> Borrar
                                </button>
                                <div id={"deleteModal-" + obra._id} className="modal fade" role="dialog">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h4 className="modal-title alert alert-danger text-center">ATENCIÓN!</h4>
                                            </div>
                                            <div className="modal-body">
                                                <div>
                                                    <p>Estás seguro de borrar la obra de <span className="obraName">{obra.nombre}</span>?</p>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12-xs text-center">
                                                        <button onClick={()=>{this.handleClickDelete(obra._id)}} className="btn btn-success btn-md but" data-dismiss="modal">Si</button>
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
    </div>)
	}
}

export default ObrasHome