import { Badge as ReactStrapBadge } from 'reactstrap'

import React, { Fragment } from 'react'

import ThemeImporter from '../global/ThemeImporter'

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
