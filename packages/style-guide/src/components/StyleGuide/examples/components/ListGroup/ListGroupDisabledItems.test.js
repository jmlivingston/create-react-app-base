import React from 'react'
import ReactDOM from 'react-dom'
import ListGroupDisabledItems from './ListGroupDisabledItems'

it('ListGroupDisabledItems - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ListGroupDisabledItems />, div)
  ReactDOM.unmountComponentAtNode(div)
})
