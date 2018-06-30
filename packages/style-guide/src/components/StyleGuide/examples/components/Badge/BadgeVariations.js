import React, { Fragment } from 'react'

import { Badge } from '@myorg/components-common'

const BadgeVariations = () => {
  return (
    <Fragment>
      <Badge color="primary">Primary</Badge>
      <Badge color="secondary">Secondary</Badge>
      <Badge color="success">Success</Badge>
      <Badge color="danger">Danger</Badge>
      <Badge color="warning">Warning</Badge>
      <Badge color="info">Info</Badge>
      <Badge color="light">Light</Badge>
      <Badge color="dark">Dark</Badge>
    </Fragment>
  )
}

export default BadgeVariations
