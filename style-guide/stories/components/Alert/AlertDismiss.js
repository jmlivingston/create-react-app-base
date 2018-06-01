import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import React from 'react'

import { Alert } from 'components/Common'
import config from '../../config'

storiesOf('Alert', module)
  .addDecorator(config.wrapper)
  .add(
    'AlertDismiss',
    withInfo(config.defaults.info)(() => (
      <Alert color="info" isOpen={this.state.visible} toggle={this.onDismiss}>
        I am an alert and I can be dismissed!
      </Alert>
    ))
  )
