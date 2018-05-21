import { CarouselIndicators as ReactStrapCarouselIndicators } from 'reactstrap'

import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const CarouselIndicators = props => {
  return (
    <Fragment>
      <ThemeImporter path="_carouselindicators">
        <ReactStrapCarouselIndicators {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

CarouselIndicators.propTypes = ReactStrapCarouselIndicators.propTypes

export default CarouselIndicators
