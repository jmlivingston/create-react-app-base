import React from 'react'
import ReactDOM from 'react-dom'
import NavbarBrand from './NavbarBrand'
import GlobalContainer from '../Global/GlobalContainer'

it('NavbarBrand - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <NavbarBrand />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
