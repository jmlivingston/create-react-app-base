import React from 'react'
import ReactDOM from 'react-dom'
import CardBackgrounds from './CardBackgrounds'

it('CardBackgrounds - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<CardBackgrounds />, div)
  ReactDOM.unmountComponentAtNode(div)
})
