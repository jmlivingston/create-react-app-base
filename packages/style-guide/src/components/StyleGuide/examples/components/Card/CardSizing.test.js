import React from 'react'
import ReactDOM from 'react-dom'
import CardSizing from './CardSizing'

it('CardSizing - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<CardSizing />, div)
  ReactDOM.unmountComponentAtNode(div)
})
