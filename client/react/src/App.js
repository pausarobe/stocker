import React, { Component } from 'react'
import logo from './logo.svg'

import Main from './Main'
import Footer from './components/Footer'
import { BrowserRouter } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Main/>
      	<Footer/>
      </div>     
      </BrowserRouter>
    )
  }
}

export default App
