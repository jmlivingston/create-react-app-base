import { ListGroup as ReactStrapListGroup } from 'reactstrap'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const ListGroup = props => {
  return (
    <Fragment>
      <ThemeImporter path="_listgroup">
        <ReactStrapListGroup {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

ListGroup.propTypes = ReactStrapListGroup.propTypes

export default ListGroup
