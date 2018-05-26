import { CarouselItem as ReactStrapCarouselItem } from 'reactstrap'

import React from 'react'

const CarouselItem = props => {
  return <ReactStrapCarouselItem {...props} />
}

CarouselItem.propTypes = ReactStrapCarouselItem.propTypes

export default CarouselItem
