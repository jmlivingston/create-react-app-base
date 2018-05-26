import { CardGroup as ReactStrapCardGroup } from 'reactstrap'

import React from 'react'

const CardGroup = props => {
  return <ReactStrapCardGroup {...props} />
}

CardGroup.propTypes = ReactStrapCardGroup.propTypes

export default CardGroup
