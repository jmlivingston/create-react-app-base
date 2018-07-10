import React from 'react'
import ReactDOM from 'react-dom'
import CardBody from './CardBody'
import GlobalContainer from '../Global/GlobalContainer'

it('CardBody - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <CardBody />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
