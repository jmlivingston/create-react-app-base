import React from 'react'
import ReactDOM from 'react-dom'
import DropdownUncontrolled from './DropdownUncontrolled'

it('DropdownUncontrolled - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<DropdownUncontrolled />, div)
  ReactDOM.unmountComponentAtNode(div)
})
