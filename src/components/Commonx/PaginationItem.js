import { PaginationItem as ReactStrapPaginationItem } from 'reactstrap'
import React from 'react'

import ThemeImporter from 'components/Global/ThemeImporter'

const PaginationItem = props => {
  return (
    <ThemeImporter>
      <ReactStrapPaginationItem {...props} />
    </ThemeImporter>
  )
}

PaginationItem.propTypes = ReactStrapPaginationItem.propTypes

export default PaginationItem
