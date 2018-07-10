import React from 'react'
import ReactDOM from 'react-dom'
import DropdownSizing from './DropdownSizing'

it('DropdownSizing - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<DropdownSizing />, div)
  ReactDOM.unmountComponentAtNode(div)
})
