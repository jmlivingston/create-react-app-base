import React from 'react'
import ReactDOM from 'react-dom'
import ButtonToolbarDefault from './ButtonToolbarDefault'

it('ButtonToolbarDefault - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ButtonToolbarDefault />, div)
  ReactDOM.unmountComponentAtNode(div)
})
