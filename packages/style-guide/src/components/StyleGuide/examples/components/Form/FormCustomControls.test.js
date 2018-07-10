import React from 'react'
import ReactDOM from 'react-dom'
import FormCustomControls from './FormCustomControls'

it('FormCustomControls - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<FormCustomControls />, div)
  ReactDOM.unmountComponentAtNode(div)
})
