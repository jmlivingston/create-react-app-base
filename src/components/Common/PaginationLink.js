import { PaginationLink as ReactStrapPaginationLink } from 'reactstrap'
import React from 'react'

const PaginationLink = props => {
  return <ReactStrapPaginationLink {...props} />
}

PaginationLink.propTypes = ReactStrapPaginationLink.propTypes

export default PaginationLink
