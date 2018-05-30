import { Pagination as ReactStrapPagination } from 'reactstrap'
import React from 'react'

import ThemeImporter from 'components/Global/ThemeImporter'

const Pagination = props => {
  return (
    <ThemeImporter sassNames={['_pagination']}>
      <ReactStrapPagination {...props} />
    </ThemeImporter>
  )
}

Pagination.propTypes = ReactStrapPagination.propTypes

export default Pagination
