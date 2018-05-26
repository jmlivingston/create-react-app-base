import { CardLink as ReactStrapCardLink } from 'reactstrap'

import React from 'react'

const CardLink = props => {
  return <ReactStrapCardLink {...props} />
}

CardLink.propTypes = ReactStrapCardLink.propTypes

export default CardLink
