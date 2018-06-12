import ReactTable from 'react-table'
import React from 'react'

import ThemeImporter from 'components/Global/ThemeImporter'

// TODO: Implement custom paging component to override what is here
// Also we can create some defaults for things like pageSize, pageSizeOptions, etc
const Table = ({ ...props }) => {
  return (
    <ThemeImporter sassNames={['_tables']}>
      <ReactTable {...props} />
    </ThemeImporter>
  )
}

Table.propTypes = ReactTable.propTypes

export default Table
