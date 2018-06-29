import { CardHeader as ReactStrapCardHeader } from 'reactstrap'
import React from 'react'

const CardHeader = props => {
  return <ReactStrapCardHeader {...props} />
}

CardHeader.propTypes = ReactStrapCardHeader.propTypes

export default CardHeader
