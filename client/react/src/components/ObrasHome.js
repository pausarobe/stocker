import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Api from '../api/Api'

import Navbar from './Navbar'
import '../styles/ObrasHome.css'

class ObrasHome extends Component {
	constructor() {
    super()

    this.state = {
      obras: [],
      done: false
    }
  }

  handleClick = (_id) => {
    console.log('done!')
    Api.done(_id)
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
    console.log('borrando!')
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

  //componentWillMount renderiza directamente al cargar la pagina
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
		return(<div>
        <Navbar/>
        <div className="container">
        <h1>Obras en curso</h1>
        <button type="button" className="btn btn-default" data-toggle="modal" data-target="#myModal">Nueva Obra</button>

        <div id="myModal" className="modal fade" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">Nueva Obra</h4>
              </div>
              <div className="modal-body">
                <form method="POST">
                  <div class="form-group">
                    <input class="form-control" type="text" name="nombre" placeholder="NAME"/>
                  </div>
                  <div class="form-group">
                    <input class="form-control" type="date" name="fecha" value=""/>
                  </div>
                  <div class="form-group">
                    <input class="form-control" type="text" name="direccion" placeholder="DIRECCIÓN"/>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                <button type="submit" class="btn btn-default signbuttons" data-dismiss="modal">GUARDAR</button>
              </div>
            </div>
          </div>
        </div>

        <table className="rwd-table table-striped table-hover">
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
                  <td data-th="Nombre">{obra.nombre}</td>
                  <td data-th="Fecha">{obra.fecha}</td>
                  <td data-th="Dirección">{obra.direccion}</td>
                  <td data-th="Acciones">
                    <button onClick={()=>{this.handleClick(obra._id)}} className="btn btn-info btn-xs but"><span className="glyphicon glyphicon-ok"></span> Done</button>
                    <button className="btn btn-primary btn-xs but"><span className="glyphicon glyphicon-pencil"></span> Edit</button>
                    <button onClick={()=>{this.handleClickDelete(obra._id)}} className="btn btn-danger btn-xs but"><span className="glyphicon glyphicon-remove"></span> Delete</button>
                  </td>
                </tr>)
            })
          }
            </tbody>
        </table>

        <h1>Obras terminadas</h1>

        <table className="rwd-table table-striped table-hover">
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
                    <button onClick={()=>{this.handleClickDelete(obra._id)}} className="btn btn-danger btn-xs but"><span className="glyphicon glyphicon-remove"></span> Delete</button>
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