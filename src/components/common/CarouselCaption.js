import { CarouselCaption as ReactStrapCarouselCaption } from 'reactstrap'

import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const CarouselCaption = props => {
  return (
    <Fragment>
      <ThemeImporter path="_carouselcaption">
        <ReactStrapCarouselCaption {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

CarouselCaption.propTypes = ReactStrapCarouselCaption.propTypes

export default CarouselCaption
