import React from 'react'
import ReactDOM from 'react-dom'
import ProgressDefault from './ProgressDefault'

it('ProgressDefault - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ProgressDefault />, div)
  ReactDOM.unmountComponentAtNode(div)
})
