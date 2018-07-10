import React from 'react'
import ReactDOM from 'react-dom'
import ButtonDropdownMulti from './ButtonDropdownMulti'

it('ButtonDropdownMulti - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ButtonDropdownMulti />, div)
  ReactDOM.unmountComponentAtNode(div)
})
