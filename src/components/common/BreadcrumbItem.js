import { BreadcrumbItem as ReactStrapBreadcrumbItem } from 'reactstrap'

import React, { Fragment } from 'react'

import ThemeImporter from '../global/ThemeImporter'

const BreadcrumbItem = props => {
  return (
    <Fragment>
      <ThemeImporter path="_breadcrumb">
        <ReactStrapBreadcrumbItem {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

BreadcrumbItem.propTypes = ReactStrapBreadcrumbItem.propTypes

export default BreadcrumbItem
