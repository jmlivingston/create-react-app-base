import React from 'react'
import ReactDOM from 'react-dom'
import ButtonGroupDefault from './ButtonGroupDefault'

it('ButtonGroupDefault - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ButtonGroupDefault />, div)
  ReactDOM.unmountComponentAtNode(div)
})
