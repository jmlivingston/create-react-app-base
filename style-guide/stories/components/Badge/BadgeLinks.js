import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import React from 'react'

import { Badge } from 'components/Common'
import config from '../../config'

storiesOf('Badge', module)
  .addDecorator(config.wrapper)
  .add(
    'Links',
    withInfo(config.defaults.info)(() => (
      <div>
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
      </div>
    ))
  )
