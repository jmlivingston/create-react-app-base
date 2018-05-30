import { CarouselIndicators as ReactStrapCarouselIndicators } from 'reactstrap'
import React from 'react'

import ThemeImporter from 'components/Global/ThemeImporter'

const CarouselIndicators = props => {
  return (
    <ThemeImporter>
      <ReactStrapCarouselIndicators {...props} />
    </ThemeImporter>
  )
}

CarouselIndicators.propTypes = ReactStrapCarouselIndicators.propTypes

export default CarouselIndicators
