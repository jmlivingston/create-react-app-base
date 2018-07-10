import React from 'react'
import ReactDOM from 'react-dom'
import AlertLink from './AlertLink'

it('AlertLink - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<AlertLink />, div)
  ReactDOM.unmountComponentAtNode(div)
})
