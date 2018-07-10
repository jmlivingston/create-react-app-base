import React from 'react'
import ReactDOM from 'react-dom'
import FormInlineCheckboxes from './FormInlineCheckboxes'

it('FormInlineCheckboxes - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<FormInlineCheckboxes />, div)
  ReactDOM.unmountComponentAtNode(div)
})
