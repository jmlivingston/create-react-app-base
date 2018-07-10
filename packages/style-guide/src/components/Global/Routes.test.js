import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './Routes'
import { GlobalContainer } from '@myorg/components'

it('Routes - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <GlobalContainer>
        <Routes />
      </GlobalContainer>
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
