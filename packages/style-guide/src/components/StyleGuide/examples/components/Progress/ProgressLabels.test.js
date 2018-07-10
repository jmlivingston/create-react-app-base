import React from 'react'
import ReactDOM from 'react-dom'
import ProgressLabels from './ProgressLabels'

it('ProgressLabels - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ProgressLabels />, div)
  ReactDOM.unmountComponentAtNode(div)
})
