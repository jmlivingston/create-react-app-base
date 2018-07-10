import React from 'react'
import ReactDOM from 'react-dom'
import NavTabs from './NavTabs'

it('NavTabs - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<NavTabs />, div)
  ReactDOM.unmountComponentAtNode(div)
})
