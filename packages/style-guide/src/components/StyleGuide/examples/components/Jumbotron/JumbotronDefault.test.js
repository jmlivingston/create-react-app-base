import React from 'react'
import ReactDOM from 'react-dom'
import JumbotronDefault from './JumbotronDefault'

it('JumbotronDefault - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<JumbotronDefault />, div)
  ReactDOM.unmountComponentAtNode(div)
})
