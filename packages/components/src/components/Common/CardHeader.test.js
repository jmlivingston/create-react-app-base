import React from 'react'
import ReactDOM from 'react-dom'
import CardHeader from './CardHeader'
import GlobalContainer from '../Global/GlobalContainer'

it('CardHeader - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <CardHeader />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
