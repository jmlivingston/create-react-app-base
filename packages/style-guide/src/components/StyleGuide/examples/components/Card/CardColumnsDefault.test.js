import React from 'react'
import ReactDOM from 'react-dom'
import CardColumnsDefault from './CardColumnsDefault'

it('CardColumnsDefault - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<CardColumnsDefault />, div)
  ReactDOM.unmountComponentAtNode(div)
})
