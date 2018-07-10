import React from 'react'
import ReactDOM from 'react-dom'
import ProgressMax from './ProgressMax'

it('ProgressMax - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ProgressMax />, div)
  ReactDOM.unmountComponentAtNode(div)
})
