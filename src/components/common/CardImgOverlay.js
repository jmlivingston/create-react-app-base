import { CardImgOverlay as ReactStrapCardImgOverlay } from 'reactstrap'
import React from 'react'

import ThemeImporter from '../global/ThemeImporter'

const CardImgOverlay = props => {
  return (
    <ThemeImporter>
      <ReactStrapCardImgOverlay {...props} />
    </ThemeImporter>
  )
}

CardImgOverlay.propTypes = ReactStrapCardImgOverlay.propTypes

export default CardImgOverlay
