import { CarouselCaption as ReactStrapCarouselCaption } from 'reactstrap'
import React from 'react'

import ThemeImporter from '../global/ThemeImporter'

const CarouselCaption = props => {
  return (
    <ThemeImporter>
      <ReactStrapCarouselCaption {...props} />
    </ThemeImporter>
  )
}

CarouselCaption.propTypes = ReactStrapCarouselCaption.propTypes

export default CarouselCaption
