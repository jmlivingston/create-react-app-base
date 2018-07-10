import React from 'react'
import ReactDOM from 'react-dom'
import CardFooter from './CardFooter'
import GlobalContainer from '../Global/GlobalContainer'

it('CardFooter - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <CardFooter />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
