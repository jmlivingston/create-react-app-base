import { BreadcrumbItem as ReactStrapBreadcrumbItem } from 'reactstrap'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const BreadcrumbItem = props => {
  return (
    <Fragment>
      <ThemeImporter path="_breadcrumbitem">
        <ReactStrapBreadcrumbItem {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

BreadcrumbItem.propTypes = ReactStrapBreadcrumbItem.propTypes

export default BreadcrumbItem
