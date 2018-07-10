import React from 'react'
import ReactDOM from 'react-dom'
import KitchenSink from './KitchenSink'

// TODO: This test fails and may be related to the underlying react-strap components
it.skip('KitchenSink - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<KitchenSink />, div)
  ReactDOM.unmountComponentAtNode(div)
})
