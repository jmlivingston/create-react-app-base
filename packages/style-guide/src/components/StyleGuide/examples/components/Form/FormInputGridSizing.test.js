import React from 'react'
import ReactDOM from 'react-dom'
import FormInputGridSizing from './FormInputGridSizing'

it('FormInputGridSizing - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<FormInputGridSizing />, div)
  ReactDOM.unmountComponentAtNode(div)
})
