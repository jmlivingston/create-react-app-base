import { Table as ReactStrapTable } from 'reactstrap'

import React, { Fragment } from 'react'

import ThemeImporter from '../global/ThemeImporter'

const Table = props => {
  return (
    <Fragment>
      <ThemeImporter path="_tables">
        <ReactStrapTable {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

Table.propTypes = ReactStrapTable.propTypes

export default Table
