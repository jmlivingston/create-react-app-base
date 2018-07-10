import React from 'react'
import ReactDOM from 'react-dom'
import ProgressAnimated from './ProgressAnimated'

it('ProgressAnimated - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ProgressAnimated />, div)
  ReactDOM.unmountComponentAtNode(div)
})
