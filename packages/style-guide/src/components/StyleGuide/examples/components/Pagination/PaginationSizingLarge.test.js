import React from 'react'
import ReactDOM from 'react-dom'
import PaginationSizingLarge from './PaginationSizingLarge'

it('PaginationSizingLarge - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<PaginationSizingLarge />, div)
  ReactDOM.unmountComponentAtNode(div)
})
