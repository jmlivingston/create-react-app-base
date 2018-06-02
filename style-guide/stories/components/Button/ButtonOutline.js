import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import React from 'react'

import { Button } from 'components/Common'
import config from '../../config'

storiesOf('Button', module)
  .addDecorator(config.wrapper)
  .add(
    'Outline',
    withInfo(config.defaults.info)(() => (
      <div>
        <Button outline color="primary">
          primary
        </Button>{' '}
        <Button outline color="secondary">
          secondary
        </Button>{' '}
        <Button outline color="success">
          success
        </Button>{' '}
        <Button outline color="info">
          info
        </Button>{' '}
        <Button outline color="warning">
          warning
        </Button>{' '}
        <Button outline color="danger">
          danger
        </Button>
      </div>
    ))
  )
