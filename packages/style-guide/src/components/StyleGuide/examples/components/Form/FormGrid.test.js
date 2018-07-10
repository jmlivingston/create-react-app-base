import React from 'react'
import ReactDOM from 'react-dom'
import FormGrid from './FormGrid'

it('FormGrid - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<FormGrid />, div)
  ReactDOM.unmountComponentAtNode(div)
})
