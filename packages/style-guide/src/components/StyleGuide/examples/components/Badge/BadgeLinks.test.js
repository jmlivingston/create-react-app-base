import React from 'react'
import ReactDOM from 'react-dom'
import BadgeLinks from './BadgeLinks'

it('BadgeLinks - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<BadgeLinks />, div)
  ReactDOM.unmountComponentAtNode(div)
})
