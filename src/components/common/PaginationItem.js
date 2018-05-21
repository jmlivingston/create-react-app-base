import { PaginationItem as ReactStrapPaginationItem } from 'reactstrap'

import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const PaginationItem = props => {
  return (
    <Fragment>
      <ThemeImporter path="_paginationitem">
        <ReactStrapPaginationItem {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

PaginationItem.propTypes = ReactStrapPaginationItem.propTypes

export default PaginationItem
