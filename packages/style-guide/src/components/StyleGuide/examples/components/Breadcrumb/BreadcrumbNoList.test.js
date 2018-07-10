import React from 'react'
import ReactDOM from 'react-dom'
import BreadcrumbNoList from './BreadcrumbNoList'

it('BreadcrumbNoList - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<BreadcrumbNoList />, div)
  ReactDOM.unmountComponentAtNode(div)
})
