const CardAlignmentCode = `import React, { Fragment } from 'react'
import { Card, Button, CardTitle, CardText } from '@myorg/components-common'

const CardAlignment = () => {
  return (
    <Fragment>
      <Card body>
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button>Go somewhere</Button>
      </Card>
      <Card body className="text-center">
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button>Go somewhere</Button>
      </Card>
      <Card body className="text-right">
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button>Go somewhere</Button>
      </Card>
    </Fragment>
  )
}

export default CardAlignment
`

export default CardAlignmentCode
