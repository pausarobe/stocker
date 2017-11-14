import React, { Component } from 'react'
import '../styles/Navbar.css'
import logo from '../img/danma-logo.png'

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
			<a class="navbar-brand" href="http://www.danma.es"><img src={logo} alt="Danma"/>
			</a>
		</div>
		<div className="navbar-collapse collapse">
			<ul className="nav navbar-nav navbar-right">
				<li><a href="http://localhost:3000/">STOCK</a></li>
				<li><a href="http://localhost:3000/obras">OBRAS</a></li>
				<li><a href="#">CONTROL</a></li>
			</ul>
		</div>
	</div>
</nav>)
	}
}

export default Navbar