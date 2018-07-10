import React from 'react'
import ReactDOM from 'react-dom'
import styleGuideData from './styleGuideData'

it('styleGuideData - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<styleGuideData />, div)
  ReactDOM.unmountComponentAtNode(div)
})
