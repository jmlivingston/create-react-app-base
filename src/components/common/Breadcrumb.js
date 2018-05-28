import { Breadcrumb as ReactStrapBreadcrumb } from 'reactstrap'

import React, { Fragment } from 'react'

import ThemeImporter from '../global/ThemeImporter'

const Breadcrumb = props => {
  return (
    <Fragment>
      <ThemeImporter path="_breadcrumb">
        <ReactStrapBreadcrumb {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

Breadcrumb.propTypes = ReactStrapBreadcrumb.propTypes

export default Breadcrumb
