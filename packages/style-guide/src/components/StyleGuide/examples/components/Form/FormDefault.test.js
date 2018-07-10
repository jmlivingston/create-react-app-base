import React from 'react'
import ReactDOM from 'react-dom'
import FormDefault from './FormDefault'

it('FormDefault - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<FormDefault />, div)
  ReactDOM.unmountComponentAtNode(div)
})
