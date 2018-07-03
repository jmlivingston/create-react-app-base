import { PaginationItem as ReactStrapPaginationItem } from 'reactstrap'
import React from 'react'

const PaginationItem = props => {
  return <ReactStrapPaginationItem {...props} />
}

PaginationItem.propTypes = ReactStrapPaginationItem.propTypes

export default PaginationItem
