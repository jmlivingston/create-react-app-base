import { Table as ReactStrapTable } from 'reactstrap'
import React from 'react'

import ThemeImporter from 'components/Global/ThemeImporter'

// TODO: Consider one of these
// http://www.npmtrends.com/fixed-data-table-vs-react-datasheet-vs-react-handsontable-vs-react-list-vs-react-table-vs-react-virtualized-vs-reactabular-vs-react-data-grid

const Table = props => {
  return (
    <ThemeImporter sassNames={['_tables']}>
      <ReactStrapTable {...props} />
    </ThemeImporter>
  )
}

Table.propTypes = ReactStrapTable.propTypes

export default Table
