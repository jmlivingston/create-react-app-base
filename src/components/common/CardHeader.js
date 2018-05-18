import { CardHeader as ReactStrapCardHeader } from 'reactstrap'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const CardHeader = props => {
  return (
    <Fragment>
      <ThemeImporter path="_cardheader">
        <ReactStrapCardHeader {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

CardHeader.propTypes = ReactStrapCardHeader.propTypes

export default CardHeader
