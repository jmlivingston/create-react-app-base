import { storiesOf } from '@storybook/react'
import React from 'react'

import config from '../../config'
import { default as Popover } from './Popover'
import { default as PopoverMulti } from './PopoverMulti'

storiesOf('Popover', module)
  .addDecorator(config.wrapper)
  .add('Default', () => <Popover />)
  .add('Multi', () => <PopoverMulti />)
