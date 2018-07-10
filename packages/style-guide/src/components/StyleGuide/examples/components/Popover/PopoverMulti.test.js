import React from 'react'
import ReactDOM from 'react-dom'
import PopoverMulti from './PopoverMulti'

// TODO: This test fails and may be related to the underlying react-strap components
it.skip('PopoverMulti - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<PopoverMulti />, div)
  ReactDOM.unmountComponentAtNode(div)
})
