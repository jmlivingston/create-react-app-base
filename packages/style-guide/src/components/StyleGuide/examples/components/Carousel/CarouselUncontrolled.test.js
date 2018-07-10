import React from 'react'
import ReactDOM from 'react-dom'
import CarouselUncontrolled from './CarouselUncontrolled'

it('CarouselUncontrolled - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<CarouselUncontrolled />, div)
  ReactDOM.unmountComponentAtNode(div)
})
