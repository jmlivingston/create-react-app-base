import { Col as ReactStrapCol } from 'reactstrap'
import React from 'react'

const Col = props => {
  return <ReactStrapCol {...props} />
}

Col.propTypes = ReactStrapCol.propTypes

export default Col
