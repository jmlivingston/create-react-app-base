import React from 'react'
import ReactDOM from 'react-dom'
import BadgeButton from './BadgeButton'

it('BadgeButton - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<BadgeButton />, div)
  ReactDOM.unmountComponentAtNode(div)
})
