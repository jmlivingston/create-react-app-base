import React from 'react'
import ReactDOM from 'react-dom'
import NavItem from './NavItem'
import GlobalContainer from '../Global/GlobalContainer'

it('NavItem - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <NavItem />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
