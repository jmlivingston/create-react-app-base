import React, { Fragment } from 'react'

import PaginationDefault from './PaginationDefault'
import PaginationSizingLarge from './PaginationSizingLarge'
import PaginationSizingSmall from './PaginationSizingSmall'
import PaginationState from './PaginationState'

import PaginationDefaultCode from '../../../code/components/Pagination/PaginationDefaultCode'
import PaginationSizingLargeCode from '../../../code/components/Pagination/PaginationSizingLargeCode'
import PaginationSizingSmallCode from '../../../code/components/Pagination/PaginationSizingSmallCode'
import PaginationStateCode from '../../../code/components/Pagination/PaginationStateCode'
    
import StyleGuideWrapper from '../../../StyleGuideWrapper'
    
const Pagination = props => {
  return (
    <Fragment>
      <StyleGuideWrapper title="Pagination" name="PaginationDefault" component={<PaginationDefault />} code={PaginationDefaultCode} {...props} />
				<StyleGuideWrapper title="Pagination" name="PaginationSizingLarge" component={<PaginationSizingLarge />} code={PaginationSizingLargeCode} {...props} />
				<StyleGuideWrapper title="Pagination" name="PaginationSizingSmall" component={<PaginationSizingSmall />} code={PaginationSizingSmallCode} {...props} />
				<StyleGuideWrapper title="Pagination" name="PaginationState" component={<PaginationState />} code={PaginationStateCode} {...props} />
    </Fragment>
  )
}

export default Pagination
    
