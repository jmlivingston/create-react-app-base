import React from 'react'
import ReactDOM from 'react-dom'
import CardOutline from './CardOutline'

it('CardOutline - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<CardOutline />, div)
  ReactDOM.unmountComponentAtNode(div)
})
