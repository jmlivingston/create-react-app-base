import { Carousel as ReactStrapCarousel } from 'reactstrap'
import React from 'react'

import ThemeImporter from '../Global/ThemeImporter'

const Carousel = props => {
  return (
    <ThemeImporter sassNames={['carousel']}>
      <ReactStrapCarousel {...props} />
    </ThemeImporter>
  )
}

Carousel.propTypes = ReactStrapCarousel.propTypes

export default Carousel
