import React from 'react'
import ReactDOM from 'react-dom'
import MediaDefault from './MediaDefault'

it('MediaDefault - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<MediaDefault />, div)
  ReactDOM.unmountComponentAtNode(div)
})
