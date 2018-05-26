import { CardColumns as ReactStrapCardColumns } from 'reactstrap'

import React from 'react'

const CardColumns = props => {
  return <ReactStrapCardColumns {...props} />
}

CardColumns.propTypes = ReactStrapCardColumns.propTypes

export default CardColumns
