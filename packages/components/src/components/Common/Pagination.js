import { Pagination as ReactStrapPagination } from 'reactstrap'
import React from 'react'

import ThemeImporter from '../Global/ThemeImporter'

const Pagination = props => {
  return (
    <ThemeImporter sassNames={['pagination']}>
      <ReactStrapPagination {...props} />
    </ThemeImporter>
  )
}

Pagination.propTypes = ReactStrapPagination.propTypes

export default Pagination
