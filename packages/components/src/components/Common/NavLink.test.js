import React from 'react'
import ReactDOM from 'react-dom'
import NavLink from './NavLink'
import GlobalContainer from '../Global/GlobalContainer'

it('NavLink - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <NavLink />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
