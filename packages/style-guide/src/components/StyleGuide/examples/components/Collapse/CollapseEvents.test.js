import React from 'react'
import ReactDOM from 'react-dom'
import CollapseEvents from './CollapseEvents'

it('CollapseEvents - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<CollapseEvents />, div)
  ReactDOM.unmountComponentAtNode(div)
})
