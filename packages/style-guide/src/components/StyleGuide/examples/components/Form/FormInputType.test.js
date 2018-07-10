import React from 'react'
import ReactDOM from 'react-dom'
import FormInputType from './FormInputType'

it('FormInputType - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<FormInputType />, div)
  ReactDOM.unmountComponentAtNode(div)
})
