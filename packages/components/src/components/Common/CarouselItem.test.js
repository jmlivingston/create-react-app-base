import React from 'react'
import ReactDOM from 'react-dom'
import CarouselItem from './CarouselItem'
import GlobalContainer from '../Global/GlobalContainer'

it('CarouselItem - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <CarouselItem />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
