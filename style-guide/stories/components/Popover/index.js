import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import React from 'react'

import config from '../../config'
import { default as Popover } from './Popover'
import { default as PopoverMulti } from './PopoverMulti'

storiesOf('Popover', module)
  .addDecorator(config.wrapper)
  .add('Default', withInfo(config.defaults.info)(() => <Popover />))
  .add('Multi', withInfo(config.defaults.info)(() => <PopoverMulti />))
