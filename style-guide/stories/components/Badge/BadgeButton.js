import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import React from 'react'

import { Badge, Button } from 'components/Common'
import config from '../../config'

storiesOf('Badge', module)
  .addDecorator(config.wrapper)
  .add(
    'Button',
    withInfo(config.defaults.info)(() => (
      <div>
        <Button color="primary" outline>
          Notifications <Badge color="secondary">4</Badge>
        </Button>
      </div>
    ))
  )
