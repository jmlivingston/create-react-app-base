import React from 'react'
import ReactDOM from 'react-dom'
import ListGroupItemText from './ListGroupItemText'
import GlobalContainer from '../Global/GlobalContainer'

it('ListGroupItemText - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <ListGroupItemText />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
