import React from 'react'

import { Badge, Button } from '@myorg/components-common'

const BadgeButton = () => {
  return (
    <Button color="primary" outline>
      Notifications <Badge color="secondary">4</Badge>
    </Button>
  )
}

export default BadgeButton
