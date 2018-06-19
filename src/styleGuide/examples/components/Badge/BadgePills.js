import React, { Fragment } from 'react'

import { Badge } from 'components/Common'

const BadgePills = () => {
  return (
    <Fragment>
      <Badge color="primary" pill>
        Primary
      </Badge>
      <Badge color="secondary" pill>
        Secondary
      </Badge>
      <Badge color="success" pill>
        Success
      </Badge>
      <Badge color="danger" pill>
        Danger
      </Badge>
      <Badge color="warning" pill>
        Warning
      </Badge>
      <Badge color="info" pill>
        Info
      </Badge>
      <Badge color="light" pill>
        Light
      </Badge>
      <Badge color="dark" pill>
        Dark
      </Badge>
    </Fragment>
  )
}

export default BadgePills
