const BadgeLinksCode = `import React, { Fragment } from 'react'

import { Badge } from 'components/Common'

const BadgeLinks = () => {
  return (
    <Fragment>
      <Badge href="/" color="primary">
        Primary
      </Badge>
      <Badge href="/" color="secondary">
        Secondary
      </Badge>
      <Badge href="/" color="success">
        Success
      </Badge>
      <Badge href="/" color="danger">
        Danger
      </Badge>
      <Badge href="/" color="warning">
        Warning
      </Badge>
      <Badge href="/" color="info">
        Info
      </Badge>
      <Badge href="/" color="light">
        Light
      </Badge>
      <Badge href="/" color="dark">
        Dark
      </Badge>
    </Fragment>
  )
}

export default BadgeLinks
`

export default BadgeLinksCode
