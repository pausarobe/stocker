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

  handleClick = () => {
    console.log('done!')

//fer un Api.blabla()
  //.then()
  //.catch()
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
            <tbody>
          {
            this.state.obras.map((obra) => {
              return (<tr>
                  <td data-th="Nombre">{obra.nombre}</td>
                  <td data-th="Fecha">{obra.fecha}</td>
                  <td data-th="Dirección">{obra.direccion}</td>
                  <td data-th="Acciones">
                    <button onClick={this.handleClick} className="btn btn-info btn-xs but"><span className="glyphicon glyphicon-ok"></span> Done</button>
                    <button className="btn btn-primary btn-xs but"><span className="glyphicon glyphicon-pencil"></span> Edit</button>
                    <button className="btn btn-danger btn-xs but"><span className="glyphicon glyphicon-remove"></span> Delete</button>
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
            this.state.obras.map((obra) => {
              return (<tr>
                  <td data-th="Nombre">{obra.nombre}</td>
                  <td data-th="Fecha">{obra.fecha}</td>
                  <td data-th="Dirección">{obra.direccion}</td>
                  <td data-th="Acciones">
                    <button className="btn btn-danger btn-xs but"><span className="glyphicon glyphicon-remove"></span> Delete</button>
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