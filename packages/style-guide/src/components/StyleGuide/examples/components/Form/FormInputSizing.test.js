import React from 'react'
import ReactDOM from 'react-dom'
import FormInputSizing from './FormInputSizing'

it('FormInputSizing - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<FormInputSizing />, div)
  ReactDOM.unmountComponentAtNode(div)
})
