import React from 'react'
import ReactDOM from 'react-dom'
import TermsConditions from './TermsConditions'

it('TermsConditions - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<TermsConditions />, div)
  ReactDOM.unmountComponentAtNode(div)
})
