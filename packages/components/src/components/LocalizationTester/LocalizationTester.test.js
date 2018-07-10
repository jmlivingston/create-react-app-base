import React from 'react'
import ReactDOM from 'react-dom'
import LocalizationTester from './LocalizationTester'

it('LocalizationTester - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<LocalizationTester />, div)
  ReactDOM.unmountComponentAtNode(div)
})
