import React from 'react'
import ReactDOM from 'react-dom'
import CarouselCustomTag from './CarouselCustomTag'

it('CarouselCustomTag - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<CarouselCustomTag />, div)
  ReactDOM.unmountComponentAtNode(div)
})
