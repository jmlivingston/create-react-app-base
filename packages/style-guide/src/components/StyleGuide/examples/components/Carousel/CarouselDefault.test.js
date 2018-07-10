import React from 'react'
import ReactDOM from 'react-dom'
import CarouselDefault from './CarouselDefault'

it('CarouselDefault - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<CarouselDefault />, div)
  ReactDOM.unmountComponentAtNode(div)
})
