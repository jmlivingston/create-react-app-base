import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import React from 'react'

import { Button } from 'components/Common'
import config from '../../config'

storiesOf('Button', module)
  .addDecorator(config.wrapper)
  .add(
    'Default',
    withInfo(config.defaults.info)(() => (
      <div>
        <Button color="primary">primary</Button> <Button color="secondary">secondary</Button>{' '}
        <Button color="success">success</Button> <Button color="info">info</Button>{' '}
        <Button color="warning">warning</Button> <Button color="danger">danger</Button>{' '}
        <Button color="link">link</Button>
      </div>
    ))
  )
