import React from 'react'
import ReactDOM from 'react-dom'
import CardGroup from './CardGroup'
import GlobalContainer from '../Global/GlobalContainer'

it('CardGroup - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <CardGroup />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
