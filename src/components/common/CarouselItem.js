import { CarouselItem as ReactStrapCarouselItem } from 'reactstrap'
import React from 'react'

import ThemeImporter from 'components/Global/ThemeImporter'

const CarouselItem = props => {
  return (
    <ThemeImporter>
      <ReactStrapCarouselItem {...props} />
    </ThemeImporter>
  )
}

CarouselItem.propTypes = ReactStrapCarouselItem.propTypes

export default CarouselItem
