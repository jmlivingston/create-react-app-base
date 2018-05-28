import { Badge as ReactStrapBadge } from 'reactstrap'
import React from 'react'

import ThemeImporter from 'components/global/ThemeImporter'

const Badge = props => {
  return (
    <ThemeImporter sassNames={['_badge']}>
      <ReactStrapBadge {...props} />
    </ThemeImporter>
  )
}

Badge.propTypes = ReactStrapBadge.propTypes

export default Badge
