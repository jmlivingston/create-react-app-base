import React from 'react'
import ReactDOM from 'react-dom'
import CardText from './CardText'
import GlobalContainer from '../Global/GlobalContainer'

it('CardText - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <CardText />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
