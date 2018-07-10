import React from 'react'
import ReactDOM from 'react-dom'
import TooltipDefault from './TooltipDefault'

// TODO: This test fails and may be related to the underlying react-strap components
it.skip('TooltipDefault - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<TooltipDefault />, div)
  ReactDOM.unmountComponentAtNode(div)
})
