import React from 'react'
import ReactDOM from 'react-dom'
import ButtonDropdownDefault from './ButtonDropdownDefault'

it('ButtonDropdownDefault - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ButtonDropdownDefault />, div)
  ReactDOM.unmountComponentAtNode(div)
})
