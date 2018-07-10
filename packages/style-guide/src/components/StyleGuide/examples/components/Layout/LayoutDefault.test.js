import React from 'react'
import ReactDOM from 'react-dom'
import LayoutDefault from './LayoutDefault'

it('LayoutDefault - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<LayoutDefault />, div)
  ReactDOM.unmountComponentAtNode(div)
})
