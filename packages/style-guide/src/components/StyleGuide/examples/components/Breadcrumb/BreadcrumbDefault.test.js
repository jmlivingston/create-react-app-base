import React from 'react'
import ReactDOM from 'react-dom'
import BreadcrumbDefault from './BreadcrumbDefault'

it('BreadcrumbDefault - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<BreadcrumbDefault />, div)
  ReactDOM.unmountComponentAtNode(div)
})
