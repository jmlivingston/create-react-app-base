import React from 'react'
import ReactDOM from 'react-dom'
import ButtonStateful from './ButtonStateful'

it('ButtonStateful - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ButtonStateful />, div)
  ReactDOM.unmountComponentAtNode(div)
})
