import React from 'react'
import ReactDOM from 'react-dom'
import FormInputGroupOverview from './FormInputGroupOverview'

it('FormInputGroupOverview - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<FormInputGroupOverview />, div)
  ReactDOM.unmountComponentAtNode(div)
})
