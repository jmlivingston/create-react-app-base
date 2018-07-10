import React from 'react'
import ReactDOM from 'react-dom'
import ProgressColor from './ProgressColor'

it('ProgressColor - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ProgressColor />, div)
  ReactDOM.unmountComponentAtNode(div)
})
