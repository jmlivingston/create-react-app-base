import React from 'react'

import CarouselCustomTag from './CarouselCustomTag'
import CarouselDefault from './CarouselDefault'
import CarouselUncontrolled from './CarouselUncontrolled'

import CarouselCustomTagCode from '../../../code/components/Carousel/CarouselCustomTagCode'
import CarouselDefaultCode from '../../../code/components/Carousel/CarouselDefaultCode'
import CarouselUncontrolledCode from '../../../code/components/Carousel/CarouselUncontrolledCode'

import StyleGuideComponent from '../../../StyleGuideComponent'
import StyleGuideWrapper from '../../../StyleGuideWrapper'

const Carousel = props => {
  return (
    <StyleGuideWrapper title="Carousel" {...props}>
      <StyleGuideComponent
        title="Carousel"
        name="CarouselCustomTag"
        component={<CarouselCustomTag />}
        code={CarouselCustomTagCode}
      />
      <StyleGuideComponent
        title="Carousel"
        name="CarouselDefault"
        component={<CarouselDefault />}
        code={CarouselDefaultCode}
      />
      <StyleGuideComponent
        title="Carousel"
        name="CarouselUncontrolled"
        component={<CarouselUncontrolled />}
        code={CarouselUncontrolledCode}
      />
    </StyleGuideWrapper>
  )
}

export default Carousel
