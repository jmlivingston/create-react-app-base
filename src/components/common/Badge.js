import { Badge as ReactStrapBadge } from 'reactstrap'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const Badge = props => {
  return (
    <Fragment>
      <ThemeImporter path="_badge">
        <ReactStrapBadge {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

Badge.propTypes = ReactStrapBadge.propTypes

export default Badge
