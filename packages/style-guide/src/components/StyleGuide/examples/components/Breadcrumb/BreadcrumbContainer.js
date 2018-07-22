import React, { Fragment } from 'react'

import BreadcrumbDefault from './BreadcrumbDefault'
import BreadcrumbNoList from './BreadcrumbNoList'

import BreadcrumbDefaultCode from '../../../code/components/Breadcrumb/BreadcrumbDefaultCode'
import BreadcrumbNoListCode from '../../../code/components/Breadcrumb/BreadcrumbNoListCode'
    
import StyleGuideWrapper from '../../../StyleGuideWrapper'
    
const Breadcrumb = props => {
  return (
    <Fragment>
      <StyleGuideWrapper title="Breadcrumb" name="BreadcrumbDefault" component={<BreadcrumbDefault />} code={BreadcrumbDefaultCode} {...props} />
				<StyleGuideWrapper title="Breadcrumb" name="BreadcrumbNoList" component={<BreadcrumbNoList />} code={BreadcrumbNoListCode} {...props} />
    </Fragment>
  )
}

export default Breadcrumb
    
