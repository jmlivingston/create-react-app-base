import React from 'react'

import TableDefault from './TableDefault'

import TableDefaultCode from '../../../code/components/Table/TableDefaultCode'

import StyleGuideComponent from '../../../StyleGuideComponent'
import StyleGuideWrapper from '../../../StyleGuideWrapper'

const Table = props => {
  return (
    <StyleGuideWrapper title="Table" {...props}>
      <StyleGuideComponent title="Table" name="TableDefault" component={<TableDefault />} code={TableDefaultCode} />
    </StyleGuideWrapper>
  )
}

export default Table
