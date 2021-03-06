import React from 'react'
import ReactDOM from 'react-dom'
import CardLink from './CardLink'
import GlobalContainer from '../Global/GlobalContainer'

it('CardLink - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <CardLink />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
