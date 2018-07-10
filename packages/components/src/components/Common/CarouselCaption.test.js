import React from 'react'
import ReactDOM from 'react-dom'
import CarouselCaption from './CarouselCaption'
import GlobalContainer from '../Global/GlobalContainer'

it('CarouselCaption - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <CarouselCaption />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
