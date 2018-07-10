import React from 'react'
import ReactDOM from 'react-dom'
import ListGroupContextualClasses from './ListGroupContextualClasses'

it('ListGroupContextualClasses - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ListGroupContextualClasses />, div)
  ReactDOM.unmountComponentAtNode(div)
})
