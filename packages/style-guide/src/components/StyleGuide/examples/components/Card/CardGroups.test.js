import React from 'react'
import ReactDOM from 'react-dom'
import CardGroups from './CardGroups'

it('CardGroups - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<CardGroups />, div)
  ReactDOM.unmountComponentAtNode(div)
})
