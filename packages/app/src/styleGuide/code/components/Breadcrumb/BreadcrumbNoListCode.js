const BreadcrumbNoListCode = `import React, { Fragment } from 'react'

import { Breadcrumb, BreadcrumbItem } from 'components/Common'

const BreadcrumbNoList = () => {
  return (
    <Fragment>
      <Breadcrumb tag="nav">
        <BreadcrumbItem tag="a" href="/">
          Home
        </BreadcrumbItem>
        <BreadcrumbItem tag="a" href="/">
          Library
        </BreadcrumbItem>
        <BreadcrumbItem tag="a" href="/">
          Data
        </BreadcrumbItem>
        <BreadcrumbItem active tag="span">
          Bootstrap
        </BreadcrumbItem>
      </Breadcrumb>
    </Fragment>
  )
}

export default BreadcrumbNoList
`

export default BreadcrumbNoListCode
