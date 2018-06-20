import { Row as ReactStrapRow } from 'reactstrap'
import React from 'react'

const Row = props => {
  return <ReactStrapRow {...props} />
}

Row.propTypes = ReactStrapRow.propTypes

export default Row
