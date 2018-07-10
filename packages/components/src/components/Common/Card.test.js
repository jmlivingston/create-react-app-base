import React from 'react'
import ReactDOM from 'react-dom'
import Card from './Card'
import GlobalContainer from '../Global/GlobalContainer'

it('Card - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <Card />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
