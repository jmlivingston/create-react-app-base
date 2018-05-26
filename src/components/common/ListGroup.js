import { ListGroup as ReactStrapListGroup } from 'reactstrap'

import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const ListGroup = props => {
  return (
    <Fragment>
      <ThemeImporter path="_list-group">
        <ReactStrapListGroup {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

ListGroup.propTypes = ReactStrapListGroup.propTypes

export default ListGroup
