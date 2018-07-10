import React from 'react'
import ReactDOM from 'react-dom'
import CollapseDefault from './CollapseDefault'

it('CollapseDefault - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<CollapseDefault />, div)
  ReactDOM.unmountComponentAtNode(div)
})
