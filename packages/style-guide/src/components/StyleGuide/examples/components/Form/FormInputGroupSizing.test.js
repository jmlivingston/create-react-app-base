import React from 'react'
import ReactDOM from 'react-dom'
import FormInputGroupSizing from './FormInputGroupSizing'

it('FormInputGroupSizing - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<FormInputGroupSizing />, div)
  ReactDOM.unmountComponentAtNode(div)
})
