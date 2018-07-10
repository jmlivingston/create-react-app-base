import React from 'react'
import ReactDOM from 'react-dom'
import FormInline from './FormInline'

it('FormInline - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<FormInline />, div)
  ReactDOM.unmountComponentAtNode(div)
})
