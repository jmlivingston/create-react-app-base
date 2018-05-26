import { CardTitle as ReactStrapCardTitle } from 'reactstrap'

import React from 'react'

const CardTitle = props => {
  return <ReactStrapCardTitle {...props} />
}

CardTitle.propTypes = ReactStrapCardTitle.propTypes

export default CardTitle
