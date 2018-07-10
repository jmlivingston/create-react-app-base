import React from 'react'
import ReactDOM from 'react-dom'
import FormInputGroupButtonShorthand from './FormInputGroupButtonShorthand'

it('FormInputGroupButtonShorthand - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<FormInputGroupButtonShorthand />, div)
  ReactDOM.unmountComponentAtNode(div)
})
