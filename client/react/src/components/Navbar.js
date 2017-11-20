import React, { Component } from 'react'
import '../styles/Navbar.css'
import logo from '../img/danma-logo.png'

import { Link } from 'react-router-dom'

class Navbar extends Component {
	render() {
		return (<nav className="navbar navbar-default navbar-static-top">
	<div className="container">
		<div className="navbar-header">
			<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar3">
				<span className="sr-only">Toggle navigation</span>
				<span className="icon-bar"></span>
				<span className="icon-bar"></span>
				<span className="icon-bar"></span>
			</button>
			<a className="navbar-brand" href="http://www.danma.es"><img src={logo} alt="Danma"/>
			</a>
		</div>
		<div className="navbar-collapse collapse">
			<ul className="nav navbar-nav navbar-right">
				<li><Link to={"/"}>STOCK</Link></li>
				<li><Link to={"/obras"}>OBRAS</Link></li>
				<li><Link to={"/"}>CONTROL</Link></li>
			</ul>
		</div>
	</div>
</nav>)
	}
}

export default Navbar