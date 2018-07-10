import React from 'react'
import ReactDOM from 'react-dom'
import AlertDefault from './AlertDefault'

it('AlertDefault - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<AlertDefault />, div)
  ReactDOM.unmountComponentAtNode(div)
})
