import React from 'react'
import ReactDOM from 'react-dom'
import NavPills from './NavPills'

it('NavPills - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<NavPills />, div)
  ReactDOM.unmountComponentAtNode(div)
})
