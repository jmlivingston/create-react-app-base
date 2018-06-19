import React from 'react'

import { Badge, Button } from 'components/Common'

const BadgeButton = () => {
  return (
    <Button color="primary" outline>
      Notifications <Badge color="secondary">4</Badge>
    </Button>
  )
}

export default BadgeButton
