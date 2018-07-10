import React from 'react'
import ReactDOM from 'react-dom'
import ListGroup from './ListGroup'
import GlobalContainer from '../Global/GlobalContainer'

it('ListGroup - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <ListGroup />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
