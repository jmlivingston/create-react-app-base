const CardHeaderFooterCode = `import React, { Fragment } from 'react'

import { Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText } from '@myorg/components'

const CardHeaderFooter = () => {
  return (
    <Fragment>
      <Card>
        <CardHeader>Header</CardHeader>
        <CardBody>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>

      <Card>
        <CardHeader tag="h3">Featured</CardHeader>
        <CardBody>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </CardBody>
        <CardFooter className="text-muted">Footer</CardFooter>
      </Card>
    </Fragment>
  )
}

export default CardHeaderFooter
`

export default CardHeaderFooterCode
