import React from 'react'
import ReactDOM from 'react-dom'
import CardImg from './CardImg'
import GlobalContainer from '../Global/GlobalContainer'

it('CardImg - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <CardImg />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
