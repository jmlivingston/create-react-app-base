import React from 'react'
import ReactDOM from 'react-dom'
import Badge from './Badge'
import GlobalContainer from '../Global/GlobalContainer'

it('Badge - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <Badge />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
