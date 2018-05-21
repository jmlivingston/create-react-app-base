import { PaginationLink as ReactStrapPaginationLink } from 'reactstrap'

import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const PaginationLink = props => {
  return (
    <Fragment>
      <ThemeImporter path="_paginationlink">
        <ReactStrapPaginationLink {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

PaginationLink.propTypes = ReactStrapPaginationLink.propTypes

export default PaginationLink
