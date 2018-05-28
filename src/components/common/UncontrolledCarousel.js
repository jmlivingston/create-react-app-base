import { UncontrolledCarousel as ReactStrapUncontrolledCarousel } from 'reactstrap'
import React from 'react'

import ThemeImporter from '../global/ThemeImporter'

const UncontrolledCarousel = props => {
  return (
    <ThemeImporter sassNames={['_carousel']}>
      <ReactStrapUncontrolledCarousel {...props} />
    </ThemeImporter>
  )
}

UncontrolledCarousel.propTypes = ReactStrapUncontrolledCarousel.propTypes

export default UncontrolledCarousel
