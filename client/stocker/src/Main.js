import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import StockX from './components/StockX'
import StockHome from './components/StockHome'
import ObrasHome from './components/ObrasHome'
import Test from './components/Test'

class Main extends Component {
	render() {
		return (<BrowserRouter>
		<div>
			<Switch>
				<Route exact path="/" component={StockHome}/>
				<Route path="/stock" component={StockX}/>
				<Route path="/obras" component={ObrasHome}/>
			</Switch>
		</div>
		</BrowserRouter>)
	}
}

export default Main