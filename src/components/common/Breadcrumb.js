import { Breadcrumb as ReactStrapBreadcrumb } from 'reactstrap'
import React from 'react'

import ThemeImporter from '../global/ThemeImporter'

const Breadcrumb = props => {
  return (
    <ThemeImporter sassNames={['_breadcrumb']}>
      <ReactStrapBreadcrumb {...props} />
    </ThemeImporter>
  )
}

Breadcrumb.propTypes = ReactStrapBreadcrumb.propTypes

export default Breadcrumb
