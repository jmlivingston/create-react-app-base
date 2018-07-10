import React from 'react'
import ReactDOM from 'react-dom'
import AlertUncontrolledDismiss from './AlertUncontrolledDismiss'

it('AlertUncontrolledDismiss - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<AlertUncontrolledDismiss />, div)
  ReactDOM.unmountComponentAtNode(div)
})
