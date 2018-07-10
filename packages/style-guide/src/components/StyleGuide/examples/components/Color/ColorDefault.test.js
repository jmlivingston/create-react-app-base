import React from 'react'
import ReactDOM from 'react-dom'
import ColorDefault from './ColorDefault'

it('ColorDefault - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ColorDefault />, div)
  ReactDOM.unmountComponentAtNode(div)
})
