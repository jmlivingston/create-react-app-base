import { ListGroup as ReactStrapListGroup } from 'reactstrap'
import React from 'react'

import ThemeImporter from 'components/global/ThemeImporter'

const ListGroup = props => {
  return (
    <ThemeImporter sassNames={['_list-group']}>
      <ReactStrapListGroup {...props} />
    </ThemeImporter>
  )
}

ListGroup.propTypes = ReactStrapListGroup.propTypes

export default ListGroup
