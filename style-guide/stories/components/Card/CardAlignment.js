import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import React from 'react'

import { Card, Button, CardTitle, CardText } from 'components/Common'
import config from '../../config'

storiesOf('Card', module)
  .addDecorator(config.wrapper)
  .add(
    'Alignment',
    withInfo(config.defaults.info)(() => (
      <div>
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
      </div>
    ))
  )
