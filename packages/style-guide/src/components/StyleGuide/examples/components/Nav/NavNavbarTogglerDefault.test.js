import React from 'react'
import ReactDOM from 'react-dom'
import NavNavbarTogglerDefault from './NavNavbarTogglerDefault'

it('NavNavbarTogglerDefault - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<NavNavbarTogglerDefault />, div)
  ReactDOM.unmountComponentAtNode(div)
})
