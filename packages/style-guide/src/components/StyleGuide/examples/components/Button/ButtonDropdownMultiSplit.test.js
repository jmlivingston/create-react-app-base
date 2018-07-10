import React from 'react'
import ReactDOM from 'react-dom'
import ButtonDropdownMultiSplit from './ButtonDropdownMultiSplit'

it('ButtonDropdownMultiSplit - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ButtonDropdownMultiSplit />, div)
  ReactDOM.unmountComponentAtNode(div)
})
