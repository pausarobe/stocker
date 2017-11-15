import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Api from '../api/Api'
import axios from 'axios'

import Navbar from './Navbar'
import '../styles/StockHome.css'

class Test extends Component {
  constructor() {
    super()

    this.state = {
      obras: []
    }
  }
  
  //componentDidMount renderiza directamente al cargar la pagina
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
          {
            this.state.obras.map((obra) => {
              return <p>{obra.nombre}</p>
            })
          }
        </div>
      </div>)
	}
}

export default Test