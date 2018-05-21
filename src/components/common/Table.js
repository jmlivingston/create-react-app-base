import { Table as ReactStrapTable } from 'reactstrap'

import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const Table = props => {
  return (
    <Fragment>
      <ThemeImporter path="_table">
        <ReactStrapTable {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

Table.propTypes = ReactStrapTable.propTypes

export default Table
