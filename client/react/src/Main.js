import React, { Component } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import StockX from './components/StockX'
import StockHome from './components/StockHome'
import ObrasHome from './components/ObrasHome'


class Main extends Component {
	render() {
		return (<HashRouter>
		<div>
			<Switch>
				<Route exact path="/" component={StockHome}/>
				<Route path="/stock/:category" component={StockX}/>
				<Route path="/obras" component={ObrasHome}/>
			</Switch>
		</div>
		</HashRouter>)
	}
}

export default Main