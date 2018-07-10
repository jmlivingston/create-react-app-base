import React from 'react'
import ReactDOM from 'react-dom'
import StyleGuideSection from './StyleGuideSection'

it('StyleGuideSection - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<StyleGuideSection />, div)
  ReactDOM.unmountComponentAtNode(div)
})
