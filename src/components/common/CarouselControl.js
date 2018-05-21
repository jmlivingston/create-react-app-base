import { CarouselControl as ReactStrapCarouselControl } from 'reactstrap'

import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const CarouselControl = props => {
  return (
    <Fragment>
      <ThemeImporter path="_carouselcontrol">
        <ReactStrapCarouselControl {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

CarouselControl.propTypes = ReactStrapCarouselControl.propTypes

export default CarouselControl
