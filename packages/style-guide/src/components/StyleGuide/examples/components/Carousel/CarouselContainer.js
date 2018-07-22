import React, { Fragment } from 'react'

import CarouselCustomTag from './CarouselCustomTag'
import CarouselDefault from './CarouselDefault'
import CarouselUncontrolled from './CarouselUncontrolled'

import CarouselCustomTagCode from '../../../code/components/Carousel/CarouselCustomTagCode'
import CarouselDefaultCode from '../../../code/components/Carousel/CarouselDefaultCode'
import CarouselUncontrolledCode from '../../../code/components/Carousel/CarouselUncontrolledCode'
    
import StyleGuideWrapper from '../../../StyleGuideWrapper'
    
const Carousel = props => {
  return (
    <Fragment>
      <StyleGuideWrapper title="Carousel" name="CarouselCustomTag" component={<CarouselCustomTag />} code={CarouselCustomTagCode} {...props} />
				<StyleGuideWrapper title="Carousel" name="CarouselDefault" component={<CarouselDefault />} code={CarouselDefaultCode} {...props} />
				<StyleGuideWrapper title="Carousel" name="CarouselUncontrolled" component={<CarouselUncontrolled />} code={CarouselUncontrolledCode} {...props} />
    </Fragment>
  )
}

export default Carousel
    
