import React from 'react'
import ReactDOM from 'react-dom'
import CarouselControl from './CarouselControl'
import GlobalContainer from '../Global/GlobalContainer'

it('CarouselControl - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <CarouselControl />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
