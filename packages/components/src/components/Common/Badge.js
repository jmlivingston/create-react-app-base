import { Badge as ReactStrapBadge } from 'reactstrap'
import React from 'react'

import ThemeImporter from '../Global/ThemeImporter'

const Badge = props => {
  return (
    <ThemeImporter sassNames={['badge']}>
      <ReactStrapBadge {...props} />
    </ThemeImporter>
  )
}

Badge.propTypes = ReactStrapBadge.propTypes

export default Badge
