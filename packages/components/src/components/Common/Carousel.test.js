import React from 'react'
import ReactDOM from 'react-dom'
import Carousel from './Carousel'
import GlobalContainer from '../Global/GlobalContainer'

it('Carousel - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <Carousel />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
