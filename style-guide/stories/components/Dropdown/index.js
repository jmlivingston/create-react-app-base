import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import React from 'react'

import config from '../../config'
import { default as CustomDropdown } from './CustomDropdown'
import { default as Dropdown } from './Dropdown'
import { default as DropdownSizing } from './DropdownSizing'
import { default as DropdownUncontrolled } from './DropdownUncontrolled'

storiesOf('Dropdown', module)
  .addDecorator(config.wrapper)
  .add('Custom', withInfo(config.defaults.info)(() => <CustomDropdown />))
  .add('Default', withInfo(config.defaults.info)(() => <Dropdown />))
  .add('Sizing', withInfo(config.defaults.info)(() => <DropdownSizing />))
  .add('Uncontrolled', withInfo(config.defaults.info)(() => <DropdownUncontrolled />))
