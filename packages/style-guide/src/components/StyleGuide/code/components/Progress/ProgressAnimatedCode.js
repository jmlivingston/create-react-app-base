const ProgressAnimatedCode = `import React, { Fragment } from 'react'

import { Progress } from '@myorg/components'

const ProgressAnimated = () => {
  return (
    <Fragment>
      <Progress animated value={2 * 5} />
      <Progress animated color="success" value="25" />
      <Progress animated color="info" value={50} />
      <Progress animated color="warning" value={75} />
      <Progress animated color="danger" value="100" />
      <Progress multi>
        <Progress animated bar value="10" />
        <Progress animated bar color="success" value="30" />
        <Progress animated bar color="warning" value="20" />
        <Progress animated bar color="danger" value="20" />
      </Progress>
    </Fragment>
  )
}

export default ProgressAnimated
`

export default ProgressAnimatedCode
