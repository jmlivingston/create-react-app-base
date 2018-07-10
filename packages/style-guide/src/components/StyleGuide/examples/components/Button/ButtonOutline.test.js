import React from 'react'
import ReactDOM from 'react-dom'
import ButtonOutline from './ButtonOutline'

it('ButtonOutline - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ButtonOutline />, div)
  ReactDOM.unmountComponentAtNode(div)
})
