import React, { Component } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import StockX from './components/StockX'
import ObrasX from './components/ObrasX'
import StockHome from './components/StockHome'
import ObrasHome from './components/ObrasHome'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

import './Main.css'


class Main extends Component {
	render() {
		return (<HashRouter>
		<div id="main">
			<Navbar/>
			<Switch>
				<Route exact path="/" component={StockHome}/>
				<Route exact path="/stock/:category" component={StockX}/>
				<Route exact path="/obras" component={ObrasHome}/>
				<Route exact path="/obras/:nombre" component={ObrasX}/>
			</Switch>
			<Footer/>
		</div>
		</HashRouter>)
	}
}

export default Main