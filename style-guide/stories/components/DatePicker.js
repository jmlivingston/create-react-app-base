import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import React from 'react'

import config from '../config'
import { DatePicker } from 'components/Common'

storiesOf('DatePicker', module)
  .addDecorator(config.wrapper)
  .add('Default', withInfo(config.defaults.info)(() => <DatePicker />))
