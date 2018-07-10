import React from 'react'
import ReactDOM from 'react-dom'
import ProgressMulti from './ProgressMulti'

it('ProgressMulti - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ProgressMulti />, div)
  ReactDOM.unmountComponentAtNode(div)
})
