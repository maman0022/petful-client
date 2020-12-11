import './index.css'
import './flex.css'
import 'normalize.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Root from './components/Root/Root'

ReactDOM.render(
  <BrowserRouter>
    <Root />
  </BrowserRouter>, document.getElementById('root')
)