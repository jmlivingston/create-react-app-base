import React from 'react'
import ReactDOM from 'react-dom'
import CarouselIndicators from './CarouselIndicators'
import GlobalContainer from '../Global/GlobalContainer'

it('CarouselIndicators - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <GlobalContainer>
      <CarouselIndicators items={[]} />
    </GlobalContainer>, 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
