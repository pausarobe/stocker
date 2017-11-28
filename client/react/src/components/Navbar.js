import React, { Component } from 'react'
import '../styles/Navbar.css'
import logo from '../img/danma-logo.png'

import { Link } from 'react-router-dom'


class Navbar extends Component {
	constructor() {
		super()

		this.state = {
			conditionStock: false,
			conditionObras: false,
			conditionControl: false
		}
	}

	handleClickStock = () => {
		this.setState({
			conditionStock: !this.state.conditionStock,
			conditionObras: false,
			conditionControl: false
		})
	}

	handleClickObras = () => {
		this.setState({
			conditionStock: false,
			conditionObras: !this.state.conditionObras,
			conditionControl: false
		})
	}

	handleClickControl = () => {
		this.setState({
			conditionStock: false,
			conditionObras: false,			
			conditionControl: !this.state.conditionControl
		})
	}

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
			<Link to={"/"}><img onClick={this.handleClickStock} src={logo} alt="Danma"/></Link>
		</div>
		<div id="navbar3" className="navbar-collapse collapse">
			<ul className="nav navbar-nav navbar-right">
				<li onClick={this.handleClickStock} className={this.state.conditionStock? 'actived': 'default'}><Link to={"/"}>STOCK</Link></li>
				<li onClick={this.handleClickObras} className={this.state.conditionObras? 'actived': 'default'}><Link to={"/obras"}>OBRAS</Link></li>
				<li onClick={this.handleClickControl} className={this.state.conditionControl? 'actived': 'default'}><Link to={"/"}>CONTROL</Link></li>
			</ul>
		</div>
	</div>
</nav>)
	}
}

export default Navbar