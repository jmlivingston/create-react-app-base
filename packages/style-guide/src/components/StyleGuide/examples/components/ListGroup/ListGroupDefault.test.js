import React from 'react'
import ReactDOM from 'react-dom'
import ListGroupDefault from './ListGroupDefault'

it('ListGroupDefault - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ListGroupDefault />, div)
  ReactDOM.unmountComponentAtNode(div)
})
