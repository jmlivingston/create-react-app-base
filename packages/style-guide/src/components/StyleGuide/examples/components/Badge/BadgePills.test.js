import React from 'react'
import ReactDOM from 'react-dom'
import BadgePills from './BadgePills'

it('BadgePills - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<BadgePills />, div)
  ReactDOM.unmountComponentAtNode(div)
})
