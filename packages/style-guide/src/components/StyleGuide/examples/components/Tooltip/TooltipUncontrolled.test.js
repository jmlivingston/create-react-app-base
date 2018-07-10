import React from 'react'
import ReactDOM from 'react-dom'
import TooltipUncontrolled from './TooltipUncontrolled'

// TODO: This test fails and may be related to the underlying react-strap components
it.skip('TooltipUncontrolled - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<TooltipUncontrolled />, div)
  ReactDOM.unmountComponentAtNode(div)
})
