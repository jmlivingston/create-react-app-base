import { CardSubtitle as ReactStrapCardSubtitle } from 'reactstrap'
import React from 'react'

import ThemeImporter from '../global/ThemeImporter'

const CardSubtitle = props => {
  return (
    <ThemeImporter>
      <ReactStrapCardSubtitle {...props} />
    </ThemeImporter>
  )
}

CardSubtitle.propTypes = ReactStrapCardSubtitle.propTypes

export default CardSubtitle
