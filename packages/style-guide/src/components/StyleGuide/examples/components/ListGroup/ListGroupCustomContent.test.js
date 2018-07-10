import React from 'react'
import ReactDOM from 'react-dom'
import ListGroupCustomContent from './ListGroupCustomContent'

it('ListGroupCustomContent - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ListGroupCustomContent />, div)
  ReactDOM.unmountComponentAtNode(div)
})
