import React from 'react'
import ReactDOM from 'react-dom'
import AlertDismiss from './AlertDismiss'

it('AlertDismiss - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<AlertDismiss />, div)
  ReactDOM.unmountComponentAtNode(div)
})
