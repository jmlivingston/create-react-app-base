import React from 'react'
import ReactDOM from 'react-dom'
import ListGroupItemHeading from './ListGroupItemHeading'
import GlobalContainer from '../Global/GlobalContainer'

it('ListGroupItemHeading - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <ListGroupItemHeading />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
