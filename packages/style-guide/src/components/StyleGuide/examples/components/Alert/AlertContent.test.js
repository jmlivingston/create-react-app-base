import React from 'react'
import ReactDOM from 'react-dom'
import AlertContent from './AlertContent'

it('AlertContent - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<AlertContent />, div)
  ReactDOM.unmountComponentAtNode(div)
})
