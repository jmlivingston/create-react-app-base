import { CardHeader as ReactStrapCardHeader } from 'reactstrap'
import React from 'react'

import ThemeImporter from 'components/Global/ThemeImporter'

const CardHeader = props => {
  return (
    <ThemeImporter>
      <ReactStrapCardHeader {...props} />
    </ThemeImporter>
  )
}

CardHeader.propTypes = ReactStrapCardHeader.propTypes

export default CardHeader
