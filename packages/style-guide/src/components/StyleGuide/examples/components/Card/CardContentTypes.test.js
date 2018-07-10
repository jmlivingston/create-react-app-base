import React from 'react'
import ReactDOM from 'react-dom'
import CardContentTypes from './CardContentTypes'

it('CardContentTypes - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<CardContentTypes />, div)
  ReactDOM.unmountComponentAtNode(div)
})
