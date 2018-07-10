import React from 'react'
import ReactDOM from 'react-dom'
import CardColumns from './CardColumns'
import GlobalContainer from '../Global/GlobalContainer'

it('CardColumns - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <CardColumns />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
