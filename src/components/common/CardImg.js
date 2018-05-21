import { CardImg as ReactStrapCardImg } from 'reactstrap'

import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const CardImg = props => {
  return (
    <Fragment>
      <ThemeImporter path="_cardimg">
        <ReactStrapCardImg {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

CardImg.propTypes = ReactStrapCardImg.propTypes

export default CardImg
