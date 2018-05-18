import { ListGroupItem as ReactStrapListGroupItem } from 'reactstrap'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const ListGroupItem = props => {
  return (
    <Fragment>
      <ThemeImporter path="_listgroupitem">
        <ReactStrapListGroupItem {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

ListGroupItem.propTypes = ReactStrapListGroupItem.propTypes

export default ListGroupItem
