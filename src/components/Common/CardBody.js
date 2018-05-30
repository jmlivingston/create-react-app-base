import { CardBody as ReactStrapCardBody } from 'reactstrap'
import React from 'react'

import ThemeImporter from 'components/Global/ThemeImporter'

const CardBody = props => {
  return (
    <ThemeImporter>
      <ReactStrapCardBody {...props} />
    </ThemeImporter>
  )
}

CardBody.propTypes = ReactStrapCardBody.propTypes

export default CardBody