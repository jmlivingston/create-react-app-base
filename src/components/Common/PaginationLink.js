import { PaginationLink as ReactStrapPaginationLink } from 'reactstrap'
import React from 'react'

import ThemeImporter from 'components/Global/ThemeImporter'

const PaginationLink = props => {
  return (
    <ThemeImporter>
      <ReactStrapPaginationLink {...props} />
    </ThemeImporter>
  )
}

PaginationLink.propTypes = ReactStrapPaginationLink.propTypes

export default PaginationLink