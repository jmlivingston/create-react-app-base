import React from 'react'
import ReactDOM from 'react-dom'
import CardAlignment from './CardAlignment'

it('CardAlignment - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<CardAlignment />, div)
  ReactDOM.unmountComponentAtNode(div)
})
