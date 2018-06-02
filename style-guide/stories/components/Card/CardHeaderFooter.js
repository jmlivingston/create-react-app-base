import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import React from 'react'

import { Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText } from 'components/Common'
import config from '../../config'

storiesOf('Card', module)
  .addDecorator(config.wrapper)
  .add(
    'HeaderFooter',
    withInfo(config.defaults.info)(() => (
      <div>
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
      </div>
    ))
  )
