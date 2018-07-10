import React from 'react'
import ReactDOM from 'react-dom'
import NavNavbarDefault from './NavNavbarDefault'

it('NavNavbarDefault - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<NavNavbarDefault />, div)
  ReactDOM.unmountComponentAtNode(div)
})
