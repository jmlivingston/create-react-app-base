import React from 'react'
import ReactDOM from 'react-dom'
import SiteMap from './SiteMap'

it('SiteMap - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<SiteMap strings={{ siteMap: '' }} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
