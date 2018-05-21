import { UncontrolledCarousel as ReactStrapUncontrolledCarousel } from 'reactstrap'

import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const UncontrolledCarousel = props => {
  return (
    <Fragment>
      <ThemeImporter path="_uncontrolledcarousel">
        <ReactStrapUncontrolledCarousel {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

UncontrolledCarousel.propTypes = ReactStrapUncontrolledCarousel.propTypes

export default UncontrolledCarousel
