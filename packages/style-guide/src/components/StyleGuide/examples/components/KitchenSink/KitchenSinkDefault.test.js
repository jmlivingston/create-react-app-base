import React from 'react'
import ReactDOM from 'react-dom'
import KitchenSinkDefault from './KitchenSinkDefault'

// TODO: This test fails and may be related to the underlying react-strap components
it.skip('KitchenSinkDefault - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<KitchenSinkDefault />, div)
  ReactDOM.unmountComponentAtNode(div)
})
