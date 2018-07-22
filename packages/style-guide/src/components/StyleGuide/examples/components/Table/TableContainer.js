import React, { Fragment } from 'react'

import TableDefault from './TableDefault'

import TableDefaultCode from '../../../code/components/Table/TableDefaultCode'
    
import StyleGuideWrapper from '../../../StyleGuideWrapper'
    
const Table = props => {
  return (
    <Fragment>
      <StyleGuideWrapper title="Table" name="TableDefault" component={<TableDefault />} code={TableDefaultCode} {...props} />
    </Fragment>
  )
}

export default Table
    
