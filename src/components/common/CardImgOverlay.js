import { CardImgOverlay as ReactStrapCardImgOverlay } from 'reactstrap'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const CardImgOverlay = props => {
  return (
    <Fragment>
      <ThemeImporter path="_cardimgoverlay">
        <ReactStrapCardImgOverlay {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

CardImgOverlay.propTypes = ReactStrapCardImgOverlay.propTypes

export default CardImgOverlay
