import { CardHeader as ReactStrapCardHeader } from 'reactstrap'
import React from 'react'

import ThemeImporter from '../global/ThemeImporter'

const CardHeader = props => {
  return (
    <ThemeImporter>
      <ReactStrapCardHeader {...props} />
    </ThemeImporter>
  )
}

CardHeader.propTypes = ReactStrapCardHeader.propTypes

export default CardHeader
