import React from 'react'
import ReactDOM from 'react-dom'
import FadeDefault from './FadeDefault'

it('FadeDefault - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<FadeDefault />, div)
  ReactDOM.unmountComponentAtNode(div)
})
