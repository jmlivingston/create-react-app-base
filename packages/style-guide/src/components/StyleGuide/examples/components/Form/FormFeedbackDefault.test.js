import React from 'react'
import ReactDOM from 'react-dom'
import FormFeedbackDefault from './FormFeedbackDefault'

it('FormFeedbackDefault - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<FormFeedbackDefault />, div)
  ReactDOM.unmountComponentAtNode(div)
})
