import React from 'react'
import ReactDOM from 'react-dom'
import CardImageCaps from './CardImageCaps'

it('CardImageCaps - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<CardImageCaps />, div)
  ReactDOM.unmountComponentAtNode(div)
})
