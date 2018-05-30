import { CarouselControl as ReactStrapCarouselControl } from 'reactstrap'
import React from 'react'

import ThemeImporter from 'components/Global/ThemeImporter'

const CarouselControl = props => {
  return (
    <ThemeImporter>
      <ReactStrapCarouselControl {...props} />
    </ThemeImporter>
  )
}

CarouselControl.propTypes = ReactStrapCarouselControl.propTypes

export default CarouselControl
