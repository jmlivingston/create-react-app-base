import { Table as ReactStrapTable } from 'reactstrap'
import React from 'react'

import ThemeImporter from 'components/global/ThemeImporter'

const Table = props => {
  return (
    <ThemeImporter sassNames={['_tables']}>
      <ReactStrapTable {...props} />
    </ThemeImporter>
  )
}

Table.propTypes = ReactStrapTable.propTypes

export default Table
