const BreadcrumbDefaultCode = `import React, { Fragment } from 'react'

import { Breadcrumb, BreadcrumbItem } from '@myorg/components'

const BreadcrumbDefault = () => {
  return (
    <Fragment>
      <Breadcrumb>
        <BreadcrumbItem active>Home</BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>Library</BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="/">Library</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>Data</BreadcrumbItem>
      </Breadcrumb>
    </Fragment>
  )
}

export default BreadcrumbDefault
`

export default BreadcrumbDefaultCode
