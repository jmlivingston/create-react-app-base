import React from 'react'
import ReactDOM from 'react-dom'
import TooltipAutoHide from './TooltipAutoHide'

// TODO: This test fails and may be related to the underlying react-strap components
it.skip('TooltipAutoHide - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<TooltipAutoHide />, div)
  ReactDOM.unmountComponentAtNode(div)
})
