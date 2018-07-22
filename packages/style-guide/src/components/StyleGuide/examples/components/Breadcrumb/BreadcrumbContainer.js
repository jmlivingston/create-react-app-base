import React from 'react'

import BreadcrumbDefault from './BreadcrumbDefault'
import BreadcrumbNoList from './BreadcrumbNoList'

import BreadcrumbDefaultCode from '../../../code/components/Breadcrumb/BreadcrumbDefaultCode'
import BreadcrumbNoListCode from '../../../code/components/Breadcrumb/BreadcrumbNoListCode'

import StyleGuideComponent from '../../../StyleGuideComponent'
import StyleGuideWrapper from '../../../StyleGuideWrapper'

const Breadcrumb = props => {
  return (
    <StyleGuideWrapper title="Breadcrumb" {...props}>
      <StyleGuideComponent
        title="Breadcrumb"
        name="BreadcrumbDefault"
        component={<BreadcrumbDefault />}
        code={BreadcrumbDefaultCode}
      />
      <StyleGuideComponent
        title="Breadcrumb"
        name="BreadcrumbNoList"
        component={<BreadcrumbNoList />}
        code={BreadcrumbNoListCode}
      />
    </StyleGuideWrapper>
  )
}

export default Breadcrumb
