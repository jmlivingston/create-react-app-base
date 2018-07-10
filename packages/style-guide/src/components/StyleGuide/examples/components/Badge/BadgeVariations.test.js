import React from 'react'
import ReactDOM from 'react-dom'
import BadgeVariations from './BadgeVariations'

it('BadgeVariations - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<BadgeVariations />, div)
  ReactDOM.unmountComponentAtNode(div)
})
