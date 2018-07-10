import React from 'react'
import ReactDOM from 'react-dom'
import ListGroupBadge from './ListGroupBadge'

it('ListGroupBadge - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ListGroupBadge />, div)
  ReactDOM.unmountComponentAtNode(div)
})
