import { CardImg as ReactStrapCardImg } from 'reactstrap'
import React from 'react'

import ThemeImporter from '../global/ThemeImporter'

const CardImg = props => {
  return (
    <ThemeImporter>
      <ReactStrapCardImg {...props} />
    </ThemeImporter>
  )
}

CardImg.propTypes = ReactStrapCardImg.propTypes

export default CardImg
