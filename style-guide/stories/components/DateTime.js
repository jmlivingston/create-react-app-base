import { storiesOf } from '@storybook/react'
import React from 'react'

import config from '../config'
import { DateTime } from 'components/Common'

storiesOf('DateTime', module)
  .addDecorator(config.wrapper)
  .add('Default', () => <DateTime />)
