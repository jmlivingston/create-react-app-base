import React from 'react'
import ReactDOM from 'react-dom'
import FormInputGroupButtonDropdown from './FormInputGroupButtonDropdown'

it('FormInputGroupButtonDropdown - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<FormInputGroupButtonDropdown />, div)
  ReactDOM.unmountComponentAtNode(div)
})
