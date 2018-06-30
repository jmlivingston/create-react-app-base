import { Breadcrumb as ReactStrapBreadcrumb } from 'reactstrap'
import React from 'react'

import ThemeImporter from '../Global/ThemeImporter'

const Breadcrumb = props => {
  return (
    <ThemeImporter sassNames={['breadcrumb']}>
      <ReactStrapBreadcrumb {...props} />
    </ThemeImporter>
  )
}

Breadcrumb.propTypes = ReactStrapBreadcrumb.propTypes

export default Breadcrumb
