import React from 'react'
import ReactDOM from 'react-dom'
import FormLabelHidden from './FormLabelHidden'

it('FormLabelHidden - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<FormLabelHidden />, div)
  ReactDOM.unmountComponentAtNode(div)
})
