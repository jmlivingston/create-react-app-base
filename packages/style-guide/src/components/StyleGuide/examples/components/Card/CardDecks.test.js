import React from 'react'
import ReactDOM from 'react-dom'
import CardDecks from './CardDecks'

it('CardDecks - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<CardDecks />, div)
  ReactDOM.unmountComponentAtNode(div)
})
