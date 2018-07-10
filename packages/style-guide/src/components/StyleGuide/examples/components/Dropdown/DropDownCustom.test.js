import React from 'react'
import ReactDOM from 'react-dom'
import DropDownCustom from './DropDownCustom'

it('DropDownCustom - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<DropDownCustom />, div)
  ReactDOM.unmountComponentAtNode(div)
})
