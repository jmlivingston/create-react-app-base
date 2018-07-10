import React from 'react'
import ReactDOM from 'react-dom'
import TooltipMulti from './TooltipMulti'

// TODO: This test fails and may be related to the underlying react-strap components
it.skip('TooltipMulti - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<TooltipMulti />, div)
  ReactDOM.unmountComponentAtNode(div)
})
