import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './Routes'

it('Routes - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <Routes />
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
