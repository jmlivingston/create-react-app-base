import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import React from 'react'

import { UncontrolledAlert } from 'components/Common'
import config from '../../config'

storiesOf('Alert', module)
  .addDecorator(config.wrapper)
  .add(
    'AlertUncontrolledDismiss',
    withInfo(config.defaults.info)(() => (
      <UncontrolledAlert color="info">I am an alert and I can be dismissed!</UncontrolledAlert>
    ))
  )
