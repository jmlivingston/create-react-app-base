import React from 'react'
import ReactDOM from 'react-dom'
import NavVertical from './NavVertical'

it('NavVertical - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<NavVertical />, div)
  ReactDOM.unmountComponentAtNode(div)
})
