import { storiesOf } from '@storybook/react'
import React from 'react'

import config from 'stories/config'
import { DatePicker } from 'components/Common'

storiesOf('DatePicker', module)
  .addDecorator(config.wrapper)
  .add('Default', () => <DatePicker />)
