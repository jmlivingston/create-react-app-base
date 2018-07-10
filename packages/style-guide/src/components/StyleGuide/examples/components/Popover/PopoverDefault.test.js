import React from 'react'
import ReactDOM from 'react-dom'
import PopoverDefault from './PopoverDefault'

// TODO: This test fails and may be related to the underlying react-strap components
it.skip('PopoverDefault - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<PopoverDefault />, div)
  ReactDOM.unmountComponentAtNode(div)
})
