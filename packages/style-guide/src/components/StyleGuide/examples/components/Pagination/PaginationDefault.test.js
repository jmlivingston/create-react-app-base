import React from 'react'
import ReactDOM from 'react-dom'
import PaginationDefault from './PaginationDefault'

it('PaginationDefault - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<PaginationDefault />, div)
  ReactDOM.unmountComponentAtNode(div)
})
