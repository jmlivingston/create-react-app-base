import React from 'react'
import ReactDOM from 'react-dom'
import TableDefault from './TableDefault'

it('TableDefault - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<TableDefault />, div)
  ReactDOM.unmountComponentAtNode(div)
})
