import React from 'react'
import ReactDOM from 'react-dom'
import JumbotronFluid from './JumbotronFluid'

it('JumbotronFluid - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<JumbotronFluid />, div)
  ReactDOM.unmountComponentAtNode(div)
})
