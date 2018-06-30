import React, { Fragment } from 'react'

import { Button } from '@myorg/components-common'

const ButtonDefault = () => {
  return (
    <Fragment>
      <Button color="primary">primary</Button> <Button color="secondary">secondary</Button>{' '}
      <Button color="success">success</Button> <Button color="info">info</Button>{' '}
      <Button color="warning">warning</Button> <Button color="danger">danger</Button> <Button color="link">link</Button>
    </Fragment>
  )
}

export default ButtonDefault
