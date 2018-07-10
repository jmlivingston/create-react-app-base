import React from 'react'
import ReactDOM from 'react-dom'
import CardSubtitle from './CardSubtitle'
import GlobalContainer from '../Global/GlobalContainer'

it('CardSubtitle - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <CardSubtitle />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
