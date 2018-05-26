import { CardBody as ReactStrapCardBody } from 'reactstrap'

import React from 'react'

const CardBody = props => {
  return <ReactStrapCardBody {...props} />
}

CardBody.propTypes = ReactStrapCardBody.propTypes

export default CardBody
