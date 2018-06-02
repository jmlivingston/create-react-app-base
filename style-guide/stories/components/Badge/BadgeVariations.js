import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import React from 'react'

import { Badge } from 'components/Common'
import config from '../../config'

storiesOf('Badge', module)
  .addDecorator(config.wrapper)
  .add(
    'Variations',
    withInfo(config.defaults.info)(() => (
      <div>
        <Badge color="primary">Primary</Badge>
        <Badge color="secondary">Secondary</Badge>
        <Badge color="success">Success</Badge>
        <Badge color="danger">Danger</Badge>
        <Badge color="warning">Warning</Badge>
        <Badge color="info">Info</Badge>
        <Badge color="light">Light</Badge>
        <Badge color="dark">Dark</Badge>
      </div>
    ))
  )
