import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import React from 'react'

import { Progress } from 'components/Common'
import config from '../../config'

storiesOf('Progress', module)
  .addDecorator(config.wrapper)
  .add(
    'Color',
    withInfo(config.defaults.info)(() => (
      <div>
        <Progress value={2 * 5} />
        <Progress color="success" value="25" />
        <Progress color="info" value={50} />
        <Progress color="warning" value={75} />
        <Progress color="danger" value="100" />
      </div>
    ))
  )
