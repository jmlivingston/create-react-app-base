import { ListGroup as ReactStrapListGroup } from 'reactstrap'
import React from 'react'

import ThemeImporter from '../Global/ThemeImporter'

const ListGroup = props => {
  return (
    <ThemeImporter sassNames={['list-group']}>
      <ReactStrapListGroup {...props} />
    </ThemeImporter>
  )
}

ListGroup.propTypes = ReactStrapListGroup.propTypes

export default ListGroup
