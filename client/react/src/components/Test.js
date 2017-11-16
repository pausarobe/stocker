import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Api from '../api/Api'
import axios from 'axios'

// import Navbar from './Navbar'
// import '../styles/StockHome.css'

// class Test extends Component {
//   constructor() {
//     super()

//     this.state = {
//       products: []
//     }
//   }
  
//   //componentDidMount renderiza directamente al cargar la pagina
//   componentWillMount() {
//     Api.showCategory(categoria)
//       .then(products => {
//         console.log(products)
//         this.setState({products})
//       })
//       .catch(function (err) {
//         console.error(err)
//       })
//   }

// 	render() {
// 		return(<div>
//     <Navbar/>  
//     <div>
//       {
//         this.state.products.map((productos) => {
//           return <p>{productos.marca}</p>
//         })
//       }
//     </div>
//     </div>)
// 	}
// }

// export default Test


return(<div>
    <Navbar/>
	<div className="container">
	<h1> STOCK CALEFACCIÓN (stock.name[0])</h1>
	<button type="button" className="btn btn-default">Nuevo producto</button>
    <table className="rwd-table table-striped table-hover">
    <thead>
        <tr>
            <th>Fecha</th>
            <th>Cantidad</th>
            <th>Unidades</th>
            <th>Marca</th>
            <th>Descripción</th>
            <th>Referencia</th>
            <th>Ud caja</th>
            <th>Provedor</th>
            <th>Precio Ud</th>
            <th>Precio Total</th>
            <th>Acciones</th>
        </tr>
    </thead>
        <tbody><tr>
            <td data-th="Fecha">13/11/2017</td>
            <td data-th="Cantidad">1</td>
            <td data-th="Unidades">Unidad</td>
            <td data-th="Marca">Roca</td>
            <td data-th="Descripción">Elemento radiador de Aluminio modelo Dubal 70</td>
            <td data-th="Referencia">15de521qq</td>
            <td data-th="Ud caja">1</td>
            <td data-th="Provedor">Roca</td>
            <td data-th="Precio Ud">16.95</td>
            <td data-th="Precio Total">16.95</td>
            <td data-th="Acción" className="text-center">
            	<a href="#" className="btn btn-success btn-xs"><span className="glyphicon glyphicon-plus"></span></a>
                <a href="#" className="btn btn-primary btn-xs"><span className="glyphicon glyphicon-pencil"></span></a>
            	<a href="#" className="btn btn-danger btn-xs"><span className="glyphicon glyphicon-remove"></span></a>
            </td>
        </tr>
        <tr>
            <td data-th="Fecha">13/11/2017</td>
            <td data-th="Cantidad">16</td>
            <td data-th="Unidades">Unidad</td>
            <td data-th="Marca">Roca</td>
            <td data-th="Descripción">Llave Monotubo 1/2'' NTM</td>
            <td data-th="Referencia">5a4d6we54</td>
            <td data-th="Ud caja">1</td>
            <td data-th="Provedor">Roca</td>
            <td data-th="Precio Ud">16.90</td>
            <td data-th="Precio Total">270.40</td>
            <td data-th="Acción" className="text-center">
            	<a href="#" className="btn btn-success btn-xs"><span className="glyphicon glyphicon-plus"></span></a>
                <a href="#" className="btn btn-primary btn-xs"><span className="glyphicon glyphicon-pencil"></span></a>
            	<a href="#" className="btn btn-danger btn-xs"><span className="glyphicon glyphicon-remove"></span></a>
            </td>
        </tr>
        <tr>
            <td data-th="Fecha">13/11/2017</td>
            <td data-th="Cantidad">2</td>
            <td data-th="Unidades">Unidad</td>
            <td data-th="Marca">Irsap</td>
            <td data-th="Descripción">Valvula onotubo blanco Escuadra de 35mm de separación entre ejes</td>
            <td data-th="Referencia">813d1201</td>
            <td data-th="Ud caja">1</td>
            <td data-th="Provedor">Irsap</td>
            <td data-th="Precio Ud">65.00</td>
            <td data-th="Precio Total">130.00</td>
            <td data-th="Acción" className="text-center">
            	<a href="#" className="btn btn-success btn-xs"><span className="glyphicon glyphicon-plus"></span></a>
                <a href="#" className="btn btn-primary btn-xs"><span className="glyphicon glyphicon-pencil"></span></a>
            	<a href="#" className="btn btn-danger btn-xs"><span className="glyphicon glyphicon-remove"></span></a>
            </td>
        </tr>
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
					    <li><a href="#">Obra Pedro Picapiedra</a></li>
					    <li><a href="#">Batman</a></li>
					    <li><a href="#">Darth Vader</a></li>
	  				</ul>
				</div>
                <p>Obra de:</p>
				<h4> obra.nombre</h4>
			</div>
			<div className="col-md-4">
				<button type="button" className="btn-success btn-xlarge">Confirmar</button>
			</div>
		</div>
	</div>
</div>
</div>)
	}