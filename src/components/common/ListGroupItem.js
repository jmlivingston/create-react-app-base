import { ListGroupItem as ReactStrapListGroupItem } from 'reactstrap'

import React from 'react'

const ListGroupItem = props => {
  return <ReactStrapListGroupItem {...props} />
}

ListGroupItem.propTypes = ReactStrapListGroupItem.propTypes

export default ListGroupItem
