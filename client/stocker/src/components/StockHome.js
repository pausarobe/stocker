import React, { Component } from 'react'

import Navbar from './Navbar'

import '../styles/StockHome.css'

class StockHome extends Component {
	render() {
		return (<div>
			<Navbar/>
			<div className="container">
				<button className="button raise">Accesorios</button>
				<button className="button raise">Accesorios Baño</button>
				<button className="button raise">Accesorios Cocina</button>
				<button className="button raise">Calefacción</button>
				<button className="button raise">Cerámica</button>
				<button className="button raise">Electrodomésticos</button>
				<button className="button raise">Griferia</button>
				<button className="button raise">Iluminación</button>
				<button className="button raise">Mobiliario</button>
				<button className="button raise">Mobiliario Baño</button>
				<button className="button raise">Mobiliario Cocina</button>
				<button className="button raise">Pintura</button>
				<button className="button raise">Sanitarios</button>
				<button className="button raise">Suelo Laminado</button>
			</div>
		</div>)
	}
}

export default StockHome