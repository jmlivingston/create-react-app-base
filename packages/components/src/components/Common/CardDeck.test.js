import React from 'react'
import ReactDOM from 'react-dom'
import CardDeck from './CardDeck'
import GlobalContainer from '../Global/GlobalContainer'

it('CardDeck - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <CardDeck />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
