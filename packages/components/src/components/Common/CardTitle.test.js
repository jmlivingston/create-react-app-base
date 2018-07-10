import React from 'react'
import ReactDOM from 'react-dom'
import CardTitle from './CardTitle'
import GlobalContainer from '../Global/GlobalContainer'

it('CardTitle - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <CardTitle />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
