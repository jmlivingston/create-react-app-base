import React from 'react'
import ReactDOM from 'react-dom'
import StyleGuideWrapper from './StyleGuideWrapper'

it('StyleGuideWrapper - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<StyleGuideWrapper />, div)
  ReactDOM.unmountComponentAtNode(div)
})
