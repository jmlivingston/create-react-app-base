const ProgressColorCode = `import React, { Fragment } from 'react'

import { Progress } from 'components/Common'

const ProgressColor = () => {
  return (
    <Fragment>
      <Progress value={2 * 5} />
      <Progress color="success" value="25" />
      <Progress color="info" value={50} />
      <Progress color="warning" value={75} />
      <Progress color="danger" value="100" />
    </Fragment>
  )
}

export default ProgressColor
`

export default ProgressColorCode
