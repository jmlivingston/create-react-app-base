import React from 'react'
import ReactDOM from 'react-dom'
import MediaAlignment from './MediaAlignment'

it('MediaAlignment - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<MediaAlignment />, div)
  ReactDOM.unmountComponentAtNode(div)
})
