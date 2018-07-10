import React from 'react'
import ReactDOM from 'react-dom'
import StyleGuideApp from './StyleGuideApp'

it('StyleGuideApp - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<StyleGuideApp />, div)
  ReactDOM.unmountComponentAtNode(div)
})
