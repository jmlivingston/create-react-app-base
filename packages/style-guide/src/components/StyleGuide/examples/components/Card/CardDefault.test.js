import React from 'react'
import ReactDOM from 'react-dom'
import CardDefault from './CardDefault'

it('CardDefault - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<CardDefault />, div)
  ReactDOM.unmountComponentAtNode(div)
})
