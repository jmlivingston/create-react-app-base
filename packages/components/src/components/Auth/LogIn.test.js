import React from 'react'
import ReactDOM from 'react-dom'
import LogIn from './LogIn'

it('LogIn - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<LogIn />, div)
  ReactDOM.unmountComponentAtNode(div)
})
