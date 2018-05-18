import { CarouselItem as ReactStrapCarouselItem } from 'reactstrap'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const CarouselItem = props => {
  return (
    <Fragment>
      <ThemeImporter path="_carouselitem">
        <ReactStrapCarouselItem {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

CarouselItem.propTypes = ReactStrapCarouselItem.propTypes

export default CarouselItem
