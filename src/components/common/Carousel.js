import { Carousel as ReactStrapCarousel } from 'reactstrap'

import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const Carousel = props => {
  return (
    <Fragment>
      <ThemeImporter path="_carousel">
        <ReactStrapCarousel {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

Carousel.propTypes = ReactStrapCarousel.propTypes

export default Carousel
