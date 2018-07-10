import React from 'react'
import ReactDOM from 'react-dom'
import Jumbotron from './Jumbotron'
import GlobalContainer from '../Global/GlobalContainer'

it('Jumbotron - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <Jumbotron />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
