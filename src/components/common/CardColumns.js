import { CardColumns as ReactStrapCardColumns } from 'reactstrap'
import React from 'react'

import ThemeImporter from '../global/ThemeImporter'

const CardColumns = props => {
  return (
    <ThemeImporter>
      <ReactStrapCardColumns {...props} />
    </ThemeImporter>
  )
}

CardColumns.propTypes = ReactStrapCardColumns.propTypes

export default CardColumns
