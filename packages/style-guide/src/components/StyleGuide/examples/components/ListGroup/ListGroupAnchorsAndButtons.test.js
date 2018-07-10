import React from 'react'
import ReactDOM from 'react-dom'
import ListGroupAnchorsAndButtons from './ListGroupAnchorsAndButtons'

it('ListGroupAnchorsAndButtons - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ListGroupAnchorsAndButtons />, div)
  ReactDOM.unmountComponentAtNode(div)
})
