import { CardTitle as ReactStrapCardTitle } from 'reactstrap'

import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const CardTitle = props => {
  return (
    <Fragment>
      <ThemeImporter path="_cardtitle">
        <ReactStrapCardTitle {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

CardTitle.propTypes = ReactStrapCardTitle.propTypes

export default CardTitle
