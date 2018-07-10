import React from 'react'
import ReactDOM from 'react-dom'
import CardImageOverlay from './CardImageOverlay'

it('CardImageOverlay - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<CardImageOverlay />, div)
  ReactDOM.unmountComponentAtNode(div)
})
