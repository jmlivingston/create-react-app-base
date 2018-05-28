import { Pagination as ReactStrapPagination } from 'reactstrap'

import React, { Fragment } from 'react'

import ThemeImporter from '../global/ThemeImporter'

const Pagination = props => {
  return (
    <Fragment>
      <ThemeImporter path="_pagination">
        <ReactStrapPagination {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

Pagination.propTypes = ReactStrapPagination.propTypes

export default Pagination
