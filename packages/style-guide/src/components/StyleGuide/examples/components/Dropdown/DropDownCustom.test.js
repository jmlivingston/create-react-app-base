import React from 'react'
import ReactDOM from 'react-dom'
import DropdownCustom from './DropdownCustom'

it('DropdownCustom - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<DropdownCustom />, div)
  ReactDOM.unmountComponentAtNode(div)
})
