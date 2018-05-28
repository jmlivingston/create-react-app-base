import { BreadcrumbItem as ReactStrapBreadcrumbItem } from 'reactstrap'
import React from 'react'

import ThemeImporter from 'components/global/ThemeImporter'

const BreadcrumbItem = props => {
  return (
    <ThemeImporter sassNames={['_breadcrumb']}>
      <ReactStrapBreadcrumbItem {...props} />
    </ThemeImporter>
  )
}

BreadcrumbItem.propTypes = ReactStrapBreadcrumbItem.propTypes

export default BreadcrumbItem
