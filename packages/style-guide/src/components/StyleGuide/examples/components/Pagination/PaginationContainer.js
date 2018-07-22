import React from 'react'

import PaginationDefault from './PaginationDefault'
import PaginationSizingLarge from './PaginationSizingLarge'
import PaginationSizingSmall from './PaginationSizingSmall'
import PaginationState from './PaginationState'

import PaginationDefaultCode from '../../../code/components/Pagination/PaginationDefaultCode'
import PaginationSizingLargeCode from '../../../code/components/Pagination/PaginationSizingLargeCode'
import PaginationSizingSmallCode from '../../../code/components/Pagination/PaginationSizingSmallCode'
import PaginationStateCode from '../../../code/components/Pagination/PaginationStateCode'

import StyleGuideComponent from '../../../StyleGuideComponent'
import StyleGuideWrapper from '../../../StyleGuideWrapper'

const Pagination = props => {
  return (
    <StyleGuideWrapper title="Pagination" {...props}>
      <StyleGuideComponent
        title="Pagination"
        name="PaginationDefault"
        component={<PaginationDefault />}
        code={PaginationDefaultCode}
      />
      <StyleGuideComponent
        title="Pagination"
        name="PaginationSizingLarge"
        component={<PaginationSizingLarge />}
        code={PaginationSizingLargeCode}
      />
      <StyleGuideComponent
        title="Pagination"
        name="PaginationSizingSmall"
        component={<PaginationSizingSmall />}
        code={PaginationSizingSmallCode}
      />
      <StyleGuideComponent
        title="Pagination"
        name="PaginationState"
        component={<PaginationState />}
        code={PaginationStateCode}
      />
    </StyleGuideWrapper>
  )
}

export default Pagination
