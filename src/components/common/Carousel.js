import { Carousel as ReactStrapCarousel } from 'reactstrap'
import React from 'react'

import ThemeImporter from 'components/global/ThemeImporter'

const Carousel = props => {
  return (
    <ThemeImporter sassNames={['_carousel']}>
      <ReactStrapCarousel {...props} />
    </ThemeImporter>
  )
}

Carousel.propTypes = ReactStrapCarousel.propTypes

export default Carousel
