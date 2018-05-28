import { CarouselControl as ReactStrapCarouselControl } from 'reactstrap'
import React from 'react'

import ThemeImporter from '../global/ThemeImporter'

const CarouselControl = props => {
  return (
    <ThemeImporter>
      <ReactStrapCarouselControl {...props} />
    </ThemeImporter>
  )
}

CarouselControl.propTypes = ReactStrapCarouselControl.propTypes

export default CarouselControl
