import React from 'react'
import ReactDOM from 'react-dom'
import DropdownDefault from './DropdownDefault'

it('DropdownDefault - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<DropdownDefault />, div)
  ReactDOM.unmountComponentAtNode(div)
})
