import React from 'react'
import ReactDOM from 'react-dom'
import PaginationSizingSmall from './PaginationSizingSmall'

it('PaginationSizingSmall - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<PaginationSizingSmall />, div)
  ReactDOM.unmountComponentAtNode(div)
})
