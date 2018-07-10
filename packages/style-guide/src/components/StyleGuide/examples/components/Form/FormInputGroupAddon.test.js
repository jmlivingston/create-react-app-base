import React from 'react'
import ReactDOM from 'react-dom'
import FormInputGroupAddon from './FormInputGroupAddon'

it('FormInputGroupAddon - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<FormInputGroupAddon />, div)
  ReactDOM.unmountComponentAtNode(div)
})
