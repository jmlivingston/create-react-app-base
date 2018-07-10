import React from 'react'
import ReactDOM from 'react-dom'
import FormInputGroupButton from './FormInputGroupButton'

it('FormInputGroupButton - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<FormInputGroupButton />, div)
  ReactDOM.unmountComponentAtNode(div)
})
