import React from 'react'
import ReactDOM from 'react-dom'
import BadgeDefault from './BadgeDefault'

it('BadgeDefault - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<BadgeDefault />, div)
  ReactDOM.unmountComponentAtNode(div)
})
