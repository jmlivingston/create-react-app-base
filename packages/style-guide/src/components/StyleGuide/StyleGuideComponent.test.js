import React from 'react'
import ReactDOM from 'react-dom'
import StyleGuideComponent from './StyleGuideComponent'

it('StyleGuideComponent - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<StyleGuideComponent />, div)
  ReactDOM.unmountComponentAtNode(div)
})
