import React from 'react'
import ReactDOM from 'react-dom'
import NavDefault from './NavDefault'

it('NavDefault - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<NavDefault />, div)
  ReactDOM.unmountComponentAtNode(div)
})
