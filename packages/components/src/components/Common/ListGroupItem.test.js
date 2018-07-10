import React from 'react'
import ReactDOM from 'react-dom'
import ListGroupItem from './ListGroupItem'
import GlobalContainer from '../Global/GlobalContainer'

it('ListGroupItem - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <ListGroupItem />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
