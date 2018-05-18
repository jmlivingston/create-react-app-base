import { ListGroupItemHeading as ReactStrapListGroupItemHeading } from 'reactstrap'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const ListGroupItemHeading = props => {
  return (
    <Fragment>
      <ThemeImporter path="_listgroupitemheading">
        <ReactStrapListGroupItemHeading {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

ListGroupItemHeading.propTypes = ReactStrapListGroupItemHeading.propTypes

export default ListGroupItemHeading
