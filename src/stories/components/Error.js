import { storiesOf } from '@storybook/react'
import React from 'react'

import config from 'stories/config'
import { Error } from 'components/Common'

storiesOf('Error', module)
  .addDecorator(config.wrapper)
  .add('Default', () => <Error />)
