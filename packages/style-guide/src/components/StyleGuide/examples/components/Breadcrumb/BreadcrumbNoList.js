import React, { Fragment } from 'react'

import { Breadcrumb, BreadcrumbItem } from '@myorg/components-common'

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
