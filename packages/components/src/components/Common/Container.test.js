import React from 'react'
import ReactDOM from 'react-dom'
import Container from './Container'
import GlobalContainer from '../Global/GlobalContainer'

it('Container - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <Container />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
