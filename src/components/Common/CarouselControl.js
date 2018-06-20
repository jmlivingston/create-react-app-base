import { CarouselControl as ReactStrapCarouselControl } from 'reactstrap'
import React from 'react'

const CarouselControl = props => {
  return <ReactStrapCarouselControl {...props} />
}

CarouselControl.propTypes = ReactStrapCarouselControl.propTypes

export default CarouselControl
