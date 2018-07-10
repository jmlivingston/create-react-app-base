import React from 'react'
import ReactDOM from 'react-dom'
import NavbarToggler from './NavbarToggler'
import GlobalContainer from '../Global/GlobalContainer'

it('NavbarToggler - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <NavbarToggler />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
