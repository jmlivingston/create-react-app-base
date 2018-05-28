import { CardLink as ReactStrapCardLink } from 'reactstrap'
import React from 'react'

import ThemeImporter from 'components/global/ThemeImporter'

const CardLink = props => {
  return (
    <ThemeImporter>
      <ReactStrapCardLink {...props} />
    </ThemeImporter>
  )
}

CardLink.propTypes = ReactStrapCardLink.propTypes

export default CardLink
